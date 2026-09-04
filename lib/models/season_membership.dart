/// A family's registration for one season.
///
/// Everything that resets annually lives here (ADR 0008). The board counts
/// these — "102 members last season, 77 registered for 2026-2027".
class SeasonMembership {
  final String id;
  final String familyId;

  /// e.g. `2026-2027`.
  final String season;

  /// How many volunteer hours this family owes for the season.
  ///
  /// **Set by the coordinator, not derived from anything** (ADR 0002). It
  /// lives here rather than as a club-wide constant so she can vary it per
  /// family — a mid-season joiner owes less, a hardship waiver is zero — with
  /// no schema change.
  final double hoursOwed;

  /// Maintained by hand. RinkConnect never processes payment (ADR 0007).
  ///
  /// Independent of the hours obligation: the obligation starts at
  /// registration, not at payment, so an unpaid family still owes hours.
  final bool duesPaid;

  const SeasonMembership({
    required this.id,
    required this.familyId,
    required this.season,
    required this.hoursOwed,
    this.duesPaid = true,
  });

  SeasonMembership copyWith({double? hoursOwed, bool? duesPaid}) {
    return SeasonMembership(
      id: id,
      familyId: familyId,
      season: season,
      hoursOwed: hoursOwed ?? this.hoursOwed,
      duesPaid: duesPaid ?? this.duesPaid,
    );
  }
}
