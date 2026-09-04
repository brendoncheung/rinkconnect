// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

class Membership {

  final String id;
  final String clubId;
  final String familyId;
  final String volunteeringRecordId;

  final DateTime startDate;
  final DateTime endDate;

  final double feePerHour;
  final double hoursOwed;

  final bool isPaid;
  
  Membership({
    required this.id,
    required this.clubId,
    required this.familyId,
    required this.volunteeringRecordId,
    required this.startDate,
    required this.endDate,
    required this.feePerHour,
    required this.hoursOwed,
    required this.isPaid,
  });

  Membership copyWith({
    String? id,
    String? clubId,
    String? familyId,
    String? volunteeringRecordId,
    DateTime? startDate,
    DateTime? endDate,
    double? feePerHour,
    double? hoursOwed,
    bool? isPaid,
  }) {
    return Membership(
      id: id ?? this.id,
      clubId: clubId ?? this.clubId,
      familyId: familyId ?? this.familyId,
      volunteeringRecordId: volunteeringRecordId ?? this.volunteeringRecordId,
      startDate: startDate ?? this.startDate,
      endDate: endDate ?? this.endDate,
      feePerHour: feePerHour ?? this.feePerHour,
      hoursOwed: hoursOwed ?? this.hoursOwed,
      isPaid: isPaid ?? this.isPaid,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'clubId': clubId,
      'familyId': familyId,
      'volunteeringRecordId': volunteeringRecordId,
      'startDate': startDate.millisecondsSinceEpoch,
      'endDate': endDate.millisecondsSinceEpoch,
      'feePerHour': feePerHour,
      'hoursOwed': hoursOwed,
      'isPaid': isPaid,
    };
  }

  factory Membership.fromMap(Map<String, dynamic> map) {
    return Membership(
      id: map['id'] as String,
      clubId: map['clubId'] as String,
      familyId: map['familyId'] as String,
      volunteeringRecordId: map['volunteeringRecordId'] as String,
      startDate: DateTime.fromMillisecondsSinceEpoch(map['startDate'] as int),
      endDate: DateTime.fromMillisecondsSinceEpoch(map['endDate'] as int),
      feePerHour: map['feePerHour'] as double,
      hoursOwed: map['hoursOwed'] as double,
      isPaid: map['isPaid'] as bool,
    );
  }

  String toJson() => json.encode(toMap());

  factory Membership.fromJson(String source) => Membership.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'Membership(id: $id, clubId: $clubId, familyId: $familyId, volunteeringRecordId: $volunteeringRecordId, startDate: $startDate, endDate: $endDate, feePerHour: $feePerHour, hoursOwed: $hoursOwed, isPaid: $isPaid)';
  }

  @override
  bool operator ==(covariant Membership other) {
    if (identical(this, other)) return true;
  
    return 
      other.id == id &&
      other.clubId == clubId &&
      other.familyId == familyId &&
      other.volunteeringRecordId == volunteeringRecordId &&
      other.startDate == startDate &&
      other.endDate == endDate &&
      other.feePerHour == feePerHour &&
      other.hoursOwed == hoursOwed &&
      other.isPaid == isPaid;
  }

  @override
  int get hashCode {
    return id.hashCode ^
      clubId.hashCode ^
      familyId.hashCode ^
      volunteeringRecordId.hashCode ^
      startDate.hashCode ^
      endDate.hashCode ^
      feePerHour.hashCode ^
      hoursOwed.hashCode ^
      isPaid.hashCode;
  }
}
