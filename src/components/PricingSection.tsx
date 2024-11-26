"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for individuals",
    features: [
      "1 Landing Page",
      "Basic Analytics",
      "Standard Templates",
      "Email Support"
    ]
  },
  {
    name: "Pro",
    price: "$49",
    description: "Ideal for growing businesses",
    features: [
      "Unlimited Landing Pages",
      "Advanced Analytics",
      "Premium Templates",
      "Priority Support",
      "A/B Testing"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For high-performance teams",
    features: [
      "Everything in Pro",
      "Custom Templates",
      "Dedicated Support",
      "Team Collaboration",
      "Custom Integrations"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    y: 50,
    opacity: 0,
    scale: 0.8,
    rotateZ: -2
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function PricingSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Simple and Transparent Pricing</span>
        </motion.h2>
        
        <motion.p
          className="text-xl text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span>Plans tailored to your business needs.</span>
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className="p-8 rounded-2xl bg-black/[.02] dark:bg-white/[.02] flex flex-col"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                rotateZ: 1,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <h3 className="text-2xl font-bold mb-2"><span>{plan.name}</span></h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
              </div>
              <p className="text-gray-600 mb-6"><span>{plan.description}</span></p>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                className="w-full py-3 rounded-full bg-foreground text-background font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Choose Plan</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 