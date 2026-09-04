/// A family's hours position for one season — the number the whole app exists
/// to produce.
///
/// Computed from a season membership's [owed] figure and that family's
/// signups. Only approved signups contribute to [approved]; pledged and
/// submitted hours are surfaced separately as [pending] so a volunteer can see
/// work in flight without it counting as credit (ADR 0005).
class HoursBalance {
  /// Set by the coordinator on the season membership.
  final double owed;

  /// Confirmed by the coordinator. The only figure that discharges the
  /// obligation or reduces the fee.
  final double approved;

  /// Claimed or submitted but not yet confirmed. Shown, never counted.
  final double pending;

  const HoursBalance({
    required this.owed,
    required this.approved,
    required this.pending,
  });

  static const zero = HoursBalance(owed: 0, approved: 0, pending: 0);

  double get remaining => (owed - approved).clamp(0, double.infinity);

  double get progress => owed <= 0 ? 1 : (approved / owed).clamp(0.0, 1.0);

  bool get complete => approved >= owed;

  /// What this family would be billed if the season closed today.
  ///
  /// FWISC charges per unworked hour. Computed here and handed to the
  /// treasurer — RinkConnect never collects it (ADR 0006).
  double feeAt(double ratePerHour) => remaining * ratePerHour;
}
