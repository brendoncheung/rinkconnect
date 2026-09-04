import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

/// Color tokens — mirrors tokens/colors.css in the RinkConnect Design System.
class RinkconnectColors {
  RinkconnectColors._();

  // Brand base palette
  static const iceBlue = Color(0xFF4E9BCB);
  static const eveningRink = Color(0xFF16324F);
  static const glacier = Color(0xFFEDF5F9);
  static const edgeBlue = Color(0xFF3E7CB1);
  static const rinkLight = Color(0xFFE8A13D);
  static const freshIce = Color(0xFFFFFFFF);

  // Tint & shade ramp
  static const edgeBlue600 = Color(0xFF35699A);
  static const edgeBlue700 = Color(0xFF2B5580);
  static const gold600 = Color(0xFFD18F2B);
  static const gold700 = Color(0xFFB5771C);
  static const gold100 = Color(0xFFFAEDD6);
  static const gold900 = Color(0xFF5A3D10); // ink on rinkLight surfaces

  static const evening800 = Color(0xFF22405E);
  static const evening600 = Color(0xFF3C5A77);
  static const evening400 = Color(0xFF6D859E);
  static const evening300 = Color(0xFF97AABD);

  // Cool neutrals
  static const glacier100 = Color(0xFFF6FAFC);
  static const glacier200 = Color(0xFFE3EEF5);
  static const glacier300 = Color(0xFFD3E3EE);
  static const glacier400 = Color(0xFFBCD3E2);

  // Semantic status
  static const success = Color(0xFF4C9A7A);
  static const successBg = Color(0xFFE4F2EC);
  static const warning = Color(0xFFE8A13D);
  static const warningBg = Color(0xFFFAEDD6);
  static const danger = Color(0xFFC46A5F);
  static const dangerBg = Color(0xFFF6E6E3);
  static const info = Color(0xFF4E9BCB);
  static const infoBg = Color(0xFFE2EEF6);
}

/// Corner radii — mirrors tokens/radii.css. No sharp corners anywhere.
class RinkconnectRadii {
  RinkconnectRadii._();
  static const xs = 6.0;
  static const sm = 10.0;
  static const md = 14.0; // inputs, buttons
  static const lg = 20.0; // cards
  static const xl = 28.0; // hero panels, modals
  static const pill = 999.0; // badges, tags, chips
}

class RinkconnectTheme {
  static final _base = GoogleFonts.nunitoSansTextTheme();

  static TextStyle _display(TextStyle? s) =>
      GoogleFonts.quicksand(textStyle: s);

  // Type scale — mirrors tokens/typography.css (16px base).
  static final _textTheme = _base.copyWith(
    displayLarge: _display(_base.displayLarge?.copyWith(
        fontSize: 56, height: 1.1, fontWeight: FontWeight.w700)),
    displayMedium: _display(_base.displayMedium?.copyWith(
        fontSize: 40, height: 1.2, fontWeight: FontWeight.w700)),
    displaySmall: _display(_base.displaySmall?.copyWith(
        fontSize: 30, height: 1.2, fontWeight: FontWeight.w600)),
    headlineLarge: _display(_base.headlineLarge?.copyWith(
        fontSize: 22, height: 1.2, fontWeight: FontWeight.w600)),
    headlineMedium: _display(_base.headlineMedium?.copyWith(
        fontSize: 18, height: 1.4, fontWeight: FontWeight.w600)),
    headlineSmall: _display(_base.headlineSmall?.copyWith(
        fontSize: 17, height: 1.4, fontWeight: FontWeight.w500)),
    // Display-font label slot — nav pills, club name, avatar initials.
    labelLarge: _display(_base.labelLarge?.copyWith(
        fontSize: 14,
        height: 1.4,
        fontWeight: FontWeight.w600,
        letterSpacing: 0)),
    bodyLarge: _base.bodyLarge?.copyWith(
        fontSize: 16, height: 1.6, color: RinkconnectColors.evening800),
    bodyMedium: _base.bodyMedium?.copyWith(
        fontSize: 14, height: 1.6, color: RinkconnectColors.evening800),
    bodySmall: _base.bodySmall?.copyWith(
        fontSize: 12,
        height: 1.6,
        color: RinkconnectColors.evening400,
        letterSpacing: 0.24),
  );

