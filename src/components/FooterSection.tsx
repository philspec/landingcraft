"use client";

import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" }
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Community", href: "#" }
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
    { name: "Status", href: "#" }
  ]
};

const socialIcons = [
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function FooterSection() {
  return (
    <footer className="bg-black/[.02] dark:bg-white/[.02] border-t border-black/[.05] dark:border-white/[.05]">
      <motion.div
        className="max-w-6xl mx-auto py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold">LandingCraft</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Craft beautiful, high-converting landing pages in minutes.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: {
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold capitalize">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-black/[.05] dark:border-white/[.05]"
        >
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h4>
            <div className="flex gap-2">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-black/[.05] border border-black/[.05] dark:border-white/[.05] focus:outline-none focus:ring-2 focus:ring-purple-500"
                whileFocus={{ scale: 1.01 }}
              />
              <motion.button
                className="px-6 py-2 bg-foreground text-background rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-black/[.05] dark:border-white/[.05] text-center text-gray-600 dark:text-gray-400"
        >
          <p>© 2024 LandingCraft. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
} 