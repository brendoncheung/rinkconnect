import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:rinkconnect/core/core_widgets/rc_badge.dart';
import 'package:rinkconnect/core/core_widgets/rc_button.dart';
import 'package:rinkconnect/core/core_widgets/rc_card.dart';
import 'package:rinkconnect/core/core_widgets/rc_icon_chip.dart';
import 'package:rinkconnect/core/core_widgets/rc_list_row.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';
import 'package:rinkconnect/models/user_role.dart';
import 'package:rinkconnect/data/service/state/club_store.dart';

/// Every event in the season, with how much of each is still uncovered.
class EventsListScreen extends ConsumerWidget {
  const EventsListScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final club = ref.watch(clubStoreProvider);
    final isCoordinator = club.role == UserRole.coordinator;

    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(36, 30, 36, 30),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Events',
                      style: Theme.of(context).textTheme.displaySmall
                          ?.copyWith(
                            color: RinkconnectColors.eveningRink,
                            fontSize: 26,
                          ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      isCoordinator
                          ? 'Post an event and the slots you need covered.'
                          : 'Claim a slot to work off your family hours.',
                      style: const TextStyle(
                        fontSize: 14,
                        color: RinkconnectColors.evening400,
                      ),
                    ),
                  ],
                ),
              ),
              if (isCoordinator)
                RCButton(
                  label: 'New event',
                  onPressed: () => context.go('/dashboard/events/new'),
                  icon: Icons.add,
                ),
            ],
          ),
          const SizedBox(height: 22),
          for (final event in club.events)
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: RCCard(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    RCListRow(
                      leading: RCIconChip(
                        icon: Icons.calendar_month,
                        background: RinkconnectColors.rinkLight.withValues(alpha: 0.14),
                        iconColor: RinkconnectColors.rinkLight,
                        size: 44,
                      ),
                      title: Text(
                        event.name,
                        style: const TextStyle(
                          fontWeight: FontWeight.w700,
                          fontSize: 16,
                          color: RinkconnectColors.eveningRink,
                        ),
                      ),
                      subtitle: Text(
                        '${event.whenLong} · ${event.location}',
                        style: const TextStyle(
                          fontSize: 13,
                          color: RinkconnectColors.evening400,
                        ),
                      ),
                      trailing: RCButton(
                        label: 'Open',
                        onPressed: () =>
                            context.go('/dashboard/events/${event.id}'),
                        variant: RCButtonVariant.secondary,
                        size: RCButtonSize.sm,
                      ),
                    ),
                    const SizedBox(height: 10),
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: [
                        for (final slot in event.volunteerSlots)
                          RCBadge(
                            label:
                                '${slot.label} · ${slot.hoursLabel}h',
                            tone: club.slotIsTaken(slot.id)
                                ? RCBadgeTone.success
                                : RCBadgeTone.warm,
                            dot: club.slotIsTaken(slot.id),
                          ),
                        if (event.volunteerSlots.isEmpty)
                          const RCBadge(
                            label: 'No volunteer slots',
                            tone: RCBadgeTone.neutral,
                          ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
        ],
      ),
    );
  }
}
