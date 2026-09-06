import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:rinkconnect/models/user_role.dart';
import 'package:rinkconnect/data/service/state/club_store.dart';
import 'package:rinkconnect/data/service/state/seed_data.dart';

/// Guards the rule the whole fee calculation rests on: **only approved hours
/// count**. If claiming a slot or logging hours moves a family's balance, a
/// family could claim twenty hours of slots, work none, and appear to owe
/// nothing (ADR 0005).
void main() {
  late ProviderContainer container;

  setUp(() {
    container = ProviderContainer();
    addTearDown(container.dispose);
  });

  ClubStore store() => container.read(clubStoreProvider.notifier);

  double approvedFor(String familyId) =>
      container.read(clubStoreProvider).balanceFor(familyId).approved;

  double pendingFor(String familyId) =>
      container.read(clubStoreProvider).balanceFor(familyId).pending;

  /// A slot nobody has claimed in the seed data.
  String openSlotId() =>
      container.read(clubStoreProvider).unfilledSlots.first.slot.id;

  String eventIdForSlot(String slotId) =>
      container.read(clubStoreProvider).slotById(slotId)!.eventId;

  test('claiming a slot does not move the balance', () {
    store().setRole(UserRole.parent);
    final before = approvedFor('f-cheung');

    final slotId = openSlotId();
    store().claimSlot(slotId: slotId, eventId: eventIdForSlot(slotId));

    expect(
      approvedFor('f-cheung'),
      before,
      reason: 'a pledge is not credit',
    );
    expect(
      pendingFor('f-cheung'),
      greaterThan(0),
      reason: 'the claimed hours should show as pending',
    );
  });

  test('logging hours does not move the balance either', () {
    store().setRole(UserRole.parent);
    final before = approvedFor('f-cheung');

    final slotId = openSlotId();
    store().claimSlot(slotId: slotId, eventId: eventIdForSlot(slotId));
    final signup = container.read(clubStoreProvider).signupForSlot(slotId)!;
    store().submitHours(signup.id);

    expect(
      approvedFor('f-cheung'),
      before,
      reason: 'submitted hours await the coordinator',
    );
  });

  test('approval is what creates credit', () {
    store().setRole(UserRole.parent);
    final before = approvedFor('f-cheung');

    final slotId = openSlotId();
    final slotHours = container.read(clubStoreProvider).slotById(slotId)!.hours;
    store().claimSlot(slotId: slotId, eventId: eventIdForSlot(slotId));
    final signup = container.read(clubStoreProvider).signupForSlot(slotId)!;
    store().submitHours(signup.id);
    store().approveSignup(signup.id);

    expect(approvedFor('f-cheung'), before + slotHours);
  });

  test('the coordinator can approve fewer hours than the slot was worth', () {
    store().setRole(UserRole.parent);
    final before = approvedFor('f-cheung');

    final slotId = openSlotId();
    store().claimSlot(slotId: slotId, eventId: eventIdForSlot(slotId));
    final signup = container.read(clubStoreProvider).signupForSlot(slotId)!;
    store().submitHours(signup.id);
    store().approveSignup(signup.id, hours: 0.5);

    expect(approvedFor('f-cheung'), before + 0.5);
  });

  test('one family working hours leaves other families untouched', () {
    store().setRole(UserRole.parent);
    final otherBefore = approvedFor('f-bearman');

    final slotId = openSlotId();
    store().claimSlot(slotId: slotId, eventId: eventIdForSlot(slotId));
    final signup = container.read(clubStoreProvider).signupForSlot(slotId)!;
    store().submitHours(signup.id);
    store().approveSignup(signup.id);

    expect(approvedFor('f-bearman'), otherBefore);
  });

  test('any eligible household member draws down the same family pool', () {
    store().setRole(UserRole.parent);
    final before = approvedFor('f-cheung');

    // Sofia is a skater on the Cheung membership, old enough to earn hours.
    final slotId = openSlotId();
    final slotHours = container.read(clubStoreProvider).slotById(slotId)!.hours;
    store().claimSlot(
      slotId: slotId,
      eventId: eventIdForSlot(slotId),
      personId: 'p-sofia',
    );
    final signup = container.read(clubStoreProvider).signupForSlot(slotId)!;
    store().submitHours(signup.id);
    store().approveSignup(signup.id);

    expect(
      approvedFor('f-cheung'),
      before + slotHours,
      reason: 'the skater works against the family balance, not her own',
    );
  });

  test('a released slot frees up and credits nobody', () {
    store().setRole(UserRole.parent);
    final before = approvedFor('f-cheung');

    final slotId = openSlotId();
    store().claimSlot(slotId: slotId, eventId: eventIdForSlot(slotId));
    final signup = container.read(clubStoreProvider).signupForSlot(slotId)!;
    store().releaseSlot(signup.id);

    expect(container.read(clubStoreProvider).slotIsTaken(slotId), isFalse);
    expect(approvedFor('f-cheung'), before);
    expect(pendingFor('f-cheung'), 0);
  });

  test('the fee is computed from remaining hours at the club rate', () {
    final balance = container.read(clubStoreProvider).balanceFor('f-cheung');
    expect(balance.owed, 20);
    expect(balance.approved, 4); // seeded
    expect(balance.remaining, 16);
    expect(balance.feeAt(kFeeRatePerHour), 160);
  });
}
