"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Scale Your Brand with Influencer Marketing?
          </motion.h2>

          <motion.p
            className="text-xl text-slate-400 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join 30+ brands who trust DRFT Marketing to deliver results. Book a free strategy call and discover how we
            can amplify your brand presence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 h-14 px-8 text-lg font-semibold relative overflow-hidden group"
              >
                <Link href="https://calendly.com/noah-drftmarketing/30min?month=2025-07" target="_blank">
                  <motion.div
                    className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <Calendar className="h-5 w-5 mr-2 relative z-10" />
                  <span className="relative z-10">Schedule Your Free Call</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-blue-400 hover:border-blue-400 h-14 px-8 text-lg font-semibold bg-transparent transition-all duration-300"
              >
                <Link href="/testimonials">
                  View Success Stories
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-slate-500 text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            style={{ animationDuration: "2s", animationIterationCount: "infinite" }}
          >
            No commitment required • 30-minute consultation • Immediate insights
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
