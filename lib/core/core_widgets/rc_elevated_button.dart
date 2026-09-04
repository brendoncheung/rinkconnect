import 'package:flutter/material.dart';

/// Elevated-surface button body shared by [RCButton]'s `primary`, `warm` and
/// `onBrand` variants. Handles the icon / no-icon split and folds the size
/// constraint into the supplied [style]; a null [style] leaves the themed
/// `elevatedButtonTheme` untouched.
class RCElevatedButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final IconData? icon;
  final double iconSize;
  final ButtonStyle? style;
  final Size? minimumSize;

  const RCElevatedButton({
    super.key,
    required this.label,
    required this.onPressed,
    this.icon,
    this.iconSize = 17,
    this.style,
    this.minimumSize,
  });

  @override
  Widget build(BuildContext context) {
    final resolved = (style ?? const ButtonStyle())
        .copyWith(minimumSize: WidgetStatePropertyAll(minimumSize));

    if (icon == null) {
      return ElevatedButton(
        onPressed: onPressed,
        style: resolved,
        child: Text(label),
      );
    }
    return ElevatedButton.icon(
      onPressed: onPressed,
      icon: Icon(icon, size: iconSize),
      label: Text(label),
      style: resolved,
    );
  }
}
