import { ShoppingBag, HeartPulse, GraduationCap, Dumbbell } from "lucide-react";

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
    appStoreUrl: "https://apps.apple.com/app/evolve-coaching-app/id6761861882",
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
    appStoreUrl: "https://apps.apple.com/app/rise-impact-academy/id6761784753",
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
    appStoreUrl: "https://apps.apple.com/app/jbay/id6762891324",
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
    appStoreUrl: "https://apps.apple.com/app/herwellness/id6788869048",
    results: [
      { label: "Active Users", value: "40K+" },
      { label: "Cycle Accuracy", value: "98.5%" },
      { label: "User Rating", value: "4.9★" },
      { label: "Daily Logins", value: "25K+" },
    ],
  },
];
