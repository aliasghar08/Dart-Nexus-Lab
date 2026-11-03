import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';
import 'src/theme/nexus_theme.dart';
import 'src/screens/home_screen.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  try {
    await Firebase.initializeApp(
      options: DefaultFirebaseOptions.currentPlatform,
    );
  } catch (e) {
    debugPrint('Firebase initialization warning: $e');
  }
  runApp(const DartNexusLabApp());
}

class DartNexusLabApp extends StatelessWidget {
  const DartNexusLabApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Dart Nexus Lab',
      debugShowCheckedModeBanner: false,
      theme: NexusTheme.darkTheme,
      home: const HomeScreen(),
    );
  }
}
