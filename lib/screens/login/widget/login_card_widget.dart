import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:rinkconnect/core/core_widgets/rc_textfield.dart';

class LoginCard extends StatefulWidget {
  const LoginCard({super.key});

  @override
  State<LoginCard> createState() => _LoginCardState();
}

class _LoginCardState extends State<LoginCard> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  bool _isLogin = true;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(32),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              _isLogin ? 'Welcome back' : 'Create your account',
              style: const TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            Text(
              _isLogin
                  ? "Log in to pick up right where your club left off."
                  : "Set up an account to see your club's events and hours.",
            ),
            const SizedBox(height: 24),

            // Log in / Sign up toggle
            Row(
              children: [
                Expanded(
                  child: TextButton(
                    onPressed: () => setState(() => _isLogin = true),
                    child: const Text('Log in'),
                  ),
                ),
                Expanded(
                  child: TextButton(
                    onPressed: () => setState(() => _isLogin = false),
                    child: const Text('Sign up'),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),

            const Text('Email'),
            const SizedBox(height: 8),
            RCTextfield(
              controller: _emailController,
              hintText: 'Enter your email',
              icon: const Icon(Icons.mail_outline),
              keyboardType: TextInputType.emailAddress,
            ),

            const SizedBox(height: 16),

            const Text('Password'),
            const SizedBox(height: 8),
            RCTextfield(
              controller: _passwordController,
              hintText: 'Enter your password',
              icon: const Icon(Icons.lock_outline),
              obscureText: true,
            ),
            Align(
              alignment: Alignment.centerRight,
              child: TextButton(
                onPressed: () {},
                child: const Text('Forgot password?'),
              ),
            ),
            const SizedBox(height: 8),

            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: () => context.go('/dashboard'),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(_isLogin ? 'Log in' : 'Create account'),
                    const SizedBox(width: 8),
                    const Icon(Icons.arrow_forward),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),

            Wrap(
              alignment: WrapAlignment.center,
              crossAxisAlignment: WrapCrossAlignment.center,
              children: [
                const Text('New to RinkConnect? '),
                GestureDetector(
                  onTap: () => setState(() => _isLogin = false),
                  child: const Text('Create an account'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
