import 'package:go_router/go_router.dart';
import 'package:rinkconnect/screens/events/create_events/widgets/create_event_screen.dart';
import 'package:rinkconnect/screens/dashboard/widgets/dashboard_screen.dart';
import 'package:rinkconnect/screens/dashboard/widgets/dashboard_shell.dart';
import 'package:rinkconnect/screens/events/details_events/widgets/event_details_screen.dart';
import 'package:rinkconnect/screens/events/show_events/widgets/events_list_screen.dart';
import 'package:rinkconnect/screens/login/widget/login_screen.dart';
import 'package:rinkconnect/screens/hour_review/widgets/review_screen.dart';

/// Which nav pill is highlighted for a given path.
String _activeFor(String path) {
  if (path.startsWith('/dashboard/review')) return 'Review';
  if (path.startsWith('/dashboard/events')) return 'Events';
  return 'Home';
}

final router = GoRouter(
  routes: [
    GoRoute(path: '/', builder: (context, state) => const LoginScreen()),
    ShellRoute(
      builder: (context, state, child) =>
          DashboardShell(active: _activeFor(state.uri.path), child: child),
      routes: [
        GoRoute(
          path: '/dashboard',
          builder: (context, state) => const DashboardScreen(),
        ),
        GoRoute(
          path: '/dashboard/events',
          builder: (context, state) => const EventsListScreen(),
        ),
        GoRoute(
          path: '/dashboard/events/new',
          builder: (context, state) => const CreateEventScreen(),
        ),
        // Events are looked up by id from the store rather than passed as
        // `extra`, so a browser reload doesn't lose the event.
        GoRoute(
          path: '/dashboard/events/:id',
          builder: (context, state) =>
              EventScreen(eventId: state.pathParameters['id']!),
        ),
        GoRoute(
          path: '/dashboard/review',
          builder: (context, state) => const ReviewScreen(),
        ),
      ],
    ),
  ],
);
