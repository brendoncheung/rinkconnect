import 'package:flutter/material.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';
import 'package:rinkconnect/models/user_role.dart';

/// Demo-only control for flipping between the coordinator's view and a
/// parent's without logging out.
///
/// Not a real feature — a real deployment derives the role from the signed-in
/// person. It exists so the app can be shown end to end in one sitting.
class RoleToggle extends StatelessWidget {
  final UserRole role;
  final ValueChanged<UserRole> onChanged;

  const RoleToggle({super.key, required this.role, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(3),
      decoration: BoxDecoration(
        color: RinkconnectColors.glacier200,
        borderRadius: BorderRadius.circular(RinkconnectRadii.pill),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          for (final option in UserRole.values)
            _Segment(
              label: option.label,
              selected: option == role,
              onTap: () => onChanged(option),
            ),
        ],
      ),
    );
  }
}

class _Segment extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _Segment({
    required this.label,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      selected: selected,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(RinkconnectRadii.pill),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 140),
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
          decoration: BoxDecoration(
            color: selected
                ? RinkconnectColors.freshIce
                : Colors.transparent,
            borderRadius: BorderRadius.circular(RinkconnectRadii.pill),
          ),
          child: Text(
            label,
            style: TextStyle(
              fontSize: 13,
              fontWeight: FontWeight.w600,
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
