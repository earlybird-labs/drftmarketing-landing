"use client"

import { motion } from "framer-motion"
import { StatsIcon1, StatsIcon2, StatsIcon3, StatsIcon4 } from "./icon-library"

export default function StatsSection() {
  const stats = [
    {
      icon: <StatsIcon1 />,
      number: "500+",
      label: "Vetted Creators",
      description: "Across all niches",
    },
    {
      icon: <StatsIcon2 />,
      number: "30+",
      label: "Brand Partners",
      description: "Trusted relationships",
    },
    {
      icon: <StatsIcon3 />,
      number: "2M+",
      label: "Total Reach",
      description: "Organic impressions",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2  lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="relative mb-4"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300">
                  {stat.icon}
                </div>
              </motion.div>

              <motion.div
                className="text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.div>

              <h3 className="text-lg font-semibold text-slate-300 mb-1">{stat.label}</h3>
              <p className="text-sm text-slate-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
