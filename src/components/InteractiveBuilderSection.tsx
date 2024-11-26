"use client";

import { motion, Variants } from "framer-motion";
import { AnimationVariants } from "@/types";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    y: 50,
    opacity: 0,
    rotateX: -50
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

interface GradientAnimationProps {
  backgroundPosition: string[];
  opacity: number[];
  transition: {
    duration: number;
    repeat: number | "Infinity";
    repeatType: "loop" | "reverse" | "mirror";
  };
}

const gradientAnimation: GradientAnimationProps = {
  backgroundPosition: ["0% 0%", "100% 100%"],
  opacity: [0.3, 0.5, 0.3],
  transition: {
    duration: 10,
    repeat: Infinity,
    repeatType: "reverse"
  }
};

export default function InteractiveBuilderSection(): JSX.Element {
  return (
    <section className="py-20 px-4 bg-black/[.02] dark:bg-white/[.02]">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          variants={itemVariants}
        >
          Experience the Power of LandingCraft in Action
        </motion.h2>
        
        <motion.p 
          className="text-xl text-center mb-16 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Try our interactive builder demo. Create, drag, and drop elements to see the magic unfold.
        </motion.p>

        <motion.div
          className="aspect-video bg-black/[.05] dark:bg-white/[.05] rounded-2xl overflow-hidden relative"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
            animate={gradientAnimation}
          />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <p className="text-lg text-gray-500">Interactive Builder Demo</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 