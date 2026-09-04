import 'package:flutter/material.dart';
import 'package:rinkconnect/core/core_widgets/rc_icon_chip.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

/// Bordered inline notice — icon chip, heading + body copy, optional trailing
/// action. Mirrors components/feedback's banner treatment.
class RCNoticeBanner extends StatelessWidget {
  final IconData icon;
  final String title;
  final String body;
  final Widget? action;
  final Color background;
  final Color borderColor;
  final Color iconBackground;
  final Color iconColor;

  const RCNoticeBanner({
    super.key,
    required this.icon,
    required this.title,
    required this.body,
    this.action,
    this.background = RinkconnectColors.warningBg,
    this.borderColor = RinkconnectColors.gold600,
    this.iconBackground = const Color(0x40D18F2B),
    this.iconColor = RinkconnectColors.gold700,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
      decoration: BoxDecoration(
        color: background,
        border: Border.all(color: borderColor),
        borderRadius: BorderRadius.circular(RinkconnectRadii.lg),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          RCIconChip(
            icon: icon,
            background: iconBackground,
            iconColor: iconColor,
            size: 42,
            iconSize: 22,
            shape: RCIconChipShape.circle,
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                        color: RinkconnectColors.eveningRink,
                        fontWeight: FontWeight.w700,
                        fontSize: 15.5,
                      ),
                ),
                const SizedBox(height: 3),
                Text(
                  body,
                  style: const TextStyle(
                    fontSize: 14,
                    height: 1.5,
                    color: RinkconnectColors.evening800,
                  ),
                ),
              ],
            ),
          ),
          if (action != null) ...[const SizedBox(width: 16), action!],
        ],
      ),
    );
  }
}
