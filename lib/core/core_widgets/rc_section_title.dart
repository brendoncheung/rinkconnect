import 'package:flutter/material.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

/// Mirrors the card-heading pattern used throughout components/display —
/// headline row with an optional trailing action slot.
class RCSectionTitle extends StatelessWidget {
  final String text;
  final Widget? trailing;

  const RCSectionTitle(this.text, {super.key, this.trailing});

  @override
  Widget build(BuildContext context) {
    final title = Text(
      text,
      style: Theme.of(context).textTheme.headlineMedium?.copyWith(
            color: RinkconnectColors.eveningRink,
            fontWeight: FontWeight.w700,
          ),
    );
    return Padding(
      padding: const EdgeInsets.only(bottom: 14),
      child: trailing == null
          ? title
          : Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [title, trailing!],
            ),
    );
  }
}
