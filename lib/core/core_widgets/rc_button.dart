import 'package:flutter/material.dart';
import 'package:rinkconnect/core/core_widgets/rc_elevated_button.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

/// Visual weight of an [RCButton].
///
/// [primary], [secondary] and [ghost] delegate to the themed
/// `ElevatedButton`/`OutlinedButton`/`TextButton` so they stay in step with
/// `rinkconnect_theme.dart`. [warm] and [onBrand] need explicit styles because
/// the global theme has no equivalent: [warm] is the amber call-to-action used
/// on volunteer slots, [onBrand] is the inverted button used on tinted panels.
enum RCButtonVariant { primary, secondary, ghost, warm, onBrand }

enum RCButtonSize { sm, md, lg }

/// Mirrors components/forms/Button.jsx — the single button entry point.
class RCButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final RCButtonVariant variant;
  final RCButtonSize size;
  final IconData? icon;

  const RCButton({
    super.key,
    required this.label,
    required this.onPressed,
    this.variant = RCButtonVariant.primary,
    this.size = RCButtonSize.md,
    this.icon,
  });

  static final _warmStyle = ElevatedButton.styleFrom(
    backgroundColor: RinkconnectColors.rinkLight,
    foregroundColor: RinkconnectColors.gold900,
    elevation: 0,
    padding: const EdgeInsets.symmetric(horizontal: 16),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(RinkconnectRadii.pill),
    ),
    textStyle: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600),
  );

  static final _onBrandStyle = ElevatedButton.styleFrom(
    backgroundColor: RinkconnectColors.freshIce,
    foregroundColor: RinkconnectColors.edgeBlue,
    disabledBackgroundColor: RinkconnectColors.freshIce.withValues(alpha: 0.6),
    disabledForegroundColor: RinkconnectColors.edgeBlue.withValues(alpha: 0.6),
  );

  /// `null` leaves the themed default in place.
  Size? get _minimumSize => switch (size) {
        RCButtonSize.sm => const Size(0, 36),
        RCButtonSize.md => null,
        RCButtonSize.lg => const Size(0, 52),
      };

  double get _iconSize => size == RCButtonSize.sm ? 15 : 17;

  @override
  Widget build(BuildContext context) {
    return switch (variant) {
      RCButtonVariant.primary => RCElevatedButton(
          label: label,
          onPressed: onPressed,
          icon: icon,
          iconSize: _iconSize,
          minimumSize: _minimumSize,
        ),
      RCButtonVariant.warm => RCElevatedButton(
          label: label,
          onPressed: onPressed,
          icon: icon,
          iconSize: _iconSize,
          style: _warmStyle,
          minimumSize: _minimumSize,
        ),
      RCButtonVariant.onBrand => RCElevatedButton(
          label: label,
          onPressed: onPressed,
          icon: icon,
          iconSize: _iconSize,
          style: _onBrandStyle,
          minimumSize: _minimumSize,
        ),
      RCButtonVariant.secondary => icon == null
          ? OutlinedButton(
              onPressed: onPressed,
              style: OutlinedButton.styleFrom(minimumSize: _minimumSize),
              child: Text(label),
            )
          : OutlinedButton.icon(
              onPressed: onPressed,
              icon: Icon(icon, size: _iconSize),
              label: Text(label),
              style: OutlinedButton.styleFrom(minimumSize: _minimumSize),
            ),
      RCButtonVariant.ghost => icon == null
          ? TextButton(
              onPressed: onPressed,
              style: TextButton.styleFrom(minimumSize: _minimumSize),
              child: Text(label),
            )
          : TextButton.icon(
              onPressed: onPressed,
              icon: Icon(icon, size: _iconSize),
              label: Text(label),
              style: TextButton.styleFrom(minimumSize: _minimumSize),
            ),
    };
  }
}
