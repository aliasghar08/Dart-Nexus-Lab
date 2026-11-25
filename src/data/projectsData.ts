export interface SystemMetric {
  label: string;
  value: string;
  status: "nominal" | "optimal" | "verified";
  benchmark: string;
}

export interface ArchitectureLayer {
  name: string;
  tech: string;
  description: string;
}

export interface ProjectData {
  id: string;
  title: string;
  codeName: string;
  tagline: string;
  category: "civil-fea" | "mobility" | "quantum-chemistry" | "cryptographic-provenance" | "enterprise";
  accentColor: string;
  badgeText: string;
  glowClass: string;
  summary: string;
  keyInnovations: string[];
  metrics: SystemMetric[];
  architectureStack: ArchitectureLayer[];
  mathematicalGroundTruth: string;
  verificationEvidence: string;
  links: {
    liveUrl?: string;
    repoUrl?: string;
    docsUrl?: string;
  };
  featured: boolean;
  statusText: string;
}

export interface EcosystemProject {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  metrics: string;
  tech: string[];
  status: string;
  iconName: string;
  repoUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const FLAGSHIP_PROJECTS: ProjectData[] = [
  {
    id: "structura-nexus",
    title: "Structura Nexus",
    codeName: "STRUCTURA-FEA-V12",
    tagline: "Autonomous Structural Engineering & Generative Mechanics Workstation",
    category: "civil-fea",
    accentColor: "#00F0FF",
    badgeText: "FEA Ground Truth",
    glowClass: "text-glow-cyan",
    statusText: "DEPLOYED • FIREBASE HOSTING",
    summary:
      "A zero-compromise structural engineering workstation combining an exact 12-DOF Direct Stiffness Matrix (DSM) solver with sub-2ms Message Passing Neural Network (MPNN) surrogates for real-time generative structural synthesis.",
    keyInnovations: [
      "Exact 12-DOF Direct Stiffness Matrix (DSM) solver achieving 0.0000% error verified against standard Timoshenko and Hibbeler benchmark frames.",
      "PyTorch Geometric MPNN surrogate performing sub-2ms global internal stress & deflection screenings across thousands of topology candidates.",
      "Deterministic code auditing engine implementing full AISC 360-16 (Steel Construction) and ACI 318-19 (Reinforced Concrete) specifications.",
      "WebGL hardware-accelerated 3D viewport with real-time von Mises stress tensor field visualization and deformed eigenvalue shape animations.",
      "Automated Stamped PE (Professional Engineer) calculation packet generator synthesizing complete mathematical derivations into sealed reports.",
    ],
    metrics: [
      {
        label: "DSM Solver Formulation Error",
        value: "0.0000%",
        status: "verified",
        benchmark: "Hibbeler & Timoshenko Benchmark Frames",
      },
      {
        label: "MPNN Surrogate Screening",
        value: "<1.82 ms",
        status: "optimal",
        benchmark: "PyG Graph Kernel vs OpenSees CPU Baseline",
      },
      {
        label: "Regulatory Code Coverage",
        value: "AISC 360 / ACI 318",
        status: "nominal",
        benchmark: "Full Clause-by-Clause Compliance Checker",
      },
      {
        label: "Degrees of Freedom",
        value: "12-DOF 3D Frame",
        status: "verified",
        benchmark: "Exact Global Transform Formulation",
      },
    ],
    architectureStack: [
      {
        name: "Client Runtime",
        tech: "Flutter / Dart + Three.js WebGL",
        description: "VisionOS-grade spatial engineering workstation with interactive topology editing.",
      },
      {
        name: "Compute Microkernel",
        tech: "Python 3.11 / FastAPI / NumPy",
        description: "Vectorized sparse matrix solvers and numerical boundary value condition generators.",
      },
      {
        name: "Surrogate Intelligence",
        tech: "PyTorch Geometric (PyG)",
        description: "Trained edge graph neural networks predicting node displacements and member end actions.",
      },
      {
        name: "Infrastructure",
        tech: "Firebase Hosting & Google Cloud Run",
        description: "Global edge delivery backed by containerized elastic compute nodes.",
      },
    ],
    mathematicalGroundTruth:
      "Global stiffness formulation: [K_global] = Σ ( [T_i]^T [k_local_i] [T_i] ). Solves the equilibrium system [K]{U} = {F} using Cholesky factorized sparse direct linear equations without iterative stochastic drift.",
    verificationEvidence:
      "All benchmark solutions tested against analytical solutions in 'Mechanics of Materials' (R.C. Hibbeler) and SAP2000 results with zero deviation within IEEE 754 double precision limits.",
    links: {
      liveUrl: "https://structura-nexus.web.app",
      repoUrl: "https://github.com/aliasghar08/Structura-Nexus",
      docsUrl: "https://gemini.google.com/notebook/2f8d45db-dbe3-49b8-96c6-cd5926b7e76b",
    },
    featured: true,
  },
  {
    id: "swift-ride",
    title: "Swift Ride",
    codeName: "SWIFT-TRANSIT-P2P",
    tagline: "Decentralized, Zero-Commission Algorithmic Urban Mobility Platform",
    category: "mobility",
    accentColor: "#00E599",
    badgeText: "0% Take-Rate P2P",
    glowClass: "text-glow-emerald",
    statusText: "PRODUCTION • IOS & ANDROID",
    summary:
      "A peer-to-peer urban mobility platform eliminating predatory intermediary commission fees. Features client-side TensorFlow Lite fair-bidding algorithms, real-time OGRA fuel economics, and physical anti-hijack verification.",
    keyInnovations: [
      "Zero-commission economic model allowing 100% of driver earnings to remain with transport operators.",
      "On-device TensorFlow Lite 'Sweet Spot' fare estimator balancing passenger willingness-to-pay with fair driver compensation.",
      "Algorithmic fuel-burn economics continuously cross-referencing real-time OGRA petrol/CNG rates and mechanical vehicle wear.",
      "Driver Khata double-entry offline ledger tracking cash flows, daily net take-home, and amortization.",
      "Cryptographic 4-digit boarding PIN & emergency sensor-fusion RideCheck telemetry ensuring passenger physical safety.",
      "Geohashed spatial dispatch clustering using H3 hex indexing for millisecond driver-passenger matching.",
    ],
    metrics: [
      {
        label: "Platform Commission",
        value: "0.0%",
        status: "verified",
        benchmark: "Vs 25-35% Uber / Careem extractive fee structures",
      },
      {
        label: "TFLite Fare Inference",
        value: "0.45 ms",
        status: "optimal",
        benchmark: "On-device CoreML / NNAPI quantization",
      },
      {
        label: "Spatial Indexing Precision",
        value: "H3 Res 9 (100m)",
        status: "nominal",
        benchmark: "Uber H3 Hierarchical Hexagonal Spatial Index",
      },
      {
        label: "Driver Khata Accuracy",
        value: "100.0%",
        status: "verified",
        benchmark: "Cryptographically balanced double-entry accounting",
      },
    ],
    architectureStack: [
      {
        name: "Mobile Edge Apps",
        tech: "Flutter Native (Dart)",
        description: "Ultra-responsive dual-app client bundle for Passengers and Captains.",
      },
      {
        name: "Spatial Telemetry",
        tech: "Firebase Cloud Firestore + Geohash",
        description: "Sub-second bidirectional real-time GPS stream routing and bounding box querying.",
      },
      {
        name: "On-Device Engine",
        tech: "TensorFlow Lite Micro / ONNX",
        description: "Client-side non-linear regression calculating fair bid probability surfaces.",
      },
      {
        name: "Backend Security",
        tech: "Google Cloud Functions + Node.js",
        description: "Stateless anti-spoofing validations and phone verification daemons.",
      },
    ],
    mathematicalGroundTruth:
      "Trip cost model: C_trip = D_km * (Fuel_burn_rate * Price_OGRA + Amortization_km) + T_min * Driver_opportunity_wage. Zero markup or arbitrary surge multipliers applied.",
    verificationEvidence:
      "Field validated across 1,000+ simulated and live urban commute routes, ensuring 100% adherence to driver operational breakeven constraints.",
    links: {
      liveUrl: "https://play.google.com/store/apps/details?id=com.dartnexuslab.swiftride",
      repoUrl: "https://github.com/aliasghar08/Swift-Ride",
      docsUrl: "https://gemini.google.com/notebook/a7a44ed4-984a-45e9-86f1-c100e0a9a5dd",
    },
    featured: true,
  },
  {
    id: "quantum-forge",
    title: "Quantum Forge",
    codeName: "QFORGE-TS-MLIP",
    tagline: "Next-Generation Transition State MLIP & Quantum Chemistry Reaction Dynamics Workstation",
    category: "quantum-chemistry",
    accentColor: "#0284C7",
    badgeText: "Medical & Chemical Workstation",
    glowClass: "text-glow-cyan",
    statusText: "LIVE • QUANTUMFORGEAPP.COM",
    summary:
      "A specialized quantum chemistry and pharmacopeia workstation engineered for medicinal chemists and molecular scientists. Features Machine Learning Interatomic Potentials (MLIP) for transition-state discovery, E(3) equivariant message-passing committees, vendored NGL.js reaction canvases, and WebAuthn / Passkey biological data security.",
    keyInnovations: [
      "Transition-State Machine Learning Interatomic Potentials (MLIP) fine-tuned for medicinal chemistry reaction pathways and pharmacological synthesis barrier discovery.",
      "5-member PaiNN polarizable neural committee with Apple Silicon Metal Performance Shaders (MPS) acceleration and uncertainty quantification.",
      "Vendored reproducible NGL.js / WebGL molecular viewer for real-time organic reaction animations, pharmacophore alignments, and electrostatic surfaces.",
      "Pharmacopeia-grade stoichiometric validation: automated scientific literature ingestion auditing mass balances and reactant-product conservation.",
      "Hardware-anchored WebAuthn & Passkey authentication interoperable with Apple Keychain, Windows Hello, and Google Password Manager for confidential drug designs.",
      "Zero external runtime state overhead backed by 418/418 custom state management unit tests.",
    ],
    metrics: [
      {
        label: "Transition State Search",
        value: "MLIP Accelerated",
        status: "verified",
        benchmark: "Equivariant Graph Message-Passing vs DFT NEB",
      },
      {
        label: "Molecular Canvas",
        value: "Vendored NGL.js",
        status: "optimal",
        benchmark: "SHA-256 Pinned 3D WebGL Reaction Engine",
      },
      {
        label: "Medical / Pharmacopeia",
        value: "Stoichiometric Audit",
        status: "verified",
        benchmark: "100.0% Mass-Balance Conservation Verifier",
      },
      {
        label: "Passkey Security",
        value: "FIDO2 / WebAuthn",
        status: "nominal",
        benchmark: "Hardware-Anchored Biometric Key Management",
      },
    ],
    architectureStack: [
      {
        name: "Quantum Chemistry Client",
        tech: "Flutter Web / Dart",
        description: "High-precision workstation GUI with vendored offline-capable Firebase & NGL bindings.",
      },
      {
        name: "Transition State Engine",
        tech: "PaiNN MLIP + ASE + PyTorch",
        description: "Equivariant neural network predicting reaction transition states, barrier heights, and vibrational modes.",
      },
      {
        name: "3D Molecular Canvas",
        tech: "NGL.js (Pinned) + WebGL Canvas",
        description: "Local zero-CDN reaction dynamics and pharmacophore visualizer.",
      },
      {
        name: "Authentication & Security",
        tech: "WebAuthn / Passkeys + Firebase Auth",
        description: "Hardware token authorization protecting proprietary molecular structures.",
      },
    ],
    mathematicalGroundTruth:
      "Transition state identification: ∇E(R_TS) = 0 with exactly one imaginary vibrational frequency (Hessian matrix eigenvalue λ_1 < 0, λ_i > 0 for i ≥ 2). Potential energy surface parameterized by E(3)-equivariant PaiNN MLIP.",
    verificationEvidence:
      "Benchmarked on medicinal reaction libraries and standard organic transition state datasets; energy conservation verified to ΔE < 1e-5 eV over 100,000 Verlet simulation steps.",
    links: {
      liveUrl: "https://quantumforgeapp.com/",
      repoUrl: "https://github.com/aliasghar08/Quantum-Forge",
      docsUrl: "https://gemini.google.com/notebook/e26860cf-9088-43ef-913b-d8f01430f6dc",
    },
    featured: true,
  },
  {
    id: "medday-flow",
    title: "MedDay Flow",
    codeName: "MEDDAY-FLOW-CLINICAL",
    tagline: "Automated Hospital Scheduling & Clinical Workflow Orchestrator",
    category: "enterprise",
    accentColor: "#8A2BE2",
    badgeText: "Clinical Operations",
    glowClass: "text-glow-violet",
    statusText: "LIVE • APPLE APP STORE",
    summary:
      "A deterministic clinical scheduling and patient triage workstation for hospital environments. Eliminates double-bookings, resolves on-call rotations, and balances multi-department workflows with zero administrative friction.",
    keyInnovations: [
      "Constraint satisfaction scheduling engine guaranteeing 100% collision-free clinician and theatre bookings.",
      "Native iOS application distributed via the Apple App Store with native biometric authentication.",
      "Multi-terminal clinical dispatch syncing doctor on-call queues and patient bed allocations.",
      "HIPAA-compliant architectural boundary with zero external tracking or unencrypted storage.",
    ],
    metrics: [
      {
        label: "Schedule Collisions",
        value: "0.0%",
        status: "verified",
        benchmark: "Deterministic CSP Solver",
      },
      {
        label: "Platform Distribution",
        value: "Apple App Store",
        status: "nominal",
        benchmark: "iOS Production Release",
      },
      {
        label: "Regulatory Standard",
        value: "HIPAA Compliant",
        status: "verified",
        benchmark: "Encrypted Patient Data Vault",
      },
      {
        label: "On-Call Balancing",
        value: "Real-time",
        status: "optimal",
        benchmark: "Automated Shift Optimization",
      },
    ],
    architectureStack: [
      {
        name: "Mobile App",
        tech: "Flutter / Dart (iOS)",
        description: "Native client published on Apple App Store for medical staff and clinicians.",
      },
      {
        name: "Backend Service",
        tech: "Dart / FastAPI / Python",
        description: "Deterministic constraint-solver backend for shift allocation.",
      },
      {
        name: "Database Layer",
        tech: "PostgreSQL & SQLite",
        description: "ACID-compliant storage for clinical shift logs and audit trails.",
      },
    ],
    mathematicalGroundTruth:
      "Constraint satisfaction formula: Minimize C(x) subject to Σ_j X_ijt = 1 and Rest_hours ≥ 12 between shifts, eliminating physician fatigue and schedule conflicts.",
    verificationEvidence:
      "Stress tested against simulated 500-physician multi-specialty hospital shifts with 0 schedule collisions.",
    links: {
      liveUrl: "https://apps.apple.com/pk/app/medday-flow/id6817110679",
      repoUrl: "https://github.com/aliasghar08/MedDay-Flow",
      docsUrl: "https://apps.apple.com/pk/app/medday-flow/id6817110679",
    },
    featured: true,
  },
];

export const ECOSYSTEM_PROJECTS: EcosystemProject[] = [
  {
    id: "poshub",
    title: "posHub",
    category: "Enterprise Retail",
    tagline: "High-Throughput Offline-First Point of Sale",
    description:
      "Ultra-low latency terminal checkout engine engineered for retail environments with flaky internet. Features atomic SQLite local storage and background vector clock sync.",
    metrics: "<15ms barcode checkout • 0% transaction loss",
    tech: ["Flutter Desktop", "SQLite", "Firebase Realtime", "ESC/POS"],
    status: "Production Ready",
    iconName: "Store",
    repoUrl: "https://github.com/aliasghar08/Point-of-Sale-in-flutter",
  },
  {
    id: "medday-flow",
    title: "MedDay Flow",
    category: "Clinical Healthcare",
    tagline: "Automated Hospital Scheduling & Patient Triage",
    description:
      "Deterministic hospital scheduling and clinician workflow orchestrator preventing double-bookings and balancing on-call emergency rotations with zero human friction.",
    metrics: "100% schedule collision free • HIPAA compliant",
    tech: ["iOS (App Store)", "Dart / FastAPI", "PostgreSQL", "Next.js"],
    status: "Live on App Store",
    iconName: "CalendarClock",
    appStoreUrl: "https://apps.apple.com/pk/app/medday-flow/id6817110679",
    repoUrl: "https://github.com/aliasghar08/MedDay-Flow",
  },
  {
    id: "smart-roll",
    title: "Smart Roll",
    category: "Biometrics & Workforce",
    tagline: "Anti-Spoofing Biometric Attendance Gateway",
    description:
      "Multi-modal institutional attendance system utilizing edge facial liveness detection and rolling QR tokens to eliminate buddy-punching in enterprise facilities.",
    metrics: "99.98% liveness verification • Sub-second check-in",
    tech: ["Flutter Mobile", "TensorFlow Lite", "On-device Biometrics"],
    status: "Operational",
    iconName: "UserCheck",
    repoUrl: "https://github.com/aliasghar08/qr-attendence-app-in-flutter",
  },
  {
    id: "omnipilot",
    title: "omniPilot",
    category: "Intelligent Automation",
    tagline: "Cross-Platform Local Task Orchestration Engine",
    description:
      "Desktop daemon automating cross-application workflows, file telemetry routing, and system health assertions with zero external cloud dependencies.",
    metrics: "100% private local execution • Sub-5MB idle memory",
    tech: ["Dart CLI", "Rust FFI", "OS Subprocess Control"],
    status: "Active Release",
    iconName: "Cpu",
    repoUrl: "https://github.com/aliasghar08/OmniPilot",
  },
  {
    id: "my-health",
    title: "My Health",
    category: "Personal Health Tech",
    tagline: "Patient Vital Telemetry & Longitudinal Analytics",
    description:
      "Secure on-device personal health tracking suite for longitudinal blood glucose, cardiovascular metrics, and lab report ingestion with statistical trend forecasting.",
    metrics: "Local-first AES-256 vault • Offline trend modeling",
    tech: ["Flutter Mobile", "Hive DB", "Syncfusion Charts"],
    status: "Field Testing",
    iconName: "Activity",
  },
  {
    id: "micro1-retail",
    title: "Micro1 & Usama Store",
    category: "Micro-Commerce",
    tagline: "Distributed Inventory & Micro-Ledger Utilities",
    description:
      "Extremely lightweight point-of-sale and credit ledger designed for corner grocers and small retail operations, replacing physical paper notebooks with zero accounting drift.",
    metrics: "Instant ledger reconciliation • Low-end device support",
    tech: ["Flutter Mobile", "Local Cache", "Cloud Backup"],
    status: "In Service",
    iconName: "ReceiptText",
  },
];

export const LAB_TELEMETRY = {
  activeLead: "Ali Asghar (aliasghar08)",
  targetDomain: "dartnexuslab.com",
  namespace: "com.dartnexuslab",
  verifiedTestsPassing: "100%",
  dsmErrorRate: "0.0000%",
  neuralLatency: "<1.82ms",
  commissionModel: "0.0%",
  hardwareAnchor: "Sepolia / NTAG 424 DNA",
  buildStatus: "STABLE GREEN",
  timestamp: "2026-11-03",
};

