// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

class EventSlot {

  final String id;
  final String familyId;
  final String eventId;
  
  final String jobDescription;
  final String hoursRequired;

  final DateTime startTime;
  final DateTime endTime;
  
  EventSlot({
    required this.id,
    required this.familyId,
    required this.eventId,
    required this.jobDescription,
    required this.hoursRequired,
    required this.startTime,
    required this.endTime,
  });


  EventSlot copyWith({
    String? id,
    String? familyId,
    String? eventId,
    String? jobDescription,
    String? hoursRequired,
    DateTime? startTime,
    DateTime? endTime,
  }) {
    return EventSlot(
      id: id ?? this.id,
      familyId: familyId ?? this.familyId,
      eventId: eventId ?? this.eventId,
      jobDescription: jobDescription ?? this.jobDescription,
      hoursRequired: hoursRequired ?? this.hoursRequired,
      startTime: startTime ?? this.startTime,
      endTime: endTime ?? this.endTime,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'familyId': familyId,
      'eventId': eventId,
      'jobDescription': jobDescription,
      'hoursRequired': hoursRequired,
      'startTime': startTime.millisecondsSinceEpoch,
      'endTime': endTime.millisecondsSinceEpoch,
    };
  }

  factory EventSlot.fromMap(Map<String, dynamic> map) {
    return EventSlot(
      id: map['id'] as String,
      familyId: map['familyId'] as String,
      eventId: map['eventId'] as String,
      jobDescription: map['jobDescription'] as String,
      hoursRequired: map['hoursRequired'] as String,
      startTime: DateTime.fromMillisecondsSinceEpoch(map['startTime'] as int),
      endTime: DateTime.fromMillisecondsSinceEpoch(map['endTime'] as int),
    );
  }

  String toJson() => json.encode(toMap());

  factory EventSlot.fromJson(String source) => EventSlot.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'EventSlot(id: $id, familyId: $familyId, eventId: $eventId, jobDescription: $jobDescription, hoursRequired: $hoursRequired, startTime: $startTime, endTime: $endTime)';
  }

  @override
  bool operator ==(covariant EventSlot other) {
    if (identical(this, other)) return true;
  
    return 
      other.id == id &&
      other.familyId == familyId &&
      other.eventId == eventId &&
      other.jobDescription == jobDescription &&
      other.hoursRequired == hoursRequired &&
      other.startTime == startTime &&
      other.endTime == endTime;
  }

  @override
  int get hashCode {
    return id.hashCode ^
      familyId.hashCode ^
      eventId.hashCode ^
      jobDescription.hashCode ^
      hoursRequired.hashCode ^
      startTime.hashCode ^
      endTime.hashCode;
  }
  }
