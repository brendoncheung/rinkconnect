import 'package:flutter/material.dart';
import 'package:rinkconnect/core/core_widgets/rc_icon_chip.dart';
import 'package:rinkconnect/core/core_widgets/rc_list_row.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

/// Icon + label-above-value row — mirrors the When/Where/Who detail rows in
/// ui_kits/app/EventScreen.jsx. Layout comes from [RCListRow]; this only fixes
/// the icon chip treatment and the label/value type pairing.
class RCDetailRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;

  const RCDetailRow({
    super.key,
    required this.icon,
    required this.label,
    required this.value,
  });

  @override
  Widget build(BuildContext context) {
    return RCListRow(
      leading: RCIconChip(
        icon: icon,
        background: RinkconnectColors.glacier200,
        iconColor: RinkconnectColors.edgeBlue,
        size: 38,
        iconSize: 18,
      ),
      title: Text(
        label,
        style: const TextStyle(
          fontSize: 12,
          color: RinkconnectColors.evening400,
        ),
      ),
      subtitle: Text(
        value,
        style: const TextStyle(
          fontSize: 15,
          fontWeight: FontWeight.w600,
          color: RinkconnectColors.eveningRink,
        ),
      ),
    );
  }
}
