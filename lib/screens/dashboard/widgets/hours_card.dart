import 'package:flutter/material.dart';
import 'package:rinkconnect/core/core_widgets/rc_button.dart';
import 'package:rinkconnect/core/core_widgets/rc_card.dart';
import 'package:rinkconnect/core/core_widgets/rc_icon_chip.dart';
import 'package:rinkconnect/core/core_widgets/rc_list_row.dart';
import 'package:rinkconnect/core/core_widgets/rc_section_title.dart';
import 'package:rinkconnect/core/core_widgets/rc_stat_progress.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';
import 'package:rinkconnect/models/hours_balance.dart';

/// A family's volunteer hours position.
///
/// The headline figure is **approved** hours — confirmed by the coordinator.
/// It is deliberately not "pledged": a family that claimed twenty hours of
/// slots and worked none owes exactly as much as one that claimed nothing
/// (ADR 0005). Hours in flight appear in the caption, never in the number.
class HoursCard extends StatelessWidget {
  final HoursBalance balance;
  final double feeRatePerHour;

  /// Pending hours are shown as a follow-up row with a "log hours" prompt.
  final VoidCallback? onLogHours;

  const HoursCard({
    super.key,
    required this.balance,
    required this.feeRatePerHour,
    this.onLogHours,
  });

  @override
  Widget build(BuildContext context) {
    final fee = balance.feeAt(feeRatePerHour);

    return RCCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const RCSectionTitle('Your volunteer hours'),
          RCStatProgress(
            value: _fmt(balance.approved),
            valueSuffix: 'of ${_fmt(balance.owed)} hours approved',
            progress: balance.progress,
            progressColor: balance.complete
                ? RinkconnectColors.success
                : RinkconnectColors.edgeBlue,
            caption: _caption(fee),
          ),
          if (balance.pending > 0 || !balance.complete)
            Padding(
              padding: const EdgeInsets.only(top: 16),
              child: RCListRow(
                padding: const EdgeInsets.only(top: 15),
                showTopDivider: true,
                leading: RCIconChip(
                  icon: balance.pending > 0
                      ? Icons.hourglass_bottom
                      : Icons.volunteer_activism,
                  background: RinkconnectColors.warningBg,
                  iconColor: RinkconnectColors.gold700,
                  size: 38,
                  iconSize: 19,
                  shape: RCIconChipShape.circle,
                ),
                title: Text(
                  balance.pending > 0
                      ? '${_fmt(balance.pending)} hours not yet approved'
                      : '${_fmt(balance.remaining)} hours still to go',
                  style: const TextStyle(
                    fontSize: 14.5,
                    fontWeight: FontWeight.w700,
                    color: RinkconnectColors.eveningRink,
                  ),
                ),
                subtitle: Text(
                  balance.pending > 0
                      ? "Doesn't count until the coordinator confirms it"
                      : 'Claim a slot at an upcoming event',
                  style: const TextStyle(
                    fontSize: 13,
                    color: RinkconnectColors.evening400,
                  ),
                ),
                trailing: onLogHours == null
                    ? null
                    : RCButton(
                        label: 'Find a slot',
                        onPressed: onLogHours,
                        variant: RCButtonVariant.secondary,
                        size: RCButtonSize.sm,
                      ),
              ),
            ),
        ],
      ),
    );
  }

  String _caption(double fee) {
    if (balance.complete) return 'Season complete — nothing owed.';
    return '${_fmt(balance.remaining)} hours left · '
        '\$${fee.toStringAsFixed(0)} if the season ended today';
  }

  static String _fmt(double v) =>
      v == v.roundToDouble() ? v.toInt().toString() : v.toString();
}

/// The coordinator's club-wide view of the same data.
class ClubHoursCard extends StatelessWidget {
  final double approved;
  final double owed;
  final int familyCount;
  final int awaitingReview;
  final VoidCallback? onReview;

  const ClubHoursCard({
    super.key,
    required this.approved,
    required this.owed,
    required this.familyCount,
    required this.awaitingReview,
    this.onReview,
  });

  @override
  Widget build(BuildContext context) {
    return RCCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const RCSectionTitle('Season volunteer hours'),
          RCStatProgress(
            value: HoursCard._fmt(approved),
            valueSuffix: 'of ${HoursCard._fmt(owed)} hours approved',
            progress: owed <= 0 ? 0 : (approved / owed).clamp(0.0, 1.0),
            caption: '$familyCount families registered this season',
          ),
          Padding(
            padding: const EdgeInsets.only(top: 16),
            child: RCListRow(
              padding: const EdgeInsets.only(top: 15),
              showTopDivider: true,
              leading: const RCIconChip(
                icon: Icons.access_time,
                background: RinkconnectColors.warningBg,
                iconColor: RinkconnectColors.gold700,
                size: 38,
                iconSize: 19,
                shape: RCIconChipShape.circle,
              ),
              title: Text(
                awaitingReview == 0
                    ? 'Nothing awaiting your review'
                    : '$awaitingReview ${awaitingReview == 1 ? 'submission' : 'submissions'} awaiting your review',
                style: const TextStyle(
                  fontSize: 14.5,
                  fontWeight: FontWeight.w700,
                  color: RinkconnectColors.eveningRink,
                ),
              ),
              subtitle: Text(
                awaitingReview == 0
                    ? 'Hours appear here once volunteers log them'
                    : "Hours don't count until you approve them",
                style: const TextStyle(
                  fontSize: 13,
                  color: RinkconnectColors.evening400,
                ),
              ),
              trailing: awaitingReview == 0
                  ? null
                  : RCButton(
                      label: 'Review',
                      onPressed: onReview,
                      variant: RCButtonVariant.secondary,
                      size: RCButtonSize.sm,
                    ),
            ),
          ),
        ],
      ),
    );
  }
}
