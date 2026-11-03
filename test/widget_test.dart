import 'package:flutter_test/flutter_test.dart';
import 'package:dart_nexus_lab/src/features/home/presentation/screens/home_screen.dart';
import 'package:dart_nexus_lab/src/core/theme/nexus_theme.dart';
import 'package:flutter/material.dart';

void main() {
  testWidgets('Dart Nexus Lab Workstation home screen renders successfully', (WidgetTester tester) async {
    await tester.pumpWidget(
      MaterialApp(
        theme: NexusTheme.darkTheme,
        home: const HomeScreen(),
      ),
    );

    expect(find.text('Δ DART NEXUS '), findsOneWidget);
    expect(find.text('0.0000% ERR'), findsOneWidget);
    expect(find.text('TIER-1 FLAGSHIPS'), findsOneWidget);
  });
}
