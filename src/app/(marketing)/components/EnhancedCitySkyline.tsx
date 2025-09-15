import { motion, useReducedMotion } from 'framer-motion';
import React, { useEffect, useState, memo, useMemo } from 'react';

const EnhancedCitySkyline = memo(() => {
  const shouldReduceMotion = useReducedMotion();
  
  const buildings = useMemo(() => [
    { height: 120, width: 25, delay: 0, windows: 8 },
    { height: 180, width: 30, delay: 0.1, windows: 12, antenna: true },
    { height: 90, width: 35, delay: 0.2, windows: 6 },
    { height: 150, width: 28, delay: 0.3, windows: 10 },
    { height: 200, width: 32, delay: 0.4, windows: 15, antenna: true },
    { height: 110, width: 26, delay: 0.5, windows: 7 },
    { height: 160, width: 34, delay: 0.6, windows: 11 },
    { height: 130, width: 29, delay: 0.7, windows: 9 },
    { height: 190, width: 31, delay: 0.8, windows: 14, antenna: true },
    { height: 140, width: 27, delay: 0.9, windows: 10 },
    { height: 100, width: 33, delay: 1.0, windows: 7 },
    { height: 170, width: 30, delay: 1.1, windows: 12 },
    { height: 155, width: 28, delay: 1.2, windows: 11, antenna: true },
    { height: 95, width: 32, delay: 1.3, windows: 6 },
    { height: 185, width: 29, delay: 1.4, windows: 13 },
    { height: 125, width: 31, delay: 1.5, windows: 8 },
    { height: 145, width: 26, delay: 1.6, windows: 10 },
    { height: 165, width: 35, delay: 1.7, windows: 12 },
    { height: 115, width: 28, delay: 1.8, windows: 8 },
    { height: 175, width: 30, delay: 1.9, windows: 13, antenna: true },
    { height: 105, width: 27, delay: 2.0, windows: 7 },
    { height: 195, width: 33, delay: 2.1, windows: 15 },
    { height: 135, width: 29, delay: 2.2, windows: 9 },
    { height: 85, width: 31, delay: 2.3, windows: 6 },
    { height: 155, width: 28, delay: 2.4, windows: 11 },
  ], []);

  const clouds = useMemo(() => [
    { x: 15, y: -10, size: 1.5, delay: 0 },
    { x: 40, y: -15, size: 2, delay: 2 },
    { x: 65, y: -8, size: 1.8, delay: 4 },
    { x: 85, y: -12, size: 1.6, delay: 1 },
  ], []);

  return (
    <div className="absolute bottom-0 left-0 right-0 z-20">
      {/* Clouds above skyline */}
      {clouds.map((cloud, index) => (
        <motion.div
          key={`cloud-${index}`}
          className="absolute opacity-30"
          style={{
            left: `${cloud.x}%`,
            bottom: `${200 + cloud.y}px`,
            fontSize: `${cloud.size}rem`
          }}
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0 }}
          animate={shouldReduceMotion ? {
            opacity: 0.25
          } : {
            opacity: [0, 0.3, 0.2],
            scale: [0, 1, 1.1],
            x: [0, 20, 0]
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 20,
            repeat: Infinity,
            delay: cloud.delay,
            ease: "easeInOut"
          }}
        >
          <div className="text-white/20">☁️</div>
        </motion.div>
      ))}

      {/* Main cloud in center */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2"
        style={{ bottom: '220px' }}
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0 }}
        animate={shouldReduceMotion ? {
          opacity: 0.7
        } : {
          opacity: [0, 0.8, 0.6],
          scale: [0, 1.2, 1],
        }}
        transition={shouldReduceMotion ? {} : {
          duration: 3,
          delay: 1
        }}
      >
        <motion.div
          animate={shouldReduceMotion ? {} : {
            filter: [
              "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
              "drop-shadow(0 0 20px rgba(255,255,255,0.6))",
              "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
            ]
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="120" height="60" viewBox="0 0 120 60" className="opacity-80">
            <motion.path
              d="M20 40 Q20 20 40 20 Q50 10 65 20 Q75 15 85 20 Q105 20 105 40 Q105 50 95 50 L25 50 Q20 50 20 40"
              fill="rgba(255,255,255,0.4)"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1"
              initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={shouldReduceMotion ? {} : { duration: 2, delay: 1.5 }}
            />
            {/* Grid pattern inside cloud */}
            <defs>
              <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 4 0 L 0 0 0 4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <path
              d="M20 40 Q20 20 40 20 Q50 10 65 20 Q75 15 85 20 Q105 20 105 40 Q105 50 95 50 L25 50 Q20 50 20 40"
              fill="url(#grid)"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Buildings */}
      <div className="flex items-end justify-center w-full">
        {buildings.map((building, index) => (
          <motion.div
            key={index}
            initial={{ height: shouldReduceMotion ? building.height : 0, opacity: shouldReduceMotion ? 0.7 : 0 }}
            animate={{ height: building.height, opacity: 0.7 }}
            transition={shouldReduceMotion ? {} : {
              duration: 1.2,
              delay: building.delay,
              ease: "easeOut"
            }}
            className="bg-gradient-to-t from-white/30 to-white/10 backdrop-blur-sm border-l border-white/20 relative"
            style={{
              width: building.width,
              minHeight: building.height
            }}
          >
            {/* Building windows */}
            <div className="absolute inset-1 grid grid-cols-3 gap-1 pt-2">
              {Array.from({ length: building.windows * 3 }, (_, i) => (
                <motion.div
                  key={i}
                  className="bg-yellow-300/70 w-1.5 h-1.5 rounded-sm"
                 animate={shouldReduceMotion ? {} : {
                   opacity: [0.4, 1, 0.4]
                 }}
                 transition={shouldReduceMotion ? {} : {
                   duration: Math.random() * 4 + 2,
                   repeat: Infinity,
                   delay: Math.random() * 3
                 }}
                />
              ))}
            </div>

            {/* Antenna or rooftop elements */}
            {building.antenna && (
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-white/60"
                initial={{ height: shouldReduceMotion ? 24 : 0 }}
                animate={{ height: 24 }}
                transition={shouldReduceMotion ? {} : { delay: building.delay + 1 }}
              >
                <motion.div
                  className="absolute -top-1 w-2 h-2 bg-red-400 rounded-full left-1/2 transform -translate-x-1/2"
                  animate={shouldReduceMotion ? {} : {
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={shouldReduceMotion ? {} : {
                    duration: 2,
                    repeat: Infinity,
                    delay: building.delay + 1.5
                  }}
                />
              </motion.div>
            )}

            {/* Rooftop details */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/40" />
          </motion.div>
        ))}
      </div>

      {/* Ground reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/20 to-transparent" />

      {/* Additional floating elements above city */}
      {Array.from({ length: shouldReduceMotion ? 5 : 15 }, (_, i) => (
        <motion.div
          key={`city-particle-${i}`}
          className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 100 + 100}px`,
          }}
          animate={shouldReduceMotion ? {} : {
            y: [0, -50, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={shouldReduceMotion ? {} : {
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
});

EnhancedCitySkyline.displayName = 'EnhancedCitySkyline';

export default EnhancedCitySkyline;