import 'package:flutter/material.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

/// Structural list-row primitive — leading widget + two-line text column +
/// trailing widget, with an optional top divider. Mirrors the repeated row
/// shape across ui_kits/website's event/member/hours/detail rows. Callers
/// supply pre-styled title/subtitle widgets so this stays a layout-only
/// primitive rather than baking in any particular text style.
class RCListRow extends StatelessWidget {
  final Widget? leading;
  final Widget title;
  final Widget? subtitle;
  final Widget? trailing;
  final bool showTopDivider;
  final Color dividerColor;
  final EdgeInsetsGeometry padding;

  const RCListRow({
    super.key,
    this.leading,
    required this.title,
    this.subtitle,
    this.trailing,
    this.showTopDivider = false,
    this.dividerColor = RinkconnectColors.glacier200,
    this.padding = const EdgeInsets.symmetric(vertical: 10),
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: padding,
      decoration: showTopDivider
          ? BoxDecoration(border: Border(top: BorderSide(color: dividerColor)))
          : null,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          if (leading != null) ...[leading!, const SizedBox(width: 12)],
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                title,
                if (subtitle != null) ...[const SizedBox(height: 2), subtitle!],
              ],
            ),
          ),
          if (trailing != null) ...[const SizedBox(width: 12), trailing!],
        ],
      ),
    );
  }
}
