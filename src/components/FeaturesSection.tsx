"use client";
import { motion } from "framer-motion";
import { Feature } from "@/types";

const features: Feature[] = [
  {
    title: "Performance-Driven Design",
    description: "Fast, lightweight, and mobile-optimized landing pages.",
    icon: "⚡"
  },
  {
    title: "Custom Animations",
    description: "Seamless and responsive Framer Motion effects to engage your users.",
    icon: "✨"
  },
  {
    title: "Conversion Focus",
    description: "Analytics, A/B testing, and forms designed for results.",
    icon: "📈"
  },
  {
    title: "Easy Collaboration",
    description: "Real-time collaboration to build landing pages with your team.",
    icon: "🤝"
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function FeaturesSection(): JSX.Element {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-indigo-50/50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why Choose LandingCraft?
        </motion.h2>
        
        <motion.p
          className="text-xl text-center mb-16 max-w-3xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Empowering your business with the right tools.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900 flex flex-col items-start shadow-lg shadow-indigo-100/20 dark:shadow-none"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-4xl mb-4 p-3 rounded-full bg-indigo-50 dark:bg-indigo-900/50">
                {feature.icon}
              </span>
              <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
