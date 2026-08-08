import { Smartphone, LayoutGrid, CreditCard, Activity, ShieldAlert } from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  imagePlaceholder: string;
  imageUrl: string;
  client: string;
  timeline: string;
  role: string;
  content: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "smart-safety-tracker",
    title: "GPS Safety & Fall Detection",
    category: "IoT & Mobile Safety",
    description: "A real-time safety, geofencing, and fall-detection mobile application built with Flutter. Integrates live GPS map telemetry (Dhaka region), emergency SOS triggers, sensor device health monitors, and automated incident logs.",
    tags: ["Flutter", "Dart", "Google Maps API", "IoT BLE", "WebSockets", "Firebase"],
    icon: <ShieldAlert className="w-5 h-5" />,
    imagePlaceholder: "SAFETY TRACKER UI",
    imageUrl: "/safety_tracker.png",
    client: "Guardian Care Tech",
    timeline: "3.5 Months",
    role: "Lead Mobile Architect",
    challenge: "Engineered high-precision real-time GPS telemetry for personal safety, fall detection events, and geofence perimeter alerts in high-density urban areas without draining battery efficiency.",
    solution: "Developed an ultra-low-power BLE background listening isolate coupled with WebSockets for instant SOS triggers and live map updates. Designed a dark high-contrast UI tailored for immediate emergency actions.",
    content: "The Smart Safety & Location Tracker was engineered to provide real-time peace of mind for families and vulnerable individuals. Built using Flutter and Dart, the app features live GPS tracking centered around Dhaka, automatic fall detection algorithms, geofence perimeter monitoring, and battery level diagnostics.\n\nThe UI was specifically built in a high-contrast dark theme with quick 3-second hold SOS triggers and instant event logging, ensuring critical data is instantly accessible during emergency events.",
    results: [
      { label: "Alert Latency", value: "<150ms" },
      { label: "Active Geofences", value: "25K+" },
      { label: "Battery Saved", value: "35%" },
      { label: "Emergency Rating", value: "5.0★" },
    ],
  },
  {
    slug: "fintech-wallet-app",
    title: "Fintech Wallet App",
    category: "Cross-Platform Mobile",
    description: "A secure, high-performance mobile wallet built with Flutter. Features include biometric authentication, real-time transaction tracking, and a fluid, interactive UI built with custom painters.",
    tags: ["Flutter", "Dart", "Firebase", "Riverpod", "Stripe"],
    icon: <CreditCard className="w-5 h-5" />,
    imagePlaceholder: "FINTECH UI",
    imageUrl: "/fintech_wallet.png",
    client: "Finova Finance",
    timeline: "3 Months",
    role: "Lead Developer",
    challenge: "Building a mobile wallet that meets bank-grade security standards while maintaining butter-smooth 60fps animations was the core challenge. Users expect financial apps to feel both trustworthy and delightful — two goals that often conflict.",
    solution: "We architected a layered security model with biometric auth and encrypted local storage, while using Flutter's custom painters and Riverpod for fluid, reactive state management. Firebase powered real-time sync, and Stripe handled seamless payment flows.",
    content: "The Fintech Wallet App was designed from the ground up to provide a seamless and secure financial experience. The primary challenge was ensuring bank-grade security without compromising on the fluidity of the user interface. By leveraging Flutter's custom painters and Riverpod for state management, we achieved a 60fps experience even during complex data visualizations of the user's spending habits. \n\nWe integrated Firebase for real-time data sync and Stripe for seamless top-ups. Biometric authentication was tightly coupled with encrypted local storage to ensure that sensitive data never leaves the device.",
    results: [
      { label: "App Rating", value: "4.9★" },
      { label: "Active Users", value: "120K+" },
      { label: "Load Time", value: "<1.2s" },
      { label: "Crash Free", value: "99.8%" },
    ],
  },
  {
    slug: "social-dashboard",
    title: "Social Dashboard",
    category: "Web & Mobile",
    description: "Responsive social media management dashboard. Leverages Flutter Web and Mobile for a unified codebase, featuring complex state management and real-time websocket data feeds.",
    tags: ["Flutter Web", "BLoC", "WebSockets", "GraphQL"],
    icon: <LayoutGrid className="w-5 h-5" />,
    imagePlaceholder: "DASHBOARD UI",
    imageUrl: "/social_dashboard.png",
    client: "SocialSync",
    timeline: "4 Months",
    role: "Full Stack Engineer",
    challenge: "Managing thousands of concurrent WebSocket connections while keeping the UI responsive and data-dense required a rethinking of how real-time dashboards are typically built in cross-platform frameworks.",
    solution: "BLoC pattern provided predictable, testable state management across web and mobile. We built a custom WebSocket middleware layer that intelligently batches updates, preventing UI jank even under heavy data throughput.",
    content: "Building a dashboard that handles real-time data streams across thousands of active sessions requires a robust architecture. The Social Dashboard uses WebSockets for instant data delivery and BLoC for predictable state management across both the web and mobile platforms.\n\nThe UI was crafted with a focus on data density, ensuring that power users could see all their analytics at a glance without feeling overwhelmed. By sharing 95% of the codebase between the web and mobile versions, we drastically reduced time-to-market and maintenance overhead.",
    results: [
      { label: "Shared Code", value: "95%" },
      { label: "Real-time Lag", value: "<50ms" },
      { label: "Daily Sessions", value: "45K+" },
      { label: "Uptime", value: "99.99%" },
    ],
  },
  {
    slug: "e-commerce-app",
    title: "E-Commerce App",
    category: "Mobile Application",
    description: "A feature-rich e-commerce application with smooth hero animations, dynamic theming, and an offline-first architecture using SQLite and repository pattern.",
    tags: ["Flutter", "Provider", "SQLite", "REST API"],
    icon: <Smartphone className="w-5 h-5" />,
    imagePlaceholder: "E-COMMERCE UI",
    imageUrl: "/ecommerce_app.png",
    client: "StyleStore",
    timeline: "2.5 Months",
    role: "Mobile Developer",
    challenge: "E-commerce apps live or die by perceived performance. Users abandon carts when transitions stutter or catalogs load slowly. Building an offline-first experience that feels instant was critical.",
    solution: "SQLite with a clean repository pattern ensures the catalog is always available locally. Hero animations between list and detail views create seamless visual continuity, and dynamic theming lets merchants customize the experience.",
    content: "This E-Commerce Application focuses on providing a premium shopping experience through fluid animations and a heavily optimized offline-first architecture. When users browse the catalog, data is cached locally using SQLite, ensuring that the app remains fully functional even in areas with poor network connectivity.\n\nHero animations were heavily utilized to create seamless transitions between product lists and detail pages, significantly enhancing the perceived performance and premium feel of the application.",
    results: [
      { label: "Conv. Rate", value: "+38%" },
      { label: "Offline Ready", value: "100%" },
      { label: "Avg. Load", value: "0.8s" },
      { label: "Cart Abandon", value: "-22%" },
    ],
  },
  {
    slug: "health-tracker",
    title: "Health Tracker",
    category: "Wearable Integration",
    description: "Health and fitness tracking app that integrates with Bluetooth LE devices to sync metrics. Features complex data visualization using custom charting libraries in Flutter.",
    tags: ["Flutter", "Bluetooth LE", "Charts", "HealthKit"],
    icon: <Activity className="w-5 h-5" />,
    imagePlaceholder: "HEALTH TRACKER",
    imageUrl: "/health_tracker.png",
    client: "Vitality Tech",
    timeline: "5 Months",
    role: "Senior Mobile Engineer",
    challenge: "Parsing raw binary BLE data streams in real-time while rendering complex, interactive health charts without dropping frames is an extreme performance challenge on mobile devices.",
    solution: "A custom Dart isolate pipeline handles BLE data parsing off the main thread. Charts were built from scratch using Canvas API for maximum control, with full HealthKit and Google Fit integration for a unified health view.",
    content: "The Health Tracker app bridges the gap between hardware and software by integrating directly with custom Bluetooth LE fitness wearables. Handling raw binary streams from BLE devices required a highly optimized pipeline in Dart to parse and visualize the data in real-time.\n\nThe application features extensive custom charting solutions built from scratch to display heart rate variability, sleep stages, and activity levels. We also implemented full integration with Apple HealthKit and Google Fit to provide a holistic view of the user's health data.",
    results: [
      { label: "Devices", value: "50+" },
      { label: "Data Points/s", value: "1,200" },
      { label: "User Rating", value: "4.8★" },
      { label: "Daily Active", value: "85K+" },
    ],
  },
];
