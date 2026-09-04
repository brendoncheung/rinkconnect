// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

// family as one unit to the rinkconnect application

class Family {
  final String id;
  final String clubId;

  final String firstName;
  final String lastName;

  Family({
    required this.id,
    required this.clubId,
    required this.firstName,
    required this.lastName,
  });


  Family copyWith({
    String? id,
    String? clubId,
    String? firstName,
    String? lastName,
  }) {
    return Family(
      id: id ?? this.id,
      clubId: clubId ?? this.clubId,
      firstName: firstName ?? this.firstName,
      lastName: lastName ?? this.lastName,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'clubId': clubId,
      'firstName': firstName,
      'lastName': lastName,
    };
  }

  factory Family.fromMap(Map<String, dynamic> map) {
    return Family(
      id: map['id'] as String,
      clubId: map['clubId'] as String,
      firstName: map['firstName'] as String,
      lastName: map['lastName'] as String,
    );
  }

  String toJson() => json.encode(toMap());

  factory Family.fromJson(String source) => Family.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'Family(id: $id, clubId: $clubId, firstName: $firstName, lastName: $lastName)';
  }

  @override
  bool operator ==(covariant Family other) {
    if (identical(this, other)) return true;
  
    return 
      other.id == id &&
      other.clubId == clubId &&
      other.firstName == firstName &&
      other.lastName == lastName;
  }

  @override
  int get hashCode {
    return id.hashCode ^
      clubId.hashCode ^
      firstName.hashCode ^
      lastName.hashCode;
  }
}

  