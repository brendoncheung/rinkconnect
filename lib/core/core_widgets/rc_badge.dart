import 'package:flutter/material.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

enum RCBadgeTone { neutral, brand, warm, success, danger }

/// Mirrors components/display/Badge.jsx — tone pill with optional status dot.
class RCBadge extends StatelessWidget {
  final String label;
  final RCBadgeTone tone;
  final bool dot;

  const RCBadge({
    super.key,
    required this.label,
    this.tone = RCBadgeTone.neutral,
    this.dot = false,
  });

  @override
  Widget build(BuildContext context) {
    final (background, foreground) = switch (tone) {
      RCBadgeTone.neutral => (RinkconnectColors.glacier200, RinkconnectColors.evening600),
      RCBadgeTone.brand => (RinkconnectColors.infoBg, RinkconnectColors.edgeBlue700),
      RCBadgeTone.warm => (RinkconnectColors.gold100, RinkconnectColors.gold700),
      RCBadgeTone.success => (RinkconnectColors.successBg, RinkconnectColors.success),
      RCBadgeTone.danger => (RinkconnectColors.dangerBg, RinkconnectColors.danger),
    };
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 4),
      decoration: BoxDecoration(
        color: background,
        borderRadius: BorderRadius.circular(RinkconnectRadii.pill),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (dot) ...[
            Container(
              width: 7,
              height: 7,
              decoration: BoxDecoration(color: foreground, shape: BoxShape.circle),
            ),
            const SizedBox(width: 6),
          ],
          Text(
            label,
            style: TextStyle(
              color: foreground,
              fontSize: 12,
              fontWeight: FontWeight.w700,
              letterSpacing: tone == RCBadgeTone.warm ? 0.24 : null,
            ),
          ),
        ],
      ),
    );
  }
}
