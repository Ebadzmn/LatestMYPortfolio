"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import {
  Play,
  Pause,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Activity,
  Zap,
  Target,
  Clock,
  BarChart3,
  Code,
  Layers,
  Cpu,
  TrendingUp,
  Shield,
  Star,
  ChevronDown,
  ChevronUp,
  XCircle,
  Loader2,
  Flame,
} from "lucide-react";

// --- Animation variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } as Transition,
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

// --- Animated Grid Background (hydration-safe — no Math.random) ---
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(113,113,122,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// --- Animated Counter ---
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += 1;
      if (start >= duration * 60) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor((start / (duration * 60)) * end));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// --- Test Item Component ---
function TestItem({ name, status, time, type }: { name: string; status: "pass" | "fail" | "pending"; time: string; type: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={0}
      className="flex items-center justify-between p-4 bg-white rounded-xl border border-zinc-100 hover:border-zinc-300 transition-colors group"
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          status === "pass" ? "bg-green-50 text-green-600" :
          status === "fail" ? "bg-red-50 text-red-600" :
          "bg-zinc-50 text-zinc-400"
        }`}>
          {status === "pass" ? <CheckCircle2 className="w-5 h-5" /> :
           status === "fail" ? <XCircle className="w-5 h-5" /> :
           <Loader2 className="w-5 h-5 animate-spin" />}
        </div>
        <div>
          <p className="font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">{name}</p>
          <p className="text-xs text-zinc-400">{type}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-mono text-zinc-500">{time}</p>
      </div>
    </motion.div>
  );
}

// --- Metric Card ---
function MetricCard({ icon: Icon, label, value, color, trend }: { icon: any; label: string; value: React.ReactNode; color: string; trend?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
            <TrendingUp className="w-3 h-3" />
            {trend}
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-zinc-900 mb-1">{value}</p>
      <p className="text-xs text-zinc-400 uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}

// --- Progress Ring ---
function ProgressRing({ progress, size = 120, strokeWidth = 8, color = "#18181b" }: { progress: number; size?: number; strokeWidth?: number; color?: string }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f4f4f5"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-zinc-900">{progress}%</span>
      </div>
    </div>
  );
}

// --- Accordion Item ---
function AccordionItem({ title, children, isOpen, onToggle }: { title: string; children: React.ReactNode; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-zinc-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-zinc-50 transition-colors text-left"
      >
        <span className="font-semibold text-zinc-900">{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-zinc-400" /> : <ChevronDown className="w-5 h-5 text-zinc-400" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden bg-zinc-50"
      >
        <div className="p-4 text-sm text-zinc-600">{children}</div>
      </motion.div>
    </div>
  );
}

export default function TestPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"overview" | "tests" | "coverage" | "performance">("overview");
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { margin: "-100px" });

  const testCases = [
    { name: "User Authentication Flow", status: "pass" as const, time: "0.234s", type: "E2E" },
    { name: "Payment Processing", status: "pass" as const, time: "0.456s", type: "Integration" },
    { name: "Data Validation Schema", status: "pass" as const, time: "0.089s", type: "Unit" },
    { name: "API Rate Limiting", status: "fail" as const, time: "1.234s", type: "Integration" },
    { name: "Image Upload Pipeline", status: "pass" as const, time: "0.567s", type: "E2E" },
    { name: "Notification System", status: "pending" as const, time: "--", type: "Unit" },
  ];

  const runTests = () => {
    setIsRunning(true);
    setTestResults([]);
    setTimeout(() => {
      setTestResults(testCases.map((t, i) => ({ ...t, index: i })));
      setIsRunning(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-zinc-50 relative">
      <AnimatedGrid />

      {/* Hero Section with dark gradient */}
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 pt-24 pb-16 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700/50 via-transparent to-transparent" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div variants={fadeInUp} custom={0}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 shadow-lg shadow-zinc-900/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-300">All Systems Operational</span>
            </div>
          </motion.div>

          <motion.h1 variants={fadeInUp} custom={1} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6 leading-none">
            Test<span className="text-zinc-500">Suite</span>
          </motion.h1>

          <motion.p variants={fadeInUp} custom={2} className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Comprehensive quality assurance dashboard. Real-time metrics, automated tests, and performance analytics at a glance.
          </motion.p>

          <motion.div variants={fadeInUp} custom={3} className="flex flex-wrap justify-center gap-4">
            <button onClick={runTests} disabled={isRunning} className="flex items-center gap-3 px-8 py-4 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-100 transition-all hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:hover:shadow-none">
              {isRunning ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
              {isRunning ? "Running Tests..." : "Run Tests"}
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all hover:shadow-xl active:scale-95">
              <RefreshCw className="w-5 h-5" />
              Refresh
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="sticky top-20 z-30 bg-zinc-50/95 backdrop-blur-md border-b border-zinc-200 px-4">
        <div className="max-w-6xl mx-auto flex gap-1 py-2">
          {(["overview", "tests", "coverage", "performance"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all ${
              activeTab === tab ? "bg-zinc-900 text-white shadow-md" : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50"
            }`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {activeTab === "overview" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard icon={Zap} label="Total Tests" value={<AnimatedCounter end={847} suffix="+" />} color="bg-blue-50 text-blue-600" trend="+12%" />
              <MetricCard icon={CheckCircle2} label="Passed" value="812" color="bg-green-50 text-green-600" trend="+8%" />
              <MetricCard icon={AlertCircle} label="Failed" value="23" color="bg-red-50 text-red-600" trend="-3%" />
              <MetricCard icon={Clock} label="Avg. Time" value="0.42s" color="bg-purple-50 text-purple-600" trend="-15%" />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Progress Ring */}
              <div className="p-8 bg-white rounded-2xl border border-zinc-100 shadow-sm flex flex-col items-center">
                <h3 className="text-lg font-semibold text-zinc-900 mb-6">Overall Health</h3>
                <ProgressRing progress={96} size={180} strokeWidth={12} color="#18181b" />
                <p className="text-sm text-zinc-400 mt-6">All critical systems operational</p>
              </div>

              {/* Test Results */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-zinc-900">Recent Test Results</h3>
                  <span className="text-xs text-zinc-400">Last 24 hours</span>
                </div>
                {isRunning ? (
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-zinc-100 shadow-sm">
                        <Loader2 className="w-5 h-5 animate-spin text-zinc-400" />
                        <div className="flex-1">
                          <div className="h-4 bg-zinc-100 rounded w-48 mb-2 animate-pulse" />
                          <div className="h-3 bg-zinc-50 rounded w-24" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : testResults.length > 0 ? (
                  testResults.map((test, i) => <TestItem key={i} {...test} />)
                ) : (
                  <div className="p-12 bg-white rounded-2xl border border-zinc-100 shadow-sm text-center">
                    <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-zinc-400" />
                    </div>
                    <p className="text-zinc-500 font-medium">No tests run yet</p>
                    <p className="text-sm text-zinc-400 mt-2">Click &quot;Run Tests&quot; to get started</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "tests" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-zinc-900">Test Suite</h2>
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                812 passed
                <span className="w-2 h-2 rounded-full bg-red-500 ml-2" />
                23 failed
              </div>
            </div>

            {["Unit Tests", "Integration Tests", "E2E Tests", "Performance Tests"].map((category, i) => (
              <AccordionItem
                key={category}
                title={category}
                isOpen={openAccordion === i}
                onToggle={() => setOpenAccordion(openAccordion === i ? null : i)}
              >
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>{category} Progress</span>
                    <span className="font-semibold">{92 - i * 3}%</span>
                  </div>
                  <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${92 - i * 3}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 } as Transition}
                      className="h-full bg-gradient-to-r from-zinc-900 to-zinc-600 rounded-full"
                    />
                  </div>
                </div>
              </AccordionItem>
            ))}
          </motion.div>
        )}

        {activeTab === "coverage" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">Code Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { progress: 94, label: "Lines", desc: "Line coverage percentage", color: "#18181b" },
                { progress: 89, label: "Branches", desc: "Branch coverage percentage", color: "#71717a" },
                { progress: 92, label: "Functions", desc: "Function coverage percentage", color: "#a1a1aa" },
              ].map((item, i) => (
                <div key={item.label} className="p-8 bg-white rounded-2xl border border-zinc-100 shadow-sm flex flex-col items-center hover:shadow-lg transition-shadow">
                  <ProgressRing progress={item.progress} size={160} strokeWidth={10} color={item.color} />
                  <h3 className="text-sm font-semibold text-zinc-900 mt-6">{item.label}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "performance" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Load Time", value: "1.2s", sub: "Average", icon: Clock, color: "bg-blue-50 text-blue-600" },
                { label: "Time to Interactive", value: "0.8s", sub: "Excellent", icon: Zap, color: "bg-yellow-50 text-yellow-600" },
                { label: "First Contentful Paint", value: "0.4s", sub: "Fast", icon: Activity, color: "bg-green-50 text-green-600" },
                { label: "Core Web Vitals", value: "98/100", sub: "All Green", icon: Shield, color: "bg-purple-50 text-purple-600" },
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  variants={fadeInUp}
                  custom={i}
                  className="p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${metric.color} flex items-center justify-center`}>
                      <metric.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-zinc-900">{metric.value}</p>
                      <p className="text-xs text-zinc-400 uppercase tracking-wider">{metric.label}</p>
                    </div>
                  </div>
                  <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(parseInt(metric.value) / 100 * 100, 100)}%` }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 } as Transition}
                      className="h-full bg-zinc-900 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer Stats */}
      <div className="relative z-10 border-t border-zinc-200 bg-white px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Flame, label: "Builds This Month", value: "156", bg: "bg-orange-50 text-orange-600" },
            { icon: Star, label: "Test Reliability", value: "99.2%", bg: "bg-yellow-50 text-yellow-600" },
            { icon: Layers, label: "Test Files", value: "42", bg: "bg-blue-50 text-blue-600" },
            { icon: Cpu, label: "Avg CPU Usage", value: "23%", bg: "bg-green-50 text-green-600" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-zinc-200/50 text-center hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-zinc-900 mb-1">{stat.value}</p>
              <p className="text-xs text-zinc-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
