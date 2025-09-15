"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

interface AnimationContainerProps {
    children: React.ReactNode;
    delay?: number;
    reverse?: boolean;
    className?: string;
};

const AnimationContainer = ({ children, className, reverse, delay }: AnimationContainerProps) => {
    const shouldReduceMotion = useReducedMotion();
    
    const variants = useMemo(() => ({
        initial: { opacity: 0, y: shouldReduceMotion ? 0 : (reverse ? -20 : 20) },
        animate: { opacity: 1, y: 0 }
    }), [reverse, shouldReduceMotion]);

    const transition = useMemo(() => ({
        duration: shouldReduceMotion ? 0 : 0.2,
        delay: shouldReduceMotion ? 0 : delay,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 260,
        damping: 20
    }), [delay, shouldReduceMotion]);

    return (
        <motion.div
            className={className}
            initial={variants.initial}
            whileInView={variants.animate}
            viewport={{ once: false }}
            transition={transition}
        >
            {children}
        </motion.div>
    )
};

export default AnimationContainer