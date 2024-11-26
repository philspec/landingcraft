"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    x: -100,
    opacity: 0,
    skewX: -20
  },
  visible: {
    x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      type: "spring",
      bounce: 0.4
    }
  }
};

export default function ShowcaseSection() {
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
          Transform Ideas into Impactful Designs
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-16 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Our designs aren't just visually striking; they're strategically engineered to guide users towards action.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['SaaS', 'E-commerce', 'Portfolios', 'Events'].map((category, index) => (
            <motion.div
              key={category}

              className="aspect-video bg-black/[.05] dark:bg-white/[.05] rounded-lg p-6 flex items-center justify-center relative overflow-hidden"

              variants={itemVariants}

              whileHover={{ 

                scale: 1.05,

                transition: { type: "spring", stiffness: 300 }

              }}

            >

              <motion.div

                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"

                animate={{

                  scale: [1, 1.2, 1],

                  rotate: [0, 3, -3, 0]

                }}

                transition={{

                  duration: 5,

                  repeat: Infinity,

                  repeatType: "reverse"

                }}

              />

              <h3 className="text-xl font-semibold relative z-10">{category}</h3>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>

  );

} 
