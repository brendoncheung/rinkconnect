// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

class Club {
  final String id;
  
  final String clubName;
  final String clubAddress;
  final DateTime createdAt;

  Club({
    required this.id,
    required this.clubName,
    required this.clubAddress,
    required this.createdAt,
  });

  Club copyWith({
    String? id,
    String? clubName,
    String? clubAddress,
    DateTime? createdAt,
  }) {
    return Club(
      id: id ?? this.id,
      clubName: clubName ?? this.clubName,
      clubAddress: clubAddress ?? this.clubAddress,
      createdAt: createdAt ?? this.createdAt,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'clubName': clubName,
      'clubAddress': clubAddress,
      'createdAt': createdAt.millisecondsSinceEpoch,
    };
  }

  factory Club.fromMap(Map<String, dynamic> map) {
    return Club(
      id: map['id'] as String,
      clubName: map['clubName'] as String,
      clubAddress: map['clubAddress'] as String,
      createdAt: DateTime.fromMillisecondsSinceEpoch(map['createdAt'] as int),
    );
  }

  String toJson() => json.encode(toMap());

  factory Club.fromJson(String source) => Club.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'Club(id: $id, clubName: $clubName, clubAddress: $clubAddress, createdAt: $createdAt)';
  }

  @override
  bool operator ==(covariant Club other) {
    if (identical(this, other)) return true;
  
    return 
      other.id == id &&
      other.clubName == clubName &&
      other.clubAddress == clubAddress &&
      other.createdAt == createdAt;
  }

  @override
  int get hashCode {
    return id.hashCode ^
      clubName.hashCode ^
      clubAddress.hashCode ^
      createdAt.hashCode;
  }
 }
