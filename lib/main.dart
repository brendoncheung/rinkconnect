import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';
import 'package:rinkconnect/routes/rinkconnect_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized;

  await Supabase.initialize(
    url: "https://jktsqarbttfzlilbhiam.supabase.co",
    publishableKey: "sb_publishable_p3fFZLtEEWMlcIlkJ0YOzQ_FgBfei5_",
  );

  runApp(const ProviderScope(child: RinkConnect()));
}

class RinkConnect extends StatelessWidget {
  const RinkConnect({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      theme: RinkconnectTheme.theme,
      routerConfig: router,
    );
  }
}
