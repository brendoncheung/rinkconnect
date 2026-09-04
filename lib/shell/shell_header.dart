import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:rinkconnect/core/core_widgets/rc_avatar.dart';
import 'package:rinkconnect/core/core_widgets/rc_icon_chip.dart';
import 'package:rinkconnect/core/core_widgets/rc_nav_link.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';
import 'package:rinkconnect/models/user_role.dart';
import 'package:rinkconnect/shell/role_toggle.dart';

/// Persistent app header for logged-in routes — logo, wordmark, club name,
/// nav pills, the demo role toggle, and the signed-in person's avatar.
class ShellHeader extends StatelessWidget {
  final String clubName;
  final String userName;
  final String active;
  final Map<String, String> links;
  final UserRole role;
  final ValueChanged<UserRole> onRoleChanged;

  const ShellHeader({
    super.key,
    required this.clubName,
    required this.userName,
    required this.active,
    required this.links,
    required this.role,
    required this.onRoleChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 64,
      padding: const EdgeInsets.symmetric(horizontal: 36),
      decoration: const BoxDecoration(
        color: RinkconnectColors.freshIce,
        border: Border(bottom: BorderSide(color: RinkconnectColors.glacier300)),
      ),
      child: Row(
        children: [
          const RCIconChip(
            icon: Icons.ac_unit,
            background: RinkconnectColors.iceBlue,
            iconColor: RinkconnectColors.freshIce,
            size: 30,
            iconSize: 18,
            borderRadius: 8,
          ),
          const SizedBox(width: 10),
          Text(
            'RinkConnect',
            style: Theme.of(context).appBarTheme.titleTextStyle,
          ),
          const SizedBox(width: 24),
          Container(width: 1, height: 26, color: RinkconnectColors.glacier300),
          const SizedBox(width: 24),
          Flexible(
            child: Text(
              clubName,
              overflow: TextOverflow.ellipsis,
              style: Theme.of(context).textTheme.labelLarge?.copyWith(
                color: RinkconnectColors.evening400,
              ),
            ),
          ),
          const Spacer(),
          Row(
            children: links.entries
                .map(
                  (e) => Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 3),
                    child: RCNavLink(
                      label: e.key,
                      selected: e.key == active,
                      onTap: () => context.go(e.value),
                    ),
                  ),
                )
                .toList(),
          ),
          const SizedBox(width: 16),
          RoleToggle(role: role, onChanged: onRoleChanged),
          const SizedBox(width: 16),
          RCAvatar(name: userName, size: 32, ring: true),
        ],
      ),
    );
  }
}
