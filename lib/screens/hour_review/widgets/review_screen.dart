import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:rinkconnect/core/core_widgets/rc_button.dart';
import 'package:rinkconnect/core/core_widgets/rc_card.dart';
import 'package:rinkconnect/core/core_widgets/rc_icon_chip.dart';
import 'package:rinkconnect/core/core_widgets/rc_list_row.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';
import 'package:rinkconnect/data/service/state/club_store.dart';

/// The coordinator's approval queue.
///
/// Nothing becomes credit without passing through here. Approval is what
/// moves a family's balance — hours are a mandatory obligation carrying a
/// fee, so they cannot be self-certified (ADR 0003).
class ReviewScreen extends ConsumerWidget {
  const ReviewScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final club = ref.watch(clubStoreProvider);
    final store = ref.read(clubStoreProvider.notifier);
    final queue = ref.watch(awaitingReviewProvider);

    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(36, 30, 36, 40),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 820),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Review hours',
                style: Theme.of(context).textTheme.displaySmall?.copyWith(
                  color: RinkconnectColors.eveningRink,
                  fontSize: 26,
                ),
              ),
              const SizedBox(height: 4),
              const Text(
                "Hours don't count toward a family's total until you approve "
                'them.',
                style: TextStyle(
                  fontSize: 14,
                  color: RinkconnectColors.evening400,
                ),
              ),
              const SizedBox(height: 22),
              if (queue.isEmpty)
                RCCard(
                  child: Row(
                    children: [
                      const RCIconChip(
                        icon: Icons.check_circle_outline,
                        background: RinkconnectColors.successBg,
                        iconColor: RinkconnectColors.success,
                        size: 44,
                      ),
                      const SizedBox(width: 14),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text(
                              'Nothing waiting',
                              style: TextStyle(
                                fontSize: 15.5,
                                fontWeight: FontWeight.w700,
                                color: RinkconnectColors.eveningRink,
                              ),
                            ),
                            const SizedBox(height: 2),
                            Text(
                              'Submitted hours land here as volunteers log '
                              'them. ${club.signups.length} signups this season.',
                              style: const TextStyle(
                                fontSize: 13.5,
                                color: RinkconnectColors.evening400,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              for (var i = 0; i < queue.length; i++)
                Padding(
                  padding: const EdgeInsets.only(bottom: 14),
                  child: RCCard(
                    child: Builder(
                      builder: (context) {
                        final signup = queue[i];
                        final person = club.personById(signup.personId);
                        final family = club.familyById(person.familyId);
                        final slot = club.slotById(signup.slotId);
                        final event = club.eventById(signup.eventId);
                        final hours = slot?.hours ?? 0;
                        final balance = club.balanceFor(family.id);

                        return RCListRow(
                          leading: const RCIconChip(
                            icon: Icons.hourglass_bottom,
                            background: RinkconnectColors.warningBg,
                            iconColor: RinkconnectColors.gold700,
                            size: 44,
                          ),
                          title: Text(
                            '${person.name} · ${slot?.label ?? 'Slot'}',
                            style: const TextStyle(
                              fontSize: 15,
                              fontWeight: FontWeight.w700,
                              color: RinkconnectColors.eveningRink,
                            ),
                          ),
                          subtitle: Text(
                            '${event?.name ?? ''} · ${slot?.hoursLabel ?? '0'} hr\n'
                            '${family.name} — ${_fmt(balance.approved)} of '
                            '${_fmt(balance.owed)} hours approved so far',
                            style: const TextStyle(
                              fontSize: 13,
                              color: RinkconnectColors.evening400,
                              height: 1.5,
                            ),
                          ),
                          trailing: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              RCButton(
                                label: 'Adjust',
                                onPressed: () => _adjust(
                                  context: context,
                                  store: store,
                                  signupId: signup.id,
                                  defaultHours: hours,
                                ),
                                variant: RCButtonVariant.ghost,
                                size: RCButtonSize.sm,
                              ),
                              const SizedBox(width: 6),
                              RCButton(
                                label: 'Approve ${_fmt(hours)}h',
                                onPressed: () {
                                  store.approveSignup(signup.id);
                                  ScaffoldMessenger.of(context).showSnackBar(
                                    SnackBar(
                                      content: Text(
                                        '${_fmt(hours)} hours credited to '
                                        '${family.name}.',
                                      ),
                                    ),
                                  );
                                },
                                size: RCButtonSize.sm,
                              ),
                            ],
                          ),
                        );
                      },
                    ),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }

  /// Approve a different number than the slot was worth — someone who left a
  /// two-hour shift early still worked.
  Future<void> _adjust({
    required BuildContext context,
    required ClubStore store,
    required String signupId,
    required double defaultHours,
  }) async {
    final controller = TextEditingController(text: _fmt(defaultHours));
    final result = await showDialog<double>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Approve how many hours?'),
        content: TextField(
          controller: controller,
          autofocus: true,
          keyboardType: TextInputType.number,
          decoration: const InputDecoration(labelText: 'Hours'),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(
              context,
              double.tryParse(controller.text.trim()),
            ),
            child: const Text('Approve'),
          ),
        ],
      ),
    );
    controller.dispose();
    if (result != null) store.approveSignup(signupId, hours: result);
  }

  static String _fmt(double v) =>
      v == v.roundToDouble() ? v.toInt().toString() : v.toString();
}
