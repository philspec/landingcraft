"use client";
import { motion } from "framer-motion";
import { ComparisonItem } from "@/types";

const comparisonData: ComparisonItem[] = [
  {
    feature: "Page Load Speed",
    landingcraft: "0.8s",
    competitorA: "2.3s",
    competitorB: "1.9s"
  },
  {
    feature: "Custom Animations",
    landingcraft: "✓",
    competitorA: "✗",
    competitorB: "✓"
  },
  {
    feature: "A/B Testing",
    landingcraft: "✓",
    competitorA: "✓",
    competitorB: "✗"
  },
  {
    feature: "24/7 Support",
    landingcraft: "✓",
    competitorA: "✗",
    competitorB: "✗"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const rowVariants = {
  hidden: { 
    x: -50,
    opacity: 0,
    rotateX: 45
  },
  visible: {
    x: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function ComparisonSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-indigo-50/30 to-white dark:from-gray-900 dark:via-indigo-900/10 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          See How We Stack Up Against the Competition
        </motion.h2>

        <motion.div
          className="mt-12 overflow-x-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <motion.tr variants={rowVariants} className="border-b border-indigo-100 dark:border-indigo-900/50">
                <th className="p-4 text-left font-semibold text-indigo-900 dark:text-indigo-300">Feature</th>
                <th className="p-4 text-left font-semibold text-indigo-900 dark:text-indigo-300">LandingCraft</th>
                <th className="p-4 text-left font-semibold text-gray-600 dark:text-gray-400">Competitor A</th>
                <th className="p-4 text-left font-semibold text-gray-600 dark:text-gray-400">Competitor B</th>
              </motion.tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <motion.tr
                  key={row.feature}
                  variants={rowVariants}
                  className="border-b border-indigo-50 dark:border-indigo-900/30"
                >
                  <td className="p-4 text-gray-700 dark:text-gray-300">{row.feature}</td>
                  <td className="p-4 font-semibold text-indigo-600 dark:text-indigo-400">{row.landingcraft}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">{row.competitorA}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">{row.competitorB}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
} 
