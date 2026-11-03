import '../models/flagship_model.dart';

class TelemetryService {
  const TelemetryService();

  List<FlagshipModel> getFlagships() {
    return const [
      FlagshipModel(
        id: 'structura-nexus',
        title: 'Structura Nexus',
        codeName: 'STRUCTURA-FEA-V12',
        tagline: 'Autonomous Structural Engineering & Generative Mechanics',
        status: 'DEPLOYED • FIREBASE',
        errorRate: '0.0000% DSM Error',
        liveUrl: 'https://structura-nexus.web.app',
      ),
      FlagshipModel(
        id: 'swift-ride',
        title: 'Swift Ride',
        codeName: 'SWIFT-TRANSIT-P2P',
        tagline: 'Decentralized Zero-Commission Urban Mobility',
        status: 'MOBILE PRODUCTION',
        errorRate: '0.0% Take-Rate',
        liveUrl: 'https://dartnexuslab.com',
      ),
      FlagshipModel(
        id: 'quantum-forge',
        title: 'Quantum Forge',
        codeName: 'QFORGE-TS-MLIP',
        tagline: 'Transition State MLIP & Quantum Chemistry Workstation',
        status: 'LIVE • WEB WORKSTATION',
        errorRate: 'ΔE < 1e-5 eV Verlet',
        liveUrl: 'https://quantumforgeapp.com/',
      ),
      FlagshipModel(
        id: 'blockguard',
        title: 'BlockGuard',
        codeName: 'BLOCKGUARD-SEPOLIA-NFC',
        tagline: 'Forensic Pharma Anti-Counterfeiting Platform',
        status: 'HARDWARE ANCHORED',
        errorRate: 'AES-128 CMAC Verified',
        liveUrl: 'https://dartnexuslab.com',
      ),
    ];
  }
}

