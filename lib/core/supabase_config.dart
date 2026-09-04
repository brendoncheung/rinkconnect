class SupabaseConfig {
  static const url = String.fromEnvironment(
    'SUPABASE_URL',
    defaultValue: 'http://127.0.0.1:54321',
  );
  static const anonKey = String.fromEnvironment('SUPABASE_ANON_KEY');
}