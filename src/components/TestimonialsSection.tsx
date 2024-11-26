"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "LandingCraft transformed our online presence. The pages are not just beautiful, they convert!",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    rating: 5,
    image: "/testimonials/sarah.jpg"
  },
  {
    quote: "The easiest landing page builder I've ever used. Results were immediate.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    rating: 5,
    image: "/testimonials/michael.jpg"
  },
  {
    quote: "Outstanding support team and incredible features. Worth every penny!",
    author: "Emma Davis",
    role: "Founder, CreativeHub",
    rating: 5,
    image: "/testimonials/emma.jpg"
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
    opacity: 0,
    scale: 0.8,
    rotateY: 45
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          variants={cardVariants}
        >
          <span>What Our Clients Say</span>
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-16 max-w-3xl mx-auto"
          variants={cardVariants}
        >
          <span>Trusted by businesses worldwide to craft their perfect landing pages.</span>
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-100/20 dark:shadow-none"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: {
                  type: "spring",
                  stiffness: 300
                }
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <div>
                  <h3 className="font-semibold"><span>{testimonial.author}</span></h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><span>{testimonial.role}</span></p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4"><span>&ldquo;{testimonial.quote}&rdquo;</span></p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span 
                    key={i} 
                    className="text-yellow-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span>★</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}