// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

class VolunteerRecord {

  final String id;
  final String familyId;        // the family who participated
  final String eventSlotId;     // the event slot participated
  final String coordinatorId;   // the coordinator who approved the hours

  final double hoursWorked;
  final DateTime dateWorked;

  final bool isApproved;

  VolunteerRecord({
    required this.id,
    required this.familyId,
    required this.eventSlotId,
    required this.coordinatorId,
    required this.hoursWorked,
    required this.dateWorked,
    required this.isApproved,
  });

  VolunteerRecord copyWith({
    String? id,
    String? familyId,
    String? eventSlotId,
    String? coordinatorId,
    double? hoursWorked,
    DateTime? dateWorked,
    bool? isApproved,
  }) {
    return VolunteerRecord(
      id: id ?? this.id,
      familyId: familyId ?? this.familyId,
      eventSlotId: eventSlotId ?? this.eventSlotId,
      coordinatorId: coordinatorId ?? this.coordinatorId,
      hoursWorked: hoursWorked ?? this.hoursWorked,
      dateWorked: dateWorked ?? this.dateWorked,
      isApproved: isApproved ?? this.isApproved,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'familyId': familyId,
      'eventSlotId': eventSlotId,
      'coordinatorId': coordinatorId,
      'hoursWorked': hoursWorked,
      'dateWorked': dateWorked.millisecondsSinceEpoch,
      'isApproved': isApproved,
    };
  }

  factory VolunteerRecord.fromMap(Map<String, dynamic> map) {
    return VolunteerRecord(
      id: map['id'] as String,
      familyId: map['familyId'] as String,
      eventSlotId: map['eventSlotId'] as String,
      coordinatorId: map['coordinatorId'] as String,
      hoursWorked: map['hoursWorked'] as double,
      dateWorked: DateTime.fromMillisecondsSinceEpoch(map['dateWorked'] as int),
      isApproved: map['isApproved'] as bool,
    );
  }

  String toJson() => json.encode(toMap());

  factory VolunteerRecord.fromJson(String source) => VolunteerRecord.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'VolunteerRecord(id: $id, familyId: $familyId, eventSlotId: $eventSlotId, coordinatorId: $coordinatorId, hoursWorked: $hoursWorked, dateWorked: $dateWorked, isApproved: $isApproved)';
  }

  @override
  bool operator ==(covariant VolunteerRecord other) {
    if (identical(this, other)) return true;
  
    return 
      other.id == id &&
      other.familyId == familyId &&
      other.eventSlotId == eventSlotId &&
      other.coordinatorId == coordinatorId &&
      other.hoursWorked == hoursWorked &&
      other.dateWorked == dateWorked &&
      other.isApproved == isApproved;
  }

  @override
  int get hashCode {
    return id.hashCode ^
      familyId.hashCode ^
      eventSlotId.hashCode ^
      coordinatorId.hashCode ^
      hoursWorked.hashCode ^
      dateWorked.hashCode ^
      isApproved.hashCode;
  }
}
