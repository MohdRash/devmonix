import { motion } from 'framer-motion'; // Changed from 'motion/react' to 'framer-motion' for Next.js compatibility
import {
  Plane,
  Github,
  GitBranch,
  Cloud,
  CloudRain,
  Star,
  Settings,
  Code,
  Database,
  Server,
  Cpu
} from 'lucide-react';

const TechIcon = ({ icon: Icon, x, y, duration, delay = 0 }: {
  icon: React.ComponentType<any>,
  x: number,
  y: number,
  duration: number,
  delay?: number
}) => (
  <motion.div
    className="absolute opacity-20"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.3, 0],
      scale: [0, 1, 0],
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 15, 0]
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  >
    <Icon className="w-6 h-6 text-white/40" />
  </motion.div>
);

const FlyingObject = ({
  children,
  startX,
  endX,
  y,
  duration,
  delay = 0,
  wobble = false
}: {
  children: import('react').ReactNode,
  startX: number,
  endX: number,
  y: number,
  duration: number,
  delay?: number,
  wobble?: boolean
}) => (
  <motion.div
    className="absolute"
    style={{ top: `${y}%` }}
    initial={{ x: `${startX}%` }}
    animate={{
      x: `${endX}%`,
      ...(wobble && { y: [0, -10, 0, -5, 0] })
    }}
    transition={{
      x: { duration, repeat: Infinity, ease: "linear", delay },
      y: wobble ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}
    }}
  >
    {children}
  </motion.div>
);

