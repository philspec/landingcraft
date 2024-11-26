"use client";

import { motion, Variants } from "framer-motion";

/**
 * Animation variants for the background gradient
 */
const backgroundVariants: Variants = {
  animate: {
    backgroundImage: [
      "radial-gradient(circle at 20% 30%, #4f46e5 0%, transparent 50%)",
      "radial-gradient(circle at 80% 70%, #4f46e5 0%, transparent 50%)",
    ],
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

/**
 * Animation variants for content elements
 */
const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut"
    }
  })
};

/**
 * Button hover animation variants
 */
const buttonVariants: Variants = {
  hover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 400 }
  },
  tap: { 
    scale: 0.95,
    transition: { type: "spring", stiffness: 400 }
  }
};

/**
 * HeroSection Component
 * 
 * Main landing section featuring headline, description, and CTA buttons
 * with animated background and content transitions
 */
export default function HeroSection(): JSX.Element {
  return (
    <section className="min-h-[100vh] py-32 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate="animate"
        variants={backgroundVariants}
      />

      <div className="mx-auto space-y-8 relative z-10">
        {/* Headline */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 leading-tight"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          custom={0}
        >
          Craft Landing Pages That Convert 🚀
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          custom={0.2}
        >
          Simplify your website goals with LandingCraft. 
          We create stunning, high-performance landing pages designed to grow your business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          custom={0.4}
        >
          {/* Primary CTA */}
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-full text-lg font-semibold shadow-lg shadow-indigo-500/25"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started Now
          </motion.button>
          
          {/* Secondary CTA */}
          <motion.button
            className="px-8 py-4 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-full text-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Explore Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 


