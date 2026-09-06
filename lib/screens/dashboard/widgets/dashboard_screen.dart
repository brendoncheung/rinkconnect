import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:rinkconnect/core/core_widgets/rc_button.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';
import 'package:rinkconnect/models/event.dart';
import 'package:rinkconnect/models/signup_state.dart';
import 'package:rinkconnect/models/user_role.dart';
import 'package:rinkconnect/screens/dashboard/widgets/events_card.dart';
import 'package:rinkconnect/screens/dashboard/widgets/families_card.dart';
import 'package:rinkconnect/screens/dashboard/widgets/hours_card.dart';
import 'package:rinkconnect/data/service/state/club_store.dart';


/// Club home. What it shows depends on who is looking.
///
/// The coordinator sees the club's position and what needs her attention; a
/// parent sees their own family's balance and where they can pick up hours.
class DashboardScreen extends ConsumerWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final club = ref.watch(clubStoreProvider);
    final isCoordinator = club.role == UserRole.coordinator;

    final openSlots = <String, int>{
      for (final event in club.events)
        event.id: club
            .slotsForEvent(event.id)
            .where((slot) => !club.slotIsTaken(slot.id))
            .length,
    };

    void openEvent(Event event) =>
        context.go('/dashboard/events/${event.id}');

    final eventsCard = EventsCard(
      events: club.events,
      openSlotsByEvent: openSlots,
      onTapEvent: openEvent,
      action: isCoordinator
          ? RCButton(
              label: 'New event',
              onPressed: () => context.go('/dashboard/events/new'),
              variant: RCButtonVariant.ghost,
              size: RCButtonSize.sm,
              icon: Icons.add,
            )
          : null,
    );

    final left = Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        eventsCard,
        const SizedBox(height: 22),
        if (isCoordinator)
          ClubHoursCard(
            approved: club.clubHoursApproved,
            owed: club.clubHoursOwed,
            familyCount: club.familiesByHoursOutstanding.length,
            awaitingReview: club.awaitingReview.length,
            onReview: () => context.go('/dashboard/review'),
          )
        else
          HoursCard(
            balance: ref.watch(currentBalanceProvider),
            feeRatePerHour: club.feeRatePerHour,
            onLogHours: () => context.go('/dashboard/events'),
          ),
      ],
    );

    final right = Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (isCoordinator)
          FamiliesCard(
            rows: club.familiesByHoursOutstanding,
            feeRatePerHour: club.feeRatePerHour,
          )
        else
          _MyShiftsCard(onFindSlot: () => context.go('/dashboard/events')),
      ],
    );

    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(36, 30, 36, 30),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Good morning, ${club.currentPerson.firstName}',
            style: Theme.of(context).textTheme.displaySmall?.copyWith(
              color: RinkconnectColors.eveningRink,
              fontSize: 26,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            isCoordinator
                ? '${club.season} season · ${club.events.length} events scheduled'
                : '${club.currentFamily.name} · ${club.season} season',
            style: const TextStyle(
              fontSize: 14,
              color: RinkconnectColors.evening400,
            ),
          ),
          const SizedBox(height: 22),
          LayoutBuilder(
            builder: (context, constraints) {
              if (constraints.maxWidth < 900) {
                return Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [left, const SizedBox(height: 22), right],
                );
              }
              return Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(flex: 17, child: left),
                  const SizedBox(width: 22),
                  Expanded(flex: 10, child: right),
                ],
              );
            },
          ),
        ],
      ),
    );
  }
}

/// A parent's own shifts, across every event.
class _MyShiftsCard extends ConsumerWidget {
  final VoidCallback onFindSlot;

  const _MyShiftsCard({required this.onFindSlot});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final club = ref.watch(clubStoreProvider);
    final signups = ref.watch(mySignupsProvider);

    return Card(
      margin: EdgeInsets.zero,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(24, 22, 24, 22),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Your shifts',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
            const SizedBox(height: 12),
            if (signups.isEmpty)
              const Text(
                "You haven't claimed any slots yet.",
                style: TextStyle(
                  fontSize: 14,
                  color: RinkconnectColors.evening400,
                ),
              ),
            for (final signup in signups)
              Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            club.slotById(signup.slotId)?.label ?? 'Slot',
                            style: const TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.w600,
                              color: RinkconnectColors.eveningRink,
                            ),
                          ),
                          Text(
                            '${club.eventById(signup.eventId)?.name ?? ''} · '
                            '${club.personById(signup.personId).firstName}',
                            style: const TextStyle(
                              fontSize: 12.5,
                              color: RinkconnectColors.evening400,
                            ),
                          ),
                        ],
                      ),
                    ),
                    Text(
                      signup.state.label,
                      style: const TextStyle(
                        fontSize: 12.5,
                        fontWeight: FontWeight.w600,
                        color: RinkconnectColors.evening600,
                      ),
                    ),
                  ],
                ),
              ),
            const SizedBox(height: 8),
            RCButton(
              label: 'Find a slot',
              onPressed: onFindSlot,
              variant: RCButtonVariant.secondary,
              size: RCButtonSize.sm,
            ),
          ],
        ),
      ),
    );
  }
}
