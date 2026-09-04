// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

class Coordinator {
  final String id;
  final String clubId;
  
  final String firstName;
  final String lastName;
  final String createdAt;
  final String email;
  
  Coordinator({
    required this.id,
    required this.clubId,
    required this.firstName,
    required this.lastName,
    required this.createdAt,
    required this.email,
  });

  Coordinator copyWith({
    String? id,
    String? clubId,
    String? firstName,
    String? lastName,
    String? createdAt,
    String? email,
  }) {
    return Coordinator(
      id: id ?? this.id,
      clubId: clubId ?? this.clubId,
      firstName: firstName ?? this.firstName,
      lastName: lastName ?? this.lastName,
      createdAt: createdAt ?? this.createdAt,
      email: email ?? this.email,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'clubId': clubId,
      'firstName': firstName,
      'lastName': lastName,
      'createdAt': createdAt,
      'email': email,
    };
  }

  factory Coordinator.fromMap(Map<String, dynamic> map) {
    return Coordinator(
      id: map['id'] as String,
      clubId: map['clubId'] as String,
      firstName: map['firstName'] as String,
      lastName: map['lastName'] as String,
      createdAt: map['createdAt'] as String,
      email: map['email'] as String,
    );
  }

  String toJson() => json.encode(toMap());

  factory Coordinator.fromJson(String source) => Coordinator.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'Coordinator(id: $id, clubId: $clubId, firstName: $firstName, lastName: $lastName, createdAt: $createdAt, email: $email)';
  }

  @override
  bool operator ==(covariant Coordinator other) {
    if (identical(this, other)) return true;
  
    return 
      other.id == id &&
      other.clubId == clubId &&
      other.firstName == firstName &&
      other.lastName == lastName &&
      other.createdAt == createdAt &&
      other.email == email;
  }

  @override
  int get hashCode {
    return id.hashCode ^
      clubId.hashCode ^
      firstName.hashCode ^
      lastName.hashCode ^
      createdAt.hashCode ^
      email.hashCode;
  }
}
