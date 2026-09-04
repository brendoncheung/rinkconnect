import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:rinkconnect/core/core_widgets/rc_button.dart';
import 'package:rinkconnect/core/core_widgets/rc_card.dart';
import 'package:rinkconnect/core/core_widgets/rc_section_title.dart';
import 'package:rinkconnect/core/core_widgets/rc_textfield.dart';
import 'package:rinkconnect/core/rinkconnect_theme.dart';
import 'package:rinkconnect/data/service/state/club_store.dart';

/// Coordinator posts an event and the slots she needs covered.
///
/// Slots are fixed — a role, a time range and an hour value — rather than an
/// open hours total, because the real need is coverage: a named person on the
/// check-in desk at 9am (ADR 0005).
class CreateEventScreen extends ConsumerStatefulWidget {
  const CreateEventScreen({super.key});

  @override
  ConsumerState<CreateEventScreen> createState() => _CreateEventScreenState();
}

class _CreateEventScreenState extends ConsumerState<CreateEventScreen> {
  final _name = TextEditingController();
  final _body = TextEditingController();
  final _location = TextEditingController(text: 'PSM Icehouse');

  DateTime _date = DateTime.now().add(const Duration(days: 14));
  TimeOfDay _start = const TimeOfDay(hour: 16, minute: 0);
  TimeOfDay _end = const TimeOfDay(hour: 20, minute: 0);

  final _slots = <_SlotDraft>[
    _SlotDraft(label: 'Door check-in', timeRange: '3:30 – 5:30', hours: 2),
  ];

  @override
  void dispose() {
    _name.dispose();
    _body.dispose();
    _location.dispose();
    for (final slot in _slots) {
      slot.dispose();
    }
    super.dispose();
  }

  bool get _valid =>
      _name.text.trim().isNotEmpty &&
      _slots.every((s) => s.label.text.trim().isNotEmpty);

