// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

class Event {
  final String id;
  final String clubId;
  
  final String name;
  final String body;
  final String eventLocation;

  final DateTime eventStartDate;
  final DateTime eventStartTime;
  final DateTime eventEndTime;

  Event({
    required this.id,
    required this.name,
    required this.body,
    required this.clubId,
    required this.eventLocation,
    required this.eventStartDate,
    required this.eventStartTime,
    required this.eventEndTime,
  });


  Event copyWith({
    String? id,
    String? name,
    String? body,
    String? clubId,
    String? eventLocation,
    DateTime? eventStartDate,
    DateTime? eventStartTime,
    DateTime? eventEndTime,
  }) {
    return Event(
      id: id ?? this.id,
      name: name ?? this.name,
      body: body ?? this.body,
      clubId: clubId ?? this.clubId,
      eventLocation: eventLocation ?? this.eventLocation,
      eventStartDate: eventStartDate ?? this.eventStartDate,
      eventStartTime: eventStartTime ?? this.eventStartTime,
      eventEndTime: eventEndTime ?? this.eventEndTime,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'name': name,
      'body': body,
      'clubId': clubId,
      'eventLocation': eventLocation,
      'eventStartDate': eventStartDate.millisecondsSinceEpoch,
      'eventStartTime': eventStartTime.millisecondsSinceEpoch,
      'eventEndTime': eventEndTime.millisecondsSinceEpoch,
    };
  }

  factory Event.fromMap(Map<String, dynamic> map) {
    return Event(
      id: map['id'] as String,
      name: map['name'] as String,
      body: map['body'] as String,
      clubId: map['clubId'] as String,
      eventLocation: map['eventLocation'] as String,
      eventStartDate: DateTime.fromMillisecondsSinceEpoch(map['eventStartDate'] as int),
      eventStartTime: DateTime.fromMillisecondsSinceEpoch(map['eventStartTime'] as int),
      eventEndTime: DateTime.fromMillisecondsSinceEpoch(map['eventEndTime'] as int),
    );
  }

  String toJson() => json.encode(toMap());

  factory Event.fromJson(String source) => Event.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'Event(id: $id, name: $name, body: $body, clubId: $clubId, eventLocation: $eventLocation, eventStartDate: $eventStartDate, eventStartTime: $eventStartTime, eventEndTime: $eventEndTime)';
  }

  @override
  bool operator ==(covariant Event other) {
    if (identical(this, other)) return true;
  
    return 
      other.id == id &&
      other.name == name &&
      other.body == body &&
      other.clubId == clubId &&
      other.eventLocation == eventLocation &&
      other.eventStartDate == eventStartDate &&
      other.eventStartTime == eventStartTime &&
      other.eventEndTime == eventEndTime;
  }

  @override
  int get hashCode {
    return id.hashCode ^
      name.hashCode ^
      body.hashCode ^
      clubId.hashCode ^
      eventLocation.hashCode ^
      eventStartDate.hashCode ^
      eventStartTime.hashCode ^
      eventEndTime.hashCode;
  }
}
