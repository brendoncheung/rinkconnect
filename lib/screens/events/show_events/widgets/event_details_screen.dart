import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:rinkconnect/core/core_widgets/rc_badge.dart';
import 'package:rinkconnect/core/core_widgets/rc_card.dart';
import 'package:rinkconnect/core/core_widgets/rc_detail_row.dart';
import 'package:rinkconnect/core/core_widgets/rc_hero_header.dart';
import 'package:rinkconnect/core/core_widgets/rc_section_title.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';
import 'package:rinkconnect/models/user_role.dart';
import 'package:rinkconnect/data/service/state/club_store.dart';
import 'package:rinkconnect/screens/events/details_events/widgets/volunteer_slot_tile.dart';

/// One event, its slots, and who has claimed them.
///
/// Claiming a slot creates a `pledged` signup — it does **not** move any
/// balance. Logging hours moves it to `submitted`, still not credit. Only the
/// coordinator's approval counts (ADR 0005).
class EventScreen extends ConsumerWidget {
  final String eventId;

  const EventScreen({super.key, required this.eventId});

  void _onBack(BuildContext context) {
    if (context.canPop()) {
      context.pop();
    } else {
      context.go('/dashboard/events');
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final club = ref.watch(clubStoreProvider);
    final store = ref.read(clubStoreProvider.notifier);
    final event = club.eventById(eventId);

    if (event == null) {
      return _NotFound(onBack: () => _onBack(context));
    }

    final myFamilyId = club.currentPerson.familyId;
    final canClaim = club.role == UserRole.parent;

    return Scaffold(
      backgroundColor: RinkconnectColors.glacier,
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            RCHeroHeader(
              tint: RinkconnectColors.rinkLight,
              title: event.name,
              onBack: () => _onBack(context),
              badge: event.badge == null
                  ? null
                  : RCBadge(label: event.badge!, tone: RCBadgeTone.warm),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 32),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  RCDetailRow(
                    icon: Icons.calendar_month,
                    label: 'When',
                    value: event.whenLong,
                  ),
                  RCDetailRow(
                    icon: Icons.location_on_outlined,
                    label: 'Where',
                    value: event.location,
                  ),
                  RCDetailRow(
                    icon: Icons.groups_outlined,
                    label: 'Who',
                    value: event.who,
                  ),
                  const SizedBox(height: 10),
                  Text(
                    event.body,
                    style: Theme.of(
                      context,
                    ).textTheme.bodyLarge?.copyWith(height: 1.6),
                  ),
                  const SizedBox(height: 8),
                  const Divider(
                    color: RinkconnectColors.glacier400,
                    height: 32,
                  ),
                  if (event.volunteerSlots.isNotEmpty) ...[
                    RCSectionTitle(
                      'Volunteer slots',
                      trailing: Text(
                        '${event.totalHours.toStringAsFixed(event.totalHours == event.totalHours.roundToDouble() ? 0 : 1)} hours total',
                        style: const TextStyle(
                          fontSize: 13,
                          color: RinkconnectColors.evening400,
                        ),
                      ),
                    ),
                    RCCard(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 14,
                        vertical: 4,
                      ),
                      child: Column(
                        children: [
                          for (
                            var i = 0;
                            i < event.volunteerSlots.length;
                            i++
                          )
                            Builder(
                              builder: (context) {
                                final slot = event.volunteerSlots[i];
                                final signup = club.signupForSlot(slot.id);
                                final holder = signup == null
                                    ? null
                                    : club.personById(signup.personId);
                                final isMine =
                                    holder != null &&
                                    holder.familyId == myFamilyId;

                                return VolunteerSlotTile(
                                  slot: slot,
                                  signup: signup,
                                  takenByName: holder?.name,
                                  isMine: isMine,
                                  showTopDivider: i > 0,
                                  onTake: canClaim && signup == null
                                      ? () => store.claimSlot(
                                          slotId: slot.id,
                                          eventId: event.id,
                                        )
                                      : null,
                                  onSubmit: signup == null
                                      ? null
                                      : () {
                                          store.submitHours(signup.id);
                                          ScaffoldMessenger.of(
                                            context,
                                          ).showSnackBar(
                                            const SnackBar(
                                              content: Text(
                                                'Sent to the coordinator. '
                                                'Hours count once approved.',
                                              ),
                                            ),
                                          );
                                        },
                                  onRelease: signup == null
                                      ? null
                                      : () => store.releaseSlot(signup.id),
                                );
                              },
                            ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 14),
                    Text(
                      canClaim
                          ? 'Hours are credited to your family once the coordinator '
                                'approves them.'
                          : 'Switch to the parent view to claim a slot.',
                      style: const TextStyle(
                        fontSize: 12.5,
                        color: RinkconnectColors.evening400,
                        height: 1.5,
                      ),
                    ),
                  ],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

}

class _NotFound extends StatelessWidget {
  final VoidCallback onBack;

  const _NotFound({required this.onBack});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const Text('That event no longer exists.'),
          const SizedBox(height: 12),
          TextButton(onPressed: onBack, child: const Text('Back to events')),
        ],
      ),
    );
  }
}
