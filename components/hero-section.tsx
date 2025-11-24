"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Building, TrendingUp } from "lucide-react"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="container px-4 md:px-6 py-16 md:py-20 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-block rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400 mb-6 border border-blue-600/30"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Trusted by 30+ Brands
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white"
            variants={itemVariants}
          >
            Influencer Marketing
            <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              That Delivers
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Connect with authentic creators who drive real results. From strategy to execution, we deliver campaigns
            that exceed your goals and amplify your brand presence.
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-2xl"
            variants={containerVariants}
          >
            {[
              { icon: Users, number: "500+", label: "Influencers", color: "text-blue-400" },
              { icon: Building, number: "30+", label: "Brands", color: "text-purple-400" },
              { icon: TrendingUp, number: "2M+", label: "Reach", color: "text-green-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={statsVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className={`h-6 w-6 ${stat.color} mr-2`} />
                  <motion.span
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.span>
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 w-full max-w-md" variants={itemVariants}>
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                asChild
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-semibold relative overflow-hidden group"
              >
                <Link href="https://calendly.com/noah-drftmarketing/30min?month=2025-07" target="_blank">
                  <motion.div
                    className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                  <Calendar className="h-5 w-5 mr-2 relative z-10" />
                  <span className="relative z-10">Book Your Strategy Call</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 h-14 text-lg font-semibold bg-transparent hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                <Link href="/testimonials">View Case Studies</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-sm text-gray-500 mt-6"
            variants={itemVariants}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            30-minute strategy session • No commitment required
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
