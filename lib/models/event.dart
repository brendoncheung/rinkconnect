/// Something the club runs that needs volunteers.
///
/// Volunteer need is expressed as VolunteerSlots, which reference the event by
/// `eventId` rather than sitting inside it. The old `numOfVolunteers` field is
/// gone — it was a second representation of the same fact and could disagree
/// with the slots themselves (ADR 0005).
class Event {
  final String id;
  final String name;
  final String body;
  final DateTime startDate;
  final DateTime startTime;
  final DateTime endTime;
  final String location;
  final String who; // e.g. 'open to all members'
  final String? badge;

  const Event({
    required this.id,
    required this.name,
    required this.body,
    required this.startDate,
    required this.startTime,
    required this.endTime,
    required this.location,
    this.who = 'Open to all members',
    this.badge,
  });

  static const _weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  static const _months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  String get whenLong {
    final weekday = _weekdays[startDate.weekday - 1];
    final month = _months[startDate.month - 1];
    return '$weekday, $month ${startDate.day} · ${_formatTime(startTime)} – ${_formatTime(endTime)}';
  }

  /// Compact form for list rows — "Sat Aug 8 · 8:00 AM".
  String get whenShort {
    final weekday = _weekdays[startDate.weekday - 1];
    final month = _months[startDate.month - 1];
    return '$weekday $month ${startDate.day} · ${_formatTime(startTime)}';
  }

  static String _formatTime(DateTime t) {
    final hour12 = t.hour % 12 == 0 ? 12 : t.hour % 12;
    final minute = t.minute.toString().padLeft(2, '0');
    final period = t.hour < 12 ? 'AM' : 'PM';
    return '$hour12:$minute $period';
  }
}
