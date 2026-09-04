import 'package:flutter/material.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

/// Tinted promotional panel — heading, body copy, a full-width action slot and
/// an optional caption underneath. Mirrors the invite/upsell panels in
/// ui_kits/website.
class RCPromoPanel extends StatelessWidget {
  final String title;
  final String body;
  final Widget action;
  final String? caption;
  final Color background;

  const RCPromoPanel({
    super.key,
    required this.title,
    required this.body,
    required this.action,
    this.caption,
    this.background = RinkconnectColors.iceBlue,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(24, 22, 24, 22),
      decoration: BoxDecoration(
        color: background,
        borderRadius: BorderRadius.circular(RinkconnectRadii.lg),
        boxShadow: [
          BoxShadow(
            color: RinkconnectColors.eveningRink.withValues(alpha: 0.07),
            blurRadius: 8,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  color: RinkconnectColors.freshIce,
                  fontWeight: FontWeight.w700,
                ),
          ),
          const SizedBox(height: 8),
          Text(
            body,
            style: const TextStyle(
              fontSize: 14,
              height: 1.55,
              color: RinkconnectColors.freshIce,
            ),
          ),
          const SizedBox(height: 16),
          SizedBox(width: double.infinity, child: action),
          if (caption != null) ...[
            const SizedBox(height: 12),
            Text(
              caption!,
              style: TextStyle(
                fontSize: 12.5,
                height: 1.5,
                color: RinkconnectColors.freshIce.withValues(alpha: 0.7),
              ),
            ),
          ],
        ],
      ),
    );
  }
}
