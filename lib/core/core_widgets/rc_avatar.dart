import 'package:flutter/material.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';

/// Mirrors components/display/Avatar.jsx — initials circle, optional focus ring.
class RCAvatar extends StatelessWidget {
  final String name;
  final double size;
  final bool ring;

  const RCAvatar({super.key, required this.name, this.size = 44, this.ring = false});

  String get _initials {
    final parts = name.trim().split(RegExp(r'\s+')).where((p) => p.isNotEmpty).take(2);
    return parts.map((p) => p[0].toUpperCase()).join();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: RinkconnectColors.glacier400,
        boxShadow: ring
            ? [
                BoxShadow(color: RinkconnectColors.freshIce, spreadRadius: 2),
                BoxShadow(color: RinkconnectColors.edgeBlue, spreadRadius: 1),
              ]
            : null,
      ),
      child: Text(
        _initials,
        style: Theme.of(context).textTheme.labelLarge?.copyWith(
              fontSize: size * 0.4,
              color: RinkconnectColors.evening600,
            ),
      ),
    );
  }
}
