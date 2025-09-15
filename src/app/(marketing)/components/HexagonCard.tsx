import { motion } from 'framer-motion'; // Changed from 'motion/react' to 'framer-motion' for Next.js compatibility

interface HexagonCardProps {
  icon: React.ReactNode;
  title: string;
  delay: number;

}

export default function HexagonCard({ icon, title, delay }: HexagonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      className="relative group cursor-pointer flex flex-col items-center"
    >
      {/* Hexagon Shape */}
      <div className="relative w-24 h-24 mb-4">
        <svg 
          width="96" 
          height="96" 
          viewBox="0 0 96 96" 
          className="absolute inset-0"
        >
          <motion.polygon
            points="48,8 72,26 72,54 48,72 24,54 24,26"
            fill="rgba(255,255,255,0.1)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.2 }}
            whileHover={{
              fill: "rgba(255,255,255,0.15)",
              stroke: "rgba(255,255,255,0.5)"
            }}
          />
          {/* Glow effect */}
          <motion.polygon
            points="48,8 72,26 72,54 48,72 24,54 24,26"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            opacity="0"
            animate={{
              opacity: [0, 0.8, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + 1
            }}
          />
        </svg>
        
        {/* Icon inside hexagon */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          {icon}
        </div>
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.4 }}
        className="text-white text-center max-w-32"
        style={{ fontSize: '0.875rem', fontWeight: 500 }}
      >
        {title}
      </motion.div>
    </motion.div>
  );
}