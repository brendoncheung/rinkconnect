/// One shift on an event: a role, a time range, and what it's worth.
///
/// Volunteer need is expressed as **fixed slots** rather than an open hours
/// total (ADR 0005). The coordinator's real problem is *coverage* — a named
/// person on the check-in desk at 9am — not an hours tally. Ten parents each
/// pledging one hour satisfies a total while leaving the door unstaffed.
///
/// [hours] is what the slot is worth. It is the default credited on approval,
/// not a hard cap: the coordinator can approve fewer hours for someone who
/// left early.
class VolunteerSlot {
  final String id;
  final String label;
  final String timeRange;
  final double hours;

  const VolunteerSlot({
    required this.id,
    required this.label,
    required this.timeRange,
    required this.hours,
  });

  /// `2` rather than `2.0`, `1.5` kept as-is.
  String get hoursLabel => hours == hours.roundToDouble()
      ? hours.toInt().toString()
      : hours.toString();
}
