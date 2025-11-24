"use client"

import { motion } from "framer-motion"
import { CreatorIcon, StrategyIcon, AnalyticsIcon, ContentIcon } from "./icon-library"

export default function ServicesSection() {
  const services = [
    {
      icon: <CreatorIcon />,
      title: "Creator Network",
      subtitle: "500+ Vetted Influencers",
      description: "Curated network of authentic creators across every niche and demographic",
      stats: "500+",
    },
   {
    icon: <StrategyIcon />,
    title: "Strategic Planning",
    subtitle: "Custom Tailored Strategies",
    description: "Custom tailored strategies built to match your brand’s goals and voice",
    stats: "400+",
  },
    {
      icon: <AnalyticsIcon />,
      title: "Performance Analytics",
      subtitle: "Real-Time Insights",
      description: "Comprehensive tracking with detailed metrics on reach, engagement, and conversions",
      stats: "2M+",
    },
    {
      icon: <ContentIcon />,
      title: "Content Creation",
      subtitle: "Authentic & Converting",
      description: "High-quality UGC and brand storytelling that drives engagement and results",
      stats: "30+",
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block rounded-full bg-blue-500/10 px-6 py-2 text-sm text-blue-400 mb-6 border border-blue-500/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            Our Approach
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Drive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Exceptional Results
            </span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="flex flex-col items-center text-center space-y-6"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Icon with unified styling */}
                  <motion.div
                    className="relative"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    <motion.div
                      className="p-4 rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-500/30 transition-all duration-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Unified stats badge */}
                    <motion.div
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    >
                      {service.stats}
                    </motion.div>
                  </motion.div>

                  <div className="space-y-3">
                    <motion.p
                      className="text-sm font-medium text-blue-400 tracking-wide uppercase"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {service.subtitle}
                    </motion.p>

                    <motion.h3
                      className="text-2xl font-bold text-white group-hover:text-blue-300 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      className="text-slate-400 text-lg leading-relaxed max-w-sm group-hover:text-slate-300 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Unified connecting line */}
                  <motion.div
                    className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
