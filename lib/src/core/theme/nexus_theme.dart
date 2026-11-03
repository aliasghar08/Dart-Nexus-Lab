import 'package:flutter/material.dart';
import 'nexus_colors.dart';

class NexusTheme {
  NexusTheme._();

  static ThemeData get darkTheme {
    return ThemeData(
      brightness: Brightness.dark,
      scaffoldBackgroundColor: NexusColors.voidBg,
      primaryColor: NexusColors.primaryCyan,
      colorScheme: const ColorScheme.dark(
        primary: NexusColors.primaryCyan,
        secondary: NexusColors.transitEmerald,
        surface: NexusColors.glassSurface,
      ),
      fontFamily: 'monospace',
    );
  }
}
