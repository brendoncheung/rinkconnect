import 'package:flutter/material.dart';
import 'package:rinkconnect/core/core_widgets/rc_round_icon_button.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

/// Tinted hero banner with a floating back control and a bottom-anchored title
/// — mirrors ui_kits/app/EventScreen.jsx's header block.
class RCHeroHeader extends StatelessWidget {
  final Color tint;
  final String title;
  final Widget? badge;
  final VoidCallback onBack;
  final double height;

  const RCHeroHeader({
    super.key,
    required this.tint,
    required this.title,
    required this.onBack,
    this.badge,
    this.height = 200,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: height,
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      color: tint,
      child: Stack(
        children: [
          Positioned(
            top: 0,
            left: 0,
            child: RCRoundIconButton(icon: Icons.arrow_back, onPressed: onBack),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                if (badge != null) ...[badge!, const SizedBox(height: 8)],
                Text(
                  title,
                  style: Theme.of(context).textTheme.displaySmall?.copyWith(
                        color: RinkconnectColors.freshIce,
                        fontSize: 26,
                      ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