  void _save() {
    final store = ref.read(clubStoreProvider.notifier);
    final event = store.createEvent(
      name: _name.text.trim(),
      body: _body.text.trim().isEmpty
          ? 'Volunteers needed — see the slots below.'
          : _body.text.trim(),
      date: _date,
      start: (hour: _start.hour, minute: _start.minute),
      end: (hour: _end.hour, minute: _end.minute),
      location: _location.text.trim(),
      slots: [
        for (final slot in _slots)
          (
            label: slot.label.text.trim(),
            timeRange: slot.timeRange.text.trim(),
            hours: double.tryParse(slot.hours.text.trim()) ?? 1,
          ),
      ],
    );
    if (!mounted) return;
    context.go('/dashboard/events/${event.id}');
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(36, 30, 36, 40),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 760),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'New event',
                style: Theme.of(context).textTheme.displaySmall?.copyWith(
                  color: RinkconnectColors.eveningRink,
                  fontSize: 26,
                ),
              ),
              const SizedBox(height: 4),
              const Text(
                'Post it once here and every family sees the same thing.',
                style: TextStyle(
                  fontSize: 14,
                  color: RinkconnectColors.evening400,
                ),
              ),
              const SizedBox(height: 22),
              RCCard(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const RCSectionTitle('Details'),
                    const SizedBox(height: 8),
                    RCTextfield(
                      controller: _name,
                      hintText: 'e.g. Fall Showcase',
                      labelText: 'Event name',
                      onChanged: (_) => setState(() {}),
                    ),
                    const SizedBox(height: 14),
                    RCTextfield(
                      controller: _body,
                      hintText: 'What is this event, and what do you need?',
                      labelText: 'Description',
                      maxLines: 3,
                    ),
                    const SizedBox(height: 14),
                    RCTextfield(
                      controller: _location,
                      hintText: 'Where is it?',
                      labelText: 'Location',
                    ),
                    const SizedBox(height: 14),
                    Row(
                      children: [
                        Expanded(
                          child: _PickerField(
                            label: 'Date',
                            value:
                                '${_date.day}/${_date.month}/${_date.year}',
                            onTap: _pickDate,
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: _PickerField(
                            label: 'Starts',
                            value: _start.format(context),
                            onTap: () => _pickTime(isStart: true),
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: _PickerField(
                            label: 'Ends',
                            value: _end.format(context),
                            onTap: () => _pickTime(isStart: false),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 18),
              RCCard(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    RCSectionTitle(
                      'Volunteer slots',
                      trailing: RCButton(
                        label: 'Add slot',
                        onPressed: () => setState(
                          () => _slots.add(_SlotDraft(hours: 2)),
                        ),
                        variant: RCButtonVariant.ghost,
                        size: RCButtonSize.sm,
                        icon: Icons.add,
                      ),
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      'One row per shift. Volunteers claim a whole slot, and '
                      'the hours come from the slot.',
                      style: TextStyle(
                        fontSize: 12.5,
                        color: RinkconnectColors.evening400,
                        height: 1.5,
                      ),
                    ),
                    const SizedBox(height: 14),
                    for (var i = 0; i < _slots.length; i++)
                      Padding(
                        padding: const EdgeInsets.only(bottom: 12),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Expanded(
                              flex: 4,
                              child: RCTextfield(
                                controller: _slots[i].label,
                                hintText: 'Role, e.g. Concession stand',
                                onChanged: (_) => setState(() {}),
                              ),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              flex: 3,
                              child: RCTextfield(
                                controller: _slots[i].timeRange,
                                hintText: '4:00 – 6:00',
                              ),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              flex: 2,
                              child: RCTextfield(
                                controller: _slots[i].hours,
                                hintText: 'Hours',
                                keyboardType: TextInputType.number,
                              ),
                            ),
                            IconButton(
                              tooltip: 'Remove slot',
                              onPressed: _slots.length == 1
                                  ? null
                                  : () => setState(() {
                                      _slots.removeAt(i).dispose();
                                    }),
                              icon: const Icon(Icons.close),
                              color: RinkconnectColors.evening400,
                            ),
                          ],
                        ),
                      ),
                  ],
                ),
              ),
              const SizedBox(height: 22),
              Row(
                children: [
                  RCButton(
                    label: 'Post event',
                    onPressed: _valid ? _save : null,
                    size: RCButtonSize.lg,
                  ),
                  const SizedBox(width: 12),
                  RCButton(
                    label: 'Cancel',
                    onPressed: () => context.go('/dashboard/events'),
                    variant: RCButtonVariant.ghost,
                    size: RCButtonSize.lg,
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _pickDate() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: _date,
      firstDate: DateTime(2026),
      lastDate: DateTime(2028),
    );
    if (picked != null) setState(() => _date = picked);
  }

  Future<void> _pickTime({required bool isStart}) async {
    final picked = await showTimePicker(
      context: context,
      initialTime: isStart ? _start : _end,
    );
    if (picked == null) return;
    setState(() {
      if (isStart) {
        _start = picked;
      } else {
        _end = picked;
      }
    });
  }
}

/// Editable draft of a slot before the event is posted.
class _SlotDraft {
  final TextEditingController label;
  final TextEditingController timeRange;
  final TextEditingController hours;

  _SlotDraft({String label = '', String timeRange = '', double hours = 1})
    : label = TextEditingController(text: label),
      timeRange = TextEditingController(text: timeRange),
      hours = TextEditingController(
        text: hours == hours.roundToDouble()
            ? hours.toInt().toString()
            : hours.toString(),
      );

  void dispose() {
    label.dispose();
    timeRange.dispose();
    hours.dispose();
  }
}

/// Read-only field that opens a picker.
class _PickerField extends StatelessWidget {
  final String label;
  final String value;
  final VoidCallback onTap;

  const _PickerField({
    required this.label,
    required this.value,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(RinkconnectRadii.md),
      child: InputDecorator(
        decoration: InputDecoration(labelText: label),
        child: Text(value, style: const TextStyle(fontSize: 15)),
      ),
    );
  }
}
