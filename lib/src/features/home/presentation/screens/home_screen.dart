import 'package:flutter/material.dart';
import 'package:dart_nexus_lab/src/core/theme/nexus_colors.dart';
import 'package:dart_nexus_lab/src/features/telemetry/services/telemetry_service.dart';
import 'package:dart_nexus_lab/src/features/home/presentation/widgets/flagship_card_widget.dart';
import 'package:dart_nexus_lab/src/features/home/presentation/widgets/glass_container.dart';

class HomeScreen extends StatelessWidget {
  final TelemetryService telemetryService;

  const HomeScreen({
    super.key,
    this.telemetryService = const TelemetryService(),
  });

  @override
  Widget build(BuildContext context) {
    final flagships = telemetryService.getFlagships();
    final accentColors = [
      NexusColors.primaryCyan,
      NexusColors.transitEmerald,
      const Color(0xFF0284C7),
      NexusColors.crypticAmber,
    ];

    return Scaffold(
      backgroundColor: NexusColors.voidBg,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: const Row(
          children: [
            Text(
              'Δ DART NEXUS ',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 16,
                color: Colors.white,
              ),
            ),
            Text(
              'LAB',
              style: TextStyle(
                fontWeight: FontWeight.w300,
                fontSize: 16,
                color: NexusColors.primaryCyan,
              ),
            ),
          ],
        ),
        actions: [
          Container(
            margin: const EdgeInsets.only(right: 16),
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: BoxDecoration(
              color: NexusColors.transitEmerald.withValues(alpha: 0.1),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(
                color: NexusColors.transitEmerald.withValues(alpha: 0.3),
              ),
            ),
            child: const Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                CircleAvatar(
                  radius: 3,
                  backgroundColor: NexusColors.transitEmerald,
                ),
                SizedBox(width: 6),
                Text(
                  '0.0000% ERR',
                  style: TextStyle(
                    fontSize: 11,
                    color: NexusColors.transitEmerald,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Hero Banner
            GlassContainer(
              borderColor: NexusColors.primaryCyan.withValues(alpha: 0.3),
              child: const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'AUTONOMOUS COMPUTATIONAL SYSTEMS',
                    style: TextStyle(
                      color: NexusColors.primaryCyan,
                      fontSize: 12,
                      fontWeight: FontWeight.bold,
                      letterSpacing: 1.2,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    'Physical Ground Truth. Zero Wrapper AI.',
                    style: TextStyle(
                      fontSize: 22,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    'Bridging closed-loop finite element mechanics, transition-state MLIP quantum chemistry, and cryptographic hardware ledgers.',
                    style: TextStyle(fontSize: 13, color: Colors.white70),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),
            const Text(
              'TIER-1 FLAGSHIPS',
              style: TextStyle(
                color: Colors.white54,
                fontSize: 12,
                fontWeight: FontWeight.bold,
                letterSpacing: 1.2,
              ),
            ),
            const SizedBox(height: 12),
            GridView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                crossAxisSpacing: 12,
                mainAxisSpacing: 12,
                childAspectRatio: 1.35,
              ),
              itemCount: flagships.length,
              itemBuilder: (context, index) {
                return FlagshipCardWidget(
                  project: flagships[index],
                  accentColor: accentColors[index % accentColors.length],
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
