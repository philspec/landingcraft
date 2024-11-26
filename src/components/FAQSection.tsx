"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to create a landing page?",
    answer: "With LandingCraft, you can create a professional landing page in minutes. Our drag-and-drop builder and pre-built templates make the process quick and efficient."
  },
  {
    question: "Can I use my own domain?",
    answer: "Yes! You can easily connect your own domain to your landing pages. We provide simple instructions for domain configuration and SSL setup."
  },
  {
    question: "What integrations are available?",
    answer: "We integrate with popular tools including Mailchimp, Google Analytics, Zapier, and more. Our Pro and Enterprise plans offer additional custom integration options."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to start exploring our features."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    x: -20,
    scaleX: 0.9
  },
  visible: {
    opacity: 1,
    x: 0,
    scaleX: 1,
    transition: {
      type: "spring",
      bounce: 0.4
    }
  }
};

const contentVariants = {
  hidden: { 
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.3
      },
      opacity: {
        duration: 0.2
      }
    }
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.3
      },
      opacity: {
        duration: 0.3,
        delay: 0.1
      }
    }
  }
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="mt-12 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={itemVariants}
              className="border border-black/[.05] dark:border-white/[.05] rounded-lg overflow-hidden"
            >
              <motion.button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
              >
                <span className="font-semibold">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ type: "spring", bounce: 0.3 }}
                  className="text-xl opacity-60"
                >
                  ↓
                </motion.span>
              </motion.button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden"
                  >
                    <motion.div 
                      className="p-6 pt-0 text-gray-600 dark:text-gray-400"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 