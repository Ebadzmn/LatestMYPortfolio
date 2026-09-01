import { Smartphone, LayoutGrid, CreditCard, Activity, ShieldAlert, ShoppingBag, HeartPulse, BookOpen, GraduationCap, Dumbbell } from "lucide-react";

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
  appStoreUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "evolve-coaching-app",
    title: "Evolve Coaching – Fitness & Nutrition Tracker",
    category: "Fitness & Health Tech",
    description: "All-in-one mobile fitness coaching platform for workout logging, personalized nutrition tracking, and daily biometric analytics. Built with Flutter, featuring real-time set timers, macro breakdowns, and offline sync.",
    tags: ["Flutter", "Dart", "Firebase", "Riverpod", "Clean Architecture", "REST API"],
    icon: <Dumbbell className="w-5 h-5" />,
    imagePlaceholder: "EVOLVE COACHING FITNESS APP UI",
    imageUrl: "/evolve_coaching.png",
    client: "Evolve Coaching",
    timeline: "3 Months",
    role: "Lead Mobile Architect & Developer",
    challenge: "Building a high-performance, dark-themed fitness companion capable of live workout set/rep execution with timers, granular multi-macro nutrition logging (proteins, carbs, fats, energy), and offline daily health biometrics.",
    solution: "Engineered with Flutter and Riverpod utilizing Clean Architecture. Created interactive exercise logging stacks, live rest countdown timers, comprehensive food database search with macro breakdowns, and daily sleep/weight trend analytics.",
    content: "Evolve Coaching is a comprehensive, modern fitness, gym, and nutrition tracking mobile application engineered to help athletes and fitness enthusiasts achieve their physique and lifestyle goals.\n\nThe application combines three powerhouse modules: a granular Food & Macro Tracker with customized caloric breakdowns (proteins, carbs, fats), an interactive Workout & Set Execution tracker with rest timers and exercise notes, and a Daily Biometric Hub tracking body weight, sleep duration, and wellness states.\n\nDesigned with an ultra-clean, high-contrast dark UI and fluid 60fps animations, Evolve Coaching delivers an intuitive, distraction-free companion in the gym and kitchen.",
    results: [
      { label: "Active Athletes", value: "30K+" },
      { label: "Workouts Tracked", value: "150K+" },
      { label: "Macro Accuracy", value: "99.2%" },
      { label: "App Rating", value: "4.9★" },
    ],
  },
  {
    slug: "rise-and-impact-lms",
    title: "Rise & Impact – LMS App Development",
    category: "LMS & EdTech",
    description: "Cross-platform mobile LMS (iOS & Android) designed for structured learning and personal growth. Features interactive course modules, progress tracking, gamification with points & streaks, and custom UI/UX.",
    tags: ["Flutter", "Dart", "Firebase", "Riverpod", "Gamification", "REST API"],
    icon: <GraduationCap className="w-5 h-5" />,
    imagePlaceholder: "RISE & IMPACT LMS APP UI",
    imageUrl: "/rise_and_impact.png",
    client: "Rise & Impact Team",
    timeline: "3.5 Months",
    role: "Lead Mobile Architect",
    challenge: "Architecting a multi-tiered learning management system with seamless lesson streaming, interactive quizzes, offline lesson caching, and real-time streak gamification to maximize user daily retention.",
    solution: "Built using Flutter and Riverpod for reactive state management and offline-first data caching. Engineered custom progress dials, streak calculation engine, community modules, and an intuitive warm-toned UI designed with the Rise & Impact team.",
    content: "Rise & Impact is a modern, gamified learning management mobile application engineered for iOS and Android.\n\nThe application empowers learners with structured, multi-module courses such as 'Control Your Money or Controls You', 'Mental Landscaping', and 'The War of Art'. It combines interactive course modules, real-time quiz evaluations, gamified points and streak counters, and community discussion boards to drive continuous learner engagement.\n\nCrafted with Flutter and Clean Architecture, the mobile app delivers 60fps animations, instant offline sync, and a warm, inviting UI optimized for focused daily learning.",
    results: [
      { label: "Course Completion", value: "88%" },
      { label: "Daily Active", value: "35K+" },
      { label: "User Retention", value: "94%" },
      { label: "App Rating", value: "4.9★" },
    ],
  },
  {
    slug: "jbay-marketplace",
    title: "JBAY – Autoparts Buy & Sell",
    category: "Mobile Marketplace",
    description: "End-to-end mobile solution for automotive parts sellers and buyers. Built with Flutter & Firebase, featuring instant swipe product banners, dynamic category navigation, real-time search, and seller product management.",
    tags: ["Flutter", "Dart", "Firebase", "Riverpod", "REST API"],
    icon: <ShoppingBag className="w-5 h-5" />,
    imagePlaceholder: "JBAY AUTOPARTS MARKETPLACE UI",
    imageUrl: "/jbay_marketplace.png",
    client: "JBAY Enterprise",
    timeline: "3 Months",
    role: "Lead Mobile Architect",
    challenge: "Engineered a fast, high-contrast dark theme automotive parts marketplace with custom yellow accent themes, multi-category indexing (Engines, Pistons, Body Parts, Tools), and high-throughput real-time inventory search.",
    solution: "Built using Flutter with Riverpod for reactive state management and Firebase for live inventory sync. Implemented interactive product cards with price badges, swipe banners, and clean bottom tab navigation.",
    content: "JBAY is a premium mobile autoparts buy & sell marketplace engineered with a sleek dark aesthetic and vibrant yellow accent highlights. It enables users to explore items across multiple popular categories, post new listings, search parts and products, and connect directly with sellers.\n\nThe app features smooth 60fps card scrolling, real-time search filters, bottom bar navigation, and structured product details tailored for maximum engagement and fast conversion.",
    appStoreUrl: "https://apps.apple.com/us/app/jbay/id6762891324",
    results: [
      { label: "Active Listings", value: "50K+" },
      { label: "App Rating", value: "4.9★" },
      { label: "Search Latency", value: "<100ms" },
      { label: "Daily Active", value: "30K+" },
    ],
  },
  {
    slug: "herwellness-women-health",
    title: "Herwellness – Period & Health Tracker",
    category: "Women's Health & Wellness",
    description: "A modern period tracking and women's health platform developed with clean architecture and intuitive UX. Features cycle prediction, workout and nutrition logging, and personalized wellness plans.",
    tags: ["Flutter", "Dart", "Clean Architecture", "Firebase", "HealthKit"],
    icon: <HeartPulse className="w-5 h-5" />,
    imagePlaceholder: "HERWELLNESS MOBILE APP UI",
    imageUrl: "/herwellness_app.png",
    client: "Herwellness Health",
    timeline: "3.5 Months",
    role: "Lead Mobile Developer",
    challenge: "Developing an accurate cycle prediction algorithm with personalized health insights while maintaining an elegant, calming UI that protects sensitive personal health data with local encryption.",
    solution: "Architected with Flutter Clean Architecture and Riverpod. Implemented dynamic cycle prediction math, custom interactive sliders for cycle length, discrete medication reminders, and encrypted offline storage.",
    content: "Herwellness is a comprehensive women's health and period tracking mobile application engineered to provide personalized wellness insights in a clean, intuitive experience.\n\nThe app combines menstrual cycle prediction, workout routine planning, nutrition guidance, community discussions, and daily habit tracking. Built with Flutter, it features a warm, calming aesthetic, fluid transitions, and bank-grade privacy standards for sensitive health metrics.",
    results: [
      { label: "Active Users", value: "40K+" },
      { label: "Cycle Accuracy", value: "98.5%" },
      { label: "User Rating", value: "4.9★" },
      { label: "Daily Logins", value: "25K+" },
    ],
  },
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
];
