import 'package:flutter/material.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

/// Circular translucent icon button — the floating back/close control used over
/// tinted hero areas in ui_kits/app.
class RCRoundIconButton extends StatelessWidget {
  final IconData icon;
  final VoidCallback onPressed;
  final Color background;
  final Color iconColor;
  final double size;

  const RCRoundIconButton({
    super.key,
    required this.icon,
    required this.onPressed,
    this.background = const Color(0xE6FFFFFF),
    this.iconColor = RinkconnectColors.eveningRink,
    this.size = 20,
  });

  @override
  Widget build(BuildContext context) {
    return Material(
      color: background,
      shape: const CircleBorder(),
      child: InkWell(
        customBorder: const CircleBorder(),
        onTap: onPressed,
        child: Padding(
          padding: const EdgeInsets.all(8),
          child: Icon(icon, size: size, color: iconColor),
        ),
      ),
    );
  }
}
