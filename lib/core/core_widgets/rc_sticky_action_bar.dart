import 'package:flutter/material.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

/// Bottom-pinned action bar that fades its background into the page above it,
/// so scrolling content passes under the action rather than butting against a
/// hard edge. Stretches [child] to full width.
class RCStickyActionBar extends StatelessWidget {
  final Widget child;
  final Color backgroundColor;

  const RCStickyActionBar({
    super.key,
    required this.child,
    this.backgroundColor = RinkconnectColors.glacier,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(20, 12, 20, 16),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.bottomCenter,
          end: Alignment.topCenter,
          colors: [backgroundColor, backgroundColor.withValues(alpha: 0)],
          stops: const [0.7, 1.0],
        ),
      ),
      child: SafeArea(
        top: false,
        child: SizedBox(width: double.infinity, child: child),
      ),
    );
  }
}
