import { motion } from 'framer-motion'; // Next.js projects typically use framer-motion directly
import {
  Settings,
  Infinity as LucideInfinity,
  Shield,
  Search,
  DollarSign,
  Cog
} from 'lucide-react';
import EnhancedAnimatedBackground from './EnhancedAnimatedBackground';
import HexagonCard from './HexagonCard';
// TODO: Create and import EnhancedCitySkyline component
import EnhancedCitySkyline from './EnhancedCitySkyline';

export default function KubernatesHomePage() {
  const services = [
    { icon: <Settings className="w-6 h-6" />, title: "Kubernetes Platforms", delay: 0.2 },
    { icon: <LucideInfinity className="w-6 h-6" />, title: "DevOps", delay: 0.4 },
    { icon: <Cog className="w-6 h-6" />, title: "Platform Engineering", delay: 0.6 },
    { icon: <Shield className="w-6 h-6" />, title: "Kubernetes Security", delay: 0.8 },
    { icon: <Search className="w-6 h-6" />, title: "Observability", delay: 1.0 },
    { icon: <DollarSign className="w-6 h-6" />, title: "FinOps", delay: 1.2 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-purple-500 via-purple-600 to-purple-800">
      {/* Enhanced Animated Background Elements */}
      <EnhancedAnimatedBackground />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-5xl"
        >
          <motion.h1
            className="text-white mb-6 leading-tight"
            style={{ fontSize: '3.5rem', fontWeight: 300, letterSpacing: '0.02em' }}
            animate={{
              textShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 30px rgba(255,255,255,0.4)",
                "0 0 0px rgba(255,255,255,0)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          >
            Accelerating Enterprise Adoption of
            <br />
            <span style={{ fontWeight: 600 }}>Cloud, Kubernetes & Beyond</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/90"
            style={{ fontSize: '1.125rem', fontWeight: 300, letterSpacing: '0.05em' }}
          >
            Consult | Build | Migrate | Manage | Enterprise support
          </motion.p>
        </motion.div>

        {/* Services Grid - Hexagons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-3 gap-x-16 gap-y-12 mb-32"
        >
          {services.map((service, index) => (
            <HexagonCard
              key={`service-${index}`}
              icon={service.icon}
              title={service.title}
              delay={service.delay}
            />
          ))}
        </motion.div>
      </div>

      {/* Enhanced City Skyline */}
      <EnhancedCitySkyline />

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/90 to-transparent pointer-events-none z-30" />
    </div>
  );
}