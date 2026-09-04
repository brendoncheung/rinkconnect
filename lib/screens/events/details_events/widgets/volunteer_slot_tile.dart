import 'package:flutter/material.dart';
import 'package:rinkconnect/core/core_widgets/rc_badge.dart';
import 'package:rinkconnect/core/core_widgets/rc_button.dart';
import 'package:rinkconnect/core/core_widgets/rc_list_row.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';
import 'package:rinkconnect/models/signup.dart';
import 'package:rinkconnect/models/signup_state.dart';
import 'package:rinkconnect/models/volunteer_slot.dart';

/// One volunteer slot on the event screen.
///
/// The trailing action tracks the signup lifecycle: an open slot offers
/// "Take slot"; a slot this family has claimed offers "Log hours"; once
/// submitted it shows as awaiting review; once approved it is credit.
///
/// Claiming a slot deliberately shows **no change to any balance** — nothing
/// counts until the coordinator approves it (ADR 0005).
class VolunteerSlotTile extends StatelessWidget {
  final VolunteerSlot slot;

  /// Who holds this slot, if anyone.
  final Signup? signup;

  /// Display name of the holder — shown when it isn't the current family.
  final String? takenByName;

  /// Whether the holder belongs to the signed-in person's family.
  final bool isMine;

  final bool showTopDivider;

  final VoidCallback? onTake;
  final VoidCallback? onSubmit;
  final VoidCallback? onRelease;

  const VolunteerSlotTile({
    super.key,
    required this.slot,
    this.signup,
    this.takenByName,
    this.isMine = false,
    this.showTopDivider = false,
    this.onTake,
    this.onSubmit,
    this.onRelease,
  });

  @override
  Widget build(BuildContext context) {
    return RCListRow(
      showTopDivider: showTopDivider,
      dividerColor: RinkconnectColors.glacier300,
      title: Text(
        slot.label,
        style: const TextStyle(
          fontSize: 14,
          fontWeight: FontWeight.w600,
          color: RinkconnectColors.eveningRink,
        ),
      ),
      subtitle: Text(
        _subtitle,
        style: const TextStyle(
          fontSize: 12,
          color: RinkconnectColors.evening400,
        ),
      ),
      trailing: _trailing,
    );
  }

  String get _subtitle {
    final base = '${slot.timeRange} · ${slot.hoursLabel} hr';
    if (signup == null) return base;
    if (isMine) return '$base · ${takenByName ?? 'You'}';
    return '$base · ${takenByName ?? 'Taken'}';
  }

  Widget get _trailing {
    final current = signup;

    // Open — anyone can claim it.
    if (current == null) {
      return RCButton(
        label: 'Take slot',
        onPressed: onTake,
        variant: RCButtonVariant.warm,
        size: RCButtonSize.sm,
      );
    }

    // Someone else's.
    if (!isMine) {
      return RCBadge(
        label: current.state == SignupState.approved ? 'Covered' : 'Taken',
        tone: RCBadgeTone.neutral,
        dot: current.state == SignupState.approved,
      );
    }

    // Ours — the action depends on where it is in its lifecycle.
    return switch (current.state) {
      SignupState.pledged => Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (onRelease != null)
            RCButton(
              label: 'Release',
              onPressed: onRelease,
              variant: RCButtonVariant.ghost,
              size: RCButtonSize.sm,
            ),
          const SizedBox(width: 4),
          RCButton(
            label: 'Log hours',
            onPressed: onSubmit,
            size: RCButtonSize.sm,
          ),
        ],
      ),
      SignupState.submitted => const RCBadge(
        label: 'Awaiting review',
        tone: RCBadgeTone.warm,
        dot: true,
      ),
      SignupState.approved => const RCBadge(
        label: 'Approved',
        tone: RCBadgeTone.success,
        dot: true,
      ),
    };
  }
}
