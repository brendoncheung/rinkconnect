
abstract class DataSource {
  Future<List<T>> getList<T> (String path, T Function(Map<String, dynamic>) fromMap);
  Future<T> getOne<T> (String path, T Function(Map<String, dynamic>) fromMap);
  Future<T> post<T> (String path, T Function(Map<String, dynamic>) fromMap);
}