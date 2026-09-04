import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:rinkconnect/models/user_role.dart';
import 'package:rinkconnect/data/service/state/club_store.dart';
import 'package:rinkconnect/shell/shell_header.dart';

/// Persistent chrome (header + nav) wrapped around every dashboard route.
///
/// Club name, signed-in person and available nav links all come from the
/// store — the coordinator gets a Review tab that parents don't see.
class DashboardShell extends ConsumerWidget {
  final Widget child;
  final String active;

  const DashboardShell({super.key, required this.child, this.active = 'Home'});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final club = ref.watch(clubStoreProvider);
    final role = club.role;

    final links = {
      'Home': '/dashboard',
      'Events': '/dashboard/events',
      if (role == UserRole.coordinator) 'Review': '/dashboard/review',
    };

    return Scaffold(
      body: Column(
        children: [
          ShellHeader(
            clubName: club.clubName,
            userName: club.currentPerson.name,
            active: active,
            links: links,
            role: role,
            onRoleChanged: (next) =>
                ref.read(clubStoreProvider.notifier).setRole(next),
          ),
          Expanded(child: child),
        ],
      ),
    );
  }
}