  static final theme = ThemeData(
    useMaterial3: true,
    scaffoldBackgroundColor: RinkconnectColors.glacier,
    textTheme: _textTheme,
    appBarTheme: AppBarTheme(
      backgroundColor: RinkconnectColors.freshIce,
      foregroundColor: RinkconnectColors.eveningRink,
      surfaceTintColor: Colors.transparent,
      elevation: 0,
      scrolledUnderElevation: 1,
      shadowColor: RinkconnectColors.eveningRink.withValues(alpha: 0.09),
      centerTitle: false,
      toolbarHeight: 64,
      titleTextStyle: GoogleFonts.quicksand(
        fontSize: 17,
        fontWeight: FontWeight.w700,
        color: RinkconnectColors.eveningRink,
      ),
      iconTheme: const IconThemeData(color: RinkconnectColors.edgeBlue),
      actionsIconTheme: const IconThemeData(color: RinkconnectColors.edgeBlue),
    ),
    colorScheme: const ColorScheme.light(
      primary: RinkconnectColors.edgeBlue,
      onPrimary: RinkconnectColors.freshIce,
      secondary: RinkconnectColors.rinkLight,
      onSecondary: RinkconnectColors.eveningRink,
      surface: RinkconnectColors.freshIce,
      onSurface: RinkconnectColors.eveningRink,
      error: RinkconnectColors.danger,
      onError: RinkconnectColors.freshIce,
      outline: RinkconnectColors.glacier300,
    ),
    cardTheme: CardThemeData(
      color: RinkconnectColors.freshIce,
      elevation: 2,
      shadowColor: RinkconnectColors.eveningRink.withValues(alpha: 0.09),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(RinkconnectRadii.lg),
      ),
    ),
    inputDecorationTheme: InputDecorationThemeData(
      filled: true,
      fillColor: RinkconnectColors.glacier100,
      hintStyle: const TextStyle(color: RinkconnectColors.evening300),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(RinkconnectRadii.md),
        borderSide: const BorderSide(color: RinkconnectColors.glacier300),
      ),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(RinkconnectRadii.md),
        borderSide: const BorderSide(color: RinkconnectColors.glacier300),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(RinkconnectRadii.md),
        borderSide: const BorderSide(color: RinkconnectColors.edgeBlue, width: 2),
      ),
      errorBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(RinkconnectRadii.md),
        borderSide: const BorderSide(color: RinkconnectColors.danger),
      ),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: RinkconnectColors.edgeBlue,
        foregroundColor: RinkconnectColors.freshIce,
        disabledBackgroundColor: RinkconnectColors.glacier300,
        textStyle: GoogleFonts.quicksand(fontWeight: FontWeight.w600),
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(RinkconnectRadii.md),
        ),
      ).copyWith(
        overlayColor: WidgetStateProperty.resolveWith((states) =>
            states.contains(WidgetState.pressed)
                ? RinkconnectColors.edgeBlue700
                : states.contains(WidgetState.hovered)
                    ? RinkconnectColors.edgeBlue600
                    : null),
      ),
    ),
    outlinedButtonTheme: OutlinedButtonThemeData(
      style: OutlinedButton.styleFrom(
        foregroundColor: RinkconnectColors.edgeBlue,
        side: const BorderSide(color: RinkconnectColors.glacier400),
        textStyle: GoogleFonts.quicksand(fontWeight: FontWeight.w600),
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(RinkconnectRadii.md),
        ),
      ),
    ),
    textButtonTheme: TextButtonThemeData(
      style: TextButton.styleFrom(
        foregroundColor: RinkconnectColors.edgeBlue,
        textStyle: GoogleFonts.quicksand(fontWeight: FontWeight.w600),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(RinkconnectRadii.md),
        ),
      ),
    ),
    chipTheme: ChipThemeData(
      backgroundColor: RinkconnectColors.gold100,
      labelStyle: const TextStyle(color: RinkconnectColors.eveningRink),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(RinkconnectRadii.pill),
      ),
    ),
    switchTheme: SwitchThemeData(
      thumbColor: WidgetStateProperty.resolveWith((states) =>
          states.contains(WidgetState.selected)
              ? RinkconnectColors.edgeBlue
              : RinkconnectColors.freshIce),
      trackColor: WidgetStateProperty.resolveWith((states) =>
          states.contains(WidgetState.selected)
              ? RinkconnectColors.edgeBlue.withValues(alpha: 0.5)
              : RinkconnectColors.glacier300),
    ),
    checkboxTheme: CheckboxThemeData(
      fillColor: WidgetStateProperty.resolveWith((states) =>
          states.contains(WidgetState.selected)
              ? RinkconnectColors.edgeBlue
              : Colors.transparent),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(RinkconnectRadii.xs),
      ),
    ),
    tabBarTheme: const TabBarThemeData(
      labelColor: RinkconnectColors.edgeBlue,
      unselectedLabelColor: RinkconnectColors.evening400,
      indicatorColor: RinkconnectColors.edgeBlue,
    ),
    dialogTheme: DialogThemeData(
      backgroundColor: RinkconnectColors.freshIce,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(RinkconnectRadii.xl),
      ),
    ),
    snackBarTheme: SnackBarThemeData(
      backgroundColor: RinkconnectColors.eveningRink,
      contentTextStyle: const TextStyle(color: RinkconnectColors.freshIce),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(RinkconnectRadii.md),
      ),
      behavior: SnackBarBehavior.floating,
    ),
    tooltipTheme: TooltipThemeData(
      decoration: BoxDecoration(
        color: RinkconnectColors.evening800,
        borderRadius: BorderRadius.circular(RinkconnectRadii.sm),
      ),
      textStyle: const TextStyle(color: RinkconnectColors.freshIce),
    ),
  );
}
