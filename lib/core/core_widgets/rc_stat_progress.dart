import 'package:flutter/material.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

/// Headline figure with a trailing qualifier, a progress track and a caption —
/// the volunteer-hours stat block from ui_kits/website/Web04_Dashboard.jsx.
class RCStatProgress extends StatelessWidget {
  final String value;
  final String valueSuffix;
  final double progress;
  final String caption;
  final Color progressColor;

  const RCStatProgress({
    super.key,
    required this.value,
    required this.valueSuffix,
    required this.progress,
    required this.caption,
    this.progressColor = RinkconnectColors.edgeBlue,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          crossAxisAlignment: CrossAxisAlignment.baseline,
          textBaseline: TextBaseline.alphabetic,
          children: [
            Text(
              value,
              style: Theme.of(context).textTheme.displaySmall?.copyWith(
                    color: RinkconnectColors.eveningRink,
                    fontSize: 34,
                  ),
            ),
            const SizedBox(width: 8),
            Text(
              valueSuffix,
              style: const TextStyle(
                fontSize: 14.5,
                color: RinkconnectColors.evening400,
              ),
            ),
          ],
        ),
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 12),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(4),
            child: LinearProgressIndicator(
              value: progress,
              minHeight: 8,
              backgroundColor: RinkconnectColors.glacier200,
              valueColor: AlwaysStoppedAnimation(progressColor),
            ),
          ),
        ),
        Text(
          caption,
          style: const TextStyle(
            fontSize: 13.5,
            color: RinkconnectColors.evening400,
          ),
        ),
      ],
    );
  }
}
