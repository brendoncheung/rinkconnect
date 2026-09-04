import 'package:flutter/material.dart';

/// Single-line text input. Styling comes from the theme's
/// `inputDecorationTheme`, so this stays a thin wrapper.
///
/// [obscureText] defaults to false — it was previously hardcoded on, which
/// limited this to password fields.
class RCTextfield extends StatelessWidget {
  final TextEditingController controller;
  final String hintText;
  final String? labelText;
  final Icon? icon;
  final bool obscureText;
  final TextInputType? keyboardType;
  final int maxLines;
  final ValueChanged<String>? onChanged;

  const RCTextfield({
    super.key,
    required this.controller,
    required this.hintText,
    this.labelText,
    this.icon,
    this.obscureText = false,
    this.keyboardType,
    this.maxLines = 1,
    this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      obscureText: obscureText,
      keyboardType: keyboardType,
      maxLines: obscureText ? 1 : maxLines,
      onChanged: onChanged,
      decoration: InputDecoration(
        hintText: hintText,
        labelText: labelText,
        prefixIcon: icon,
      ),
    );
  }
}
