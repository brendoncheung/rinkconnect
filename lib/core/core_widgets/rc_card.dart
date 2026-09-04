import 'package:flutter/material.dart';

/// Mirrors components/display/Card.jsx — zero-margin surface with a default
/// content padding, used as the standard wrapper for dashboard sections.
class RCCard extends StatelessWidget {
  final Widget child;
  final EdgeInsetsGeometry padding;

  const RCCard({
    super.key,
    required this.child,
    this.padding = const EdgeInsets.fromLTRB(24, 22, 24, 22),
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.zero,
      child: Padding(padding: padding, child: child),
    );
  }
}
