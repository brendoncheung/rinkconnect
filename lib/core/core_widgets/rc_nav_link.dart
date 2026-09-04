import 'package:flutter/material.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

/// Selectable pill-shaped nav tab — mirrors WebShell.jsx's AppHeader nav links.
class RCNavLink extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const RCNavLink({
    super.key,
    required this.label,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Material(
      color: selected ? RinkconnectColors.glacier200 : Colors.transparent,
      borderRadius: BorderRadius.circular(RinkconnectRadii.pill),
      child: InkWell(
        borderRadius: BorderRadius.circular(RinkconnectRadii.pill),
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 7),
          child: Text(
            label,
            style: Theme.of(context).textTheme.labelLarge?.copyWith(
                  color: selected
                      ? RinkconnectColors.edgeBlue
                      : RinkconnectColors.evening400,
                ),
          ),
        ),
      ),
    );
  }
}
