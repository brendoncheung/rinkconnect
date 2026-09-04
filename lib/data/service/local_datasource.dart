import 'package:rinkconnect/data/service/datasource.dart';

class LocalDatasource extends DataSource{
  @override
  Future<List<T>> getList<T>(String path, T Function(Map<String, dynamic>) fromMap) {
    // TODO: implement getList
    throw UnimplementedError();
  }

  @override
  Future<T> getOne<T>(String path, T Function(Map<String, dynamic>) fromMap) {
    // TODO: implement getOne
    throw UnimplementedError();
  }

  @override
  Future<T> post<T>(String path, T Function(Map<String, dynamic>) fromMap) {
    // TODO: implement post
    throw UnimplementedError();
  }

}