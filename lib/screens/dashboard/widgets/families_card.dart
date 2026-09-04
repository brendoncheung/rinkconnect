import 'package:flutter/material.dart';
import 'package:rinkconnect/core/core_widgets/rc_avatar.dart';
import 'package:rinkconnect/core/core_widgets/rc_badge.dart';
import 'package:rinkconnect/core/core_widgets/rc_card.dart';
import 'package:rinkconnect/core/core_widgets/rc_list_row.dart';
import 'package:rinkconnect/core/core_widgets/rc_section_title.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';
import 'package:rinkconnect/models/family.dart';
import 'package:rinkconnect/models/hours_balance.dart';

/// Who still owes hours — the coordinator's core report.
///
/// One row per registered family, worst first. The figure shown is what the
/// family would be billed if the season closed today; RinkConnect computes it
/// and hands it to the treasurer, and never collects it (ADR 0006).
class FamiliesCard extends StatelessWidget {
  final List<({Family family, HoursBalance balance})> rows;
  final double feeRatePerHour;

  const FamiliesCard({
    super.key,
    required this.rows,
    required this.feeRatePerHour,
  });

  @override
  Widget build(BuildContext context) {
    final outstanding = rows.where((r) => !r.balance.complete).length;

    return RCCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const RCSectionTitle('Who still owes hours'),
          for (var i = 0; i < rows.length; i++)
            _FamilyRow(
              family: rows[i].family,
              balance: rows[i].balance,
              feeRatePerHour: feeRatePerHour,
              showTopDivider: i > 0,
            ),
          const SizedBox(height: 12),
          Text(
            outstanding == 0
                ? 'Every family has completed their hours.'
                : '$outstanding of ${rows.length} families still have hours outstanding.',
            style: const TextStyle(
              fontSize: 12.5,
              color: RinkconnectColors.evening400,
              height: 1.5,
            ),
          ),
        ],
      ),
    );
  }
}

class _FamilyRow extends StatelessWidget {
  final Family family;
  final HoursBalance balance;
  final double feeRatePerHour;
  final bool showTopDivider;

  const _FamilyRow({
    required this.family,
    required this.balance,
    required this.feeRatePerHour,
    required this.showTopDivider,
  });

  @override
  Widget build(BuildContext context) {
    final fee = balance.feeAt(feeRatePerHour);

    return RCListRow(
      showTopDivider: showTopDivider,
      leading: RCAvatar(name: family.shortName, size: 32),
      title: Text(
        family.name,
        style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14.5),
      ),
      subtitle: Text(
        '${_fmt(balance.approved)} of ${_fmt(balance.owed)} hours approved'
        '${balance.pending > 0 ? ' · ${_fmt(balance.pending)} pending' : ''}',
        style: const TextStyle(
          fontSize: 12.5,
          color: RinkconnectColors.evening400,
        ),
      ),
      trailing: balance.complete
          ? const RCBadge(label: 'Complete', tone: RCBadgeTone.success, dot: true)
          : RCBadge(
              label: '\$${fee.toStringAsFixed(0)}',
              tone: fee > 0 ? RCBadgeTone.danger : RCBadgeTone.neutral,
            ),
    );
  }

  static String _fmt(double v) =>
      v == v.roundToDouble() ? v.toInt().toString() : v.toString();
}
