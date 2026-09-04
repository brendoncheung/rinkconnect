import 'package:flutter/material.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

enum RCIconChipShape { circle, rounded }

/// Icon-in-colored-container chip — mirrors the icon chips used across
/// components/display and ui_kits/website (event/hours/detail rows, banners).
class RCIconChip extends StatelessWidget {
  final IconData icon;
  final Color background;
  final Color iconColor;
  final double size;
  final double iconSize;
  final RCIconChipShape shape;
  final double? borderRadius;

  const RCIconChip({
    super.key,
    required this.icon,
    required this.background,
    required this.iconColor,
    this.size = 40,
    this.iconSize = 20,
    this.shape = RCIconChipShape.rounded,
    this.borderRadius,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        color: background,
        shape: shape == RCIconChipShape.circle ? BoxShape.circle : BoxShape.rectangle,
        borderRadius: shape == RCIconChipShape.rounded
            ? BorderRadius.circular(borderRadius ?? RinkconnectRadii.md)
            : null,
      ),
      child: Icon(icon, size: iconSize, color: iconColor),
    );
  }
}
