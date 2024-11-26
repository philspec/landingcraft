"use client";
import { motion, Variants } from "framer-motion";

const buttonVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 400 }
  },
  tap: { scale: 0.95 }
};

export default function CTASection(): JSX.Element {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-700 dark:from-indigo-900 dark:to-violet-900">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundImage: [
            "radial-gradient(circle at 20% 30%, white 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, white 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8 text-white"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <span>Ready to Craft Your Perfect Landing Page?</span>
          </motion.h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-white text-indigo-600 rounded-full text-lg font-semibold shadow-lg shadow-black/20"
              variants={buttonVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                  opacity: [0, 0.2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <span className="relative z-10">Get Started Now</span>
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border border-white text-white rounded-full text-lg font-semibold"
              variants={buttonVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true }}
            >
              <span>Talk to an Expert</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
