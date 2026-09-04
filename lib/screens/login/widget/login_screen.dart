import 'package:flutter/material.dart';
import 'package:rinkconnect/screens/login/widget/login_card_widget.dart';

/// The unauthenticated entry point at `/`.
///
/// Scrolls rather than overflowing — the card is taller than a short browser
/// window or a phone in landscape.
class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Rinkconnect')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 16),
        child: const Center(child: SizedBox(width: 400, child: LoginCard())),
      ),
    );
  }
}
