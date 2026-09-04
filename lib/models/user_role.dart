/// Which view of the club the signed-in person sees.
///
/// Replaces the old `DashboardVariant.board` — every family owes volunteer
/// hours, not only the board, so the parent view is the default one.
enum UserRole {
  /// Runs events, reviews submitted hours, sees who still owes.
  coordinator,

  /// Sees their own family's balance and claims slots.
  parent,
}

extension UserRoleLabel on UserRole {
  String get label => switch (this) {
    UserRole.coordinator => 'Coordinator',
    UserRole.parent => 'Parent',
  };
}
