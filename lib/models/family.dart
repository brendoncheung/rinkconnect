/// A household's ongoing relationship with the club.
///
/// Created once and persists across seasons. Holds **nothing** that resets
/// annually — hours owed, dues status and the hours ledger all live on
/// [SeasonMembership] instead (ADR 0008). A family that stops renewing simply
/// has no season membership for the current season; it is never deleted.
class Family {
  final String id;
  final String name;

  const Family({required this.id, required this.name});

  /// "Cheung" from "The Cheung Family" — used in dense list rows.
  String get shortName => name.replaceAll(RegExp(r'^The |\s+Family$'), '');
}
