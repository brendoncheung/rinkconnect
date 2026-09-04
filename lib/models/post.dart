import 'package:rinkconnect/models/profile.dart';

class News {
  final String id;
  final String authorId;
  final String title;
  final String body;
  final DateTime? publishedAt; // null = still a draft
  final DateTime createdAt;

  final Profile? author;
  final int commentCount;

  bool get isPublished => publishedAt != null;

  News({required this.id, required this.authorId, required this.title, required this.body, required this.publishedAt, required this.createdAt, required this.author, required this.commentCount});
}
