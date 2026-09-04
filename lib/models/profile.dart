enum ProfileRole {
  parent, 
  coordinator
}

class Profile {
  final String id;
  final String firstname;
  final String lastname;
  final String email;
  final ProfileRole role;
  final DateTime createAt;

  Profile({required this.id, required this.firstname, required this.lastname, required this.email, required this.role, required this.createAt,});
}