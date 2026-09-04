import 'package:rinkconnect/models/event.dart';
import 'package:rinkconnect/models/family.dart';
import 'package:rinkconnect/models/person.dart';
import 'package:rinkconnect/models/season_membership.dart';
import 'package:rinkconnect/models/signup.dart';

class ClubData {

  final String clubName;
  final String season;

  final List<Family> families;
  final List<Person> people;
  final List<SeasonMembership> memeberships;
  final List<Event> events;
  final List<Signup> signups;

  final double feeRatePerHours;

  ClubData({required this.clubName, required this.season, required this.families, required this.people, required this.memeberships, required this.events, required this.signups, required this.feeRatePerHours});
}