const TwinklingStar = ({ x, y, delay, size = 1 }: {
  x: number,
  y: number,
  delay: number,
  size?: number
}) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`
    }}
    animate={{
      opacity: [0.2, 1, 0.2],
      scale: [0.5, 1.2, 0.5]
    }}
    transition={{
      duration: Math.random() * 2 + 1,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  />
);

const Bird = ({ startX, endX, y, delay }: {
  startX: number,
  endX: number,
  y: number,
  delay: number
}) => (
  <motion.div
    className="absolute"
    style={{ top: `${y}%` }}
    initial={{ x: `${startX}%` }}
    animate={{
      x: `${endX}%`,
      y: [0, -8, 0, -12, 0]
    }}
    transition={{
      x: { duration: 15, repeat: Infinity, ease: "linear", delay },
      y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }}
  >
    <motion.div
      animate={{ rotate: [0, 8, -8, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <svg width="16" height="12" viewBox="0 0 16 12" className="fill-white/40">
        <path d="M8 0c-2 2-4 3-8 3v1c4 0 6-1 8-3 2 2 4 3 8 3V3c-4 0-6-1-8-3z"/>
      </svg>
    </motion.div>
  </motion.div>
);

const FloatingCloud = ({ x, y, size, duration, delay }: {
  x: number,
  y: number,
  size: number,
  duration: number,
  delay: number
}) => (
  <motion.div
    className="absolute opacity-20"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      x: [0, 30, 0],
      y: [0, -15, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  >
    <div className="text-white/20" style={{ fontSize: `${size}rem` }}>☁️</div>
  </motion.div>
);

export default function EnhancedAnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Many more twinkling stars */}
      {Array.from({ length: 100 }, (_, i) => (
        <TwinklingStar
          key={`star-${i}`}
          x={Math.random() * 100}
          y={Math.random() * 70}
          delay={Math.random() * 3}
          size={Math.random() > 0.7 ? 2 : 1}
        />
      ))}

      {/* Tech Icons - More distributed */}
      <TechIcon icon={Github} x={15} y={20} duration={6} delay={0} />
      <TechIcon icon={Github} x={85} y={25} duration={7} delay={2} />
      <TechIcon icon={GitBranch} x={85} y={15} duration={5} delay={1} />
      <TechIcon icon={Cloud} x={10} y={50} duration={8} delay={0.5} />
      <TechIcon icon={CloudRain} x={90} y={45} duration={6} delay={1.5} />
      <TechIcon icon={Settings} x={25} y={60} duration={7} delay={2.5} />
      <TechIcon icon={Code} x={75} y={55} duration={5} delay={0.8} />
      <TechIcon icon={Database} x={65} y={35} duration={6} delay={1.8} />
      <TechIcon icon={Server} x={35} y={40} duration={8} delay={0.3} />
      <TechIcon icon={Cpu} x={55} y={65} duration={7} delay={2.2} />

      {/* Text-based tech icons */}
      <motion.div
        className="absolute opacity-20"
        style={{ left: '20%', top: '35%' }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-white/30 font-bold" style={{ fontSize: '0.75rem' }}>AWS</div>
      </motion.div>

      <motion.div
        className="absolute opacity-20"
        style={{ left: '75%', top: '25%' }}
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-white/30 font-bold" style={{ fontSize: '0.75rem' }}>GCP</div>
      </motion.div>

      <motion.div
        className="absolute opacity-20"
        style={{ left: '60%', top: '60%' }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, -2, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-white/30" style={{ fontSize: '1rem' }}>🐳</div>
      </motion.div>

      <motion.div
        className="absolute opacity-20"
        style={{ left: '40%', top: '25%' }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="text-white/30" style={{ fontSize: '0.875rem' }}>☸️</div>
      </motion.div>

      {/* Additional tech logos */}
      <motion.div
        className="absolute opacity-20"
        style={{ left: '30%', top: '55%' }}
        animate={{
          y: [0, -8, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-white/30 font-bold" style={{ fontSize: '0.75rem' }}>AZURE</div>
      </motion.div>

      <motion.div
        className="absolute opacity-20"
        style={{ left: '80%', top: '40%' }}
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-white/30 font-bold" style={{ fontSize: '0.75rem' }}>GITLAB</div>
      </motion.div>



      {/* Hot Air Balloons */}
      <motion.div
        className="absolute"
        style={{ left: '70%', top: '18%' }}
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-white/40" style={{ fontSize: '1.5rem' }}>🎈</div>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ left: '20%', top: '22%' }}
        animate={{
          y: [0, -20, 0],
          x: [0, -15, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      >
        <div className="text-white/35" style={{ fontSize: '1.25rem' }}>🎈</div>
      </motion.div>



      {/* More Birds in formation */}
      <div className='absolute' style={{ left: '30%', top: '26%' }} >
        <Bird startX={-20} endX={120} y={30} delay={0} />
      </div>
      <div className='absolute' style={{ left: '40%', top: '25%' }} >
        <Bird startX={-20} endX={120} y={30} delay={0} />
      </div>
      <div className='absolute' style={{ left: '40%', top: '74%' }} >
        <Bird startX={-20} endX={120} y={30} delay={0} />
      </div>
      <div className='absolute' style={{ left: '50.5%', top: '81%' }} >
        <Bird startX={-20} endX={120} y={30} delay={0} />
      </div>
      <div className='absolute' style={{ left: '60.5%', top: '68%' }} >
        <Bird startX={-20} endX={120} y={30} delay={0} />
      </div>
      <div className='absolute' style={{ left: '60%', top: '68%' }} >
        <Bird startX={-20} endX={120} y={30} delay={0} />
      </div>
      <div className='absolute' style={{ left: '60%', top: '40%' }} >
        <Bird startX={-20} endX={120} y={30} delay={0} />
      </div>
      <div className='absolute' style={{ left: '80%', top: '68%' }} >
        <Bird startX={-20} endX={120} y={30} delay={0} />
      </div>
      <div className='absolute' style={{ left: '75%', top: '60%' }} >
        <Bird startX={-20} endX={120} y={30} delay={0} />
      </div>
      <div className='absolute' style={{ left: '30%', top: '50%' }} >
        <Bird startX={-20} endX={120} y={30} delay={0} />
      </div>
      <div className='absolute' style={{ left: '90%', top: '19%' }} >
        <Bird startX={-20} endX={120} y={30} delay={0} />
      </div>


      {/* More Clouds */}
      <FloatingCloud x={25} y={8} size={2} duration={30} delay={0} />
      <FloatingCloud x={80} y={5} size={2.5} duration={35} delay={5} />
      <FloatingCloud x={50} y={12} size={3.8} duration={25} delay={10} />
      <FloatingCloud x={10} y={15} size={2.2} duration={28} delay={15} />
      <FloatingCloud x={90} y={18} size={4.5} duration={22} delay={8} />

      <FloatingCloud x={25} y={8} size={2} duration={30} delay={0} />
      <FloatingCloud x={80} y={5} size={2.5} duration={35} delay={5} />
      <FloatingCloud x={50} y={12} size={5.8} duration={25} delay={10} />
      <FloatingCloud x={10} y={15} size={2.2} duration={28} delay={15} />
      <FloatingCloud x={90} y={18} size={6.5} duration={22} delay={8} />
      <FloatingCloud x={25} y={8} size={2} duration={30} delay={0} />
      <FloatingCloud x={80} y={5} size={2.5} duration={35} delay={5} />
      <FloatingCloud x={50} y={12} size={4.8} duration={25} delay={10} />
      <FloatingCloud x={10} y={15} size={2.2} duration={28} delay={15} />
      <FloatingCloud x={90} y={18} size={1.5} duration={22} delay={8} />

      {/* Floating particles */}
      {Array.from({ length: 40 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}


      <div className='absolute' style={{ left: '60%', top: '28%' }} >
        {/* Additional flying objects */}
        <motion.div
          className="absolute"
          style={{ top: '55%' }}
          initial={{ y: '100%' }}
          animate={{ x: '120%' }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            delay: 7
          }}
        >
          <div className="text-white/30" style={{ fontSize: '1rem' }}>🛩️</div>
        </motion.div>

      </div>

      <div className='absolute' style={{ left: '80%', top: '15%' }} >
        <motion.div
          className="absolute"
          style={{ top: '55%' }}
          initial={{ x: '120%' }}
          animate={{ x: '-20%' }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 12
          }}
        >
          <div className="text-white/35" style={{ fontSize: '0.875rem' }}>✈️</div>
        </motion.div>

      </div>

      <div className='absolute' style={{ left: '68%', top: '75%' }} >
        <motion.div
          className="absolute"
          style={{ top: '55%' }}
          initial={{ x: '120%' }}
          animate={{ x: '-20%' }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 12
          }}
        >
          <div className="text-white/35" style={{ fontSize: '0.875rem' }}>🚁</div>
        </motion.div>

      </div>

    </div>
  );
}