import 'package:flutter/material.dart';
import 'package:rinkconnect/core/core_widgets/rc_badge.dart';
import 'package:rinkconnect/core/core_widgets/rc_card.dart';
import 'package:rinkconnect/core/core_widgets/rc_icon_chip.dart';
import 'package:rinkconnect/core/core_widgets/rc_list_row.dart';
import 'package:rinkconnect/core/core_widgets/rc_section_title.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';
import 'package:rinkconnect/models/event.dart';

/// Upcoming events, with how many volunteer slots on each are still open.
class EventsCard extends StatelessWidget {
  final List<Event> events;

  /// How many slots remain unclaimed on each event, keyed by event id.
  final Map<String, int> openSlotsByEvent;

  final void Function(Event event)? onTapEvent;
  final Widget? action;

  const EventsCard({
    super.key,
    required this.events,
    this.openSlotsByEvent = const {},
    this.onTapEvent,
    this.action,
  });

  @override
  Widget build(BuildContext context) {
    return RCCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          RCSectionTitle('Upcoming events', trailing: action),
          if (events.isEmpty)
            const Padding(
              padding: EdgeInsets.symmetric(vertical: 18),
              child: Text(
                'No events yet.',
                style: TextStyle(
                  fontSize: 14,
                  color: RinkconnectColors.evening400,
                ),
              ),
            ),
          for (var i = 0; i < events.length; i++)
            _EventRow(
              event: events[i],
              openSlots: openSlotsByEvent[events[i].id] ?? 0,
              showTopDivider: i > 0,
              onTap: onTapEvent == null ? null : () => onTapEvent!(events[i]),
            ),
        ],
      ),
    );
  }
}

class _EventRow extends StatelessWidget {
  final Event event;
  final int openSlots;
  final bool showTopDivider;
  final VoidCallback? onTap;

  const _EventRow({
    required this.event,
    required this.openSlots,
    required this.showTopDivider,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final row = RCListRow(
      padding: const EdgeInsets.symmetric(vertical: 13),
      showTopDivider: showTopDivider,
      leading: const RCIconChip(
        icon: Icons.calendar_month,
        background: RinkconnectColors.infoBg,
        iconColor: RinkconnectColors.edgeBlue,
      ),
      title: Text(
        event.name,
        style: const TextStyle(
          fontWeight: FontWeight.w700,
          fontSize: 15,
          color: RinkconnectColors.evening800,
        ),
      ),
      subtitle: Text(
        event.whenShort,
        style: const TextStyle(
          fontSize: 13.5,
          color: RinkconnectColors.evening400,
        ),
      ),
      trailing: openSlots > 0
          ? RCBadge(
              label: '$openSlots ${openSlots == 1 ? 'slot' : 'slots'} open',
              tone: RCBadgeTone.warm,
            )
          : const RCBadge(
              label: 'Fully covered',
              tone: RCBadgeTone.success,
              dot: true,
            ),
    );

    if (onTap == null) return row;
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(RinkconnectRadii.sm),
      child: row,
    );
  }
}
