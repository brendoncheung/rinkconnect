/// Where a signup sits in its lifecycle.
///
/// These are three genuinely different numbers, and conflating them breaks the
/// fee calculation. **Only [approved] counts toward a balance** — a balance
/// computed from pledges would let a family claim twenty hours of slots,
/// attend none, and appear to owe nothing (ADR 0005).
enum SignupState {
  /// The slot is claimed. The event hasn't happened yet.
  pledged,

  /// The volunteer reports having worked it. Awaiting the coordinator.
  submitted,

  /// The coordinator confirmed it. This — and only this — is credit.
  approved,
}

extension SignupStateLabel on SignupState {
  /// Shown on the volunteer's own view of a slot.
  String get label => switch (this) {
    SignupState.pledged => 'Signed up',
    SignupState.submitted => 'Awaiting review',
    SignupState.approved => 'Approved',
  };

  /// True once the coordinator has confirmed — the only state that credits
  /// a family's ledger.
  bool get countsTowardBalance => this == SignupState.approved;
}
