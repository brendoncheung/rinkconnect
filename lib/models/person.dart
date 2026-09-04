/// Someone in a household — a parent or a skater.
///
/// Logins attach to a person; obligations do not. A person works slots, and
/// their approved hours credit their family's season membership.
class Person {
  final String id;
  final String familyId;
  final String name;

  /// Whether this person may work a slot and have it count.
  ///
  /// Eligibility is a property of the **person** (a skater below the club's
  /// age threshold cannot earn hours); the obligation is a property of the
  /// **season membership**. See ADR 0002.
  final bool eligible;

  /// Skaters are shown differently from the adults on a membership.
  final bool isSkater;

  const Person({
    required this.id,
    required this.familyId,
    required this.name,
    this.eligible = true,
    this.isSkater = false,
  });

  String get firstName => name.split(' ').first;
}
