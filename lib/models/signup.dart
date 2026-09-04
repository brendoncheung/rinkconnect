import 'package:rinkconnect/models/signup_state.dart';

/// One person claiming one volunteer slot.
///
/// A signup is made *by a person* but credits *their family's* season
/// membership — the person works, the membership owes (ADR 0002).
class Signup {
  final String id;
  final String slotId;
  final String eventId;
  final String personId;
  final SignupState state;

  /// Hours actually credited, once approved.
  ///
  /// Defaults to the slot's value, but the coordinator can approve a different
  /// number — someone who leaves a two-hour shift early still worked. Null
  /// until approval.
  final double? approvedHours;

  const Signup({
    required this.id,
    required this.slotId,
    required this.eventId,
    required this.personId,
    this.state = SignupState.pledged,
    this.approvedHours,
  });

  Signup copyWith({SignupState? state, double? approvedHours}) {
    return Signup(
      id: id,
      slotId: slotId,
      eventId: eventId,
      personId: personId,
      state: state ?? this.state,
      approvedHours: approvedHours ?? this.approvedHours,
    );
  }
}
