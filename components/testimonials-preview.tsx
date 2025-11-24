"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export default function TestimonialsPreview() {
  const testimonials = [
    {
      company: "C4 Energy",
      author: "Emily Bragg",
      role: "Influencer Marketing",
      content:
        "DRFT was an incredible partner on two major C4 campaigns. They exceeded view goals, over-delivered on content, and sourced creators who were a perfect fit for our brand.",
      rating: 5,
      logo: "C4",
    },
    {
      company: "inDrive",
      author: "Eddy Velázquez",
      role: "Business Development Director",
      content:
        "Their strategic vision, energy, and innovative approach have been instrumental in amplifying our brand presence. DRFT's commitment to excellence perfectly aligns with our mission.",
      rating: 5,
      logo: "iD",
    },
    {
      company: "3rd-i",
      author: "Dillon Abend",
      role: "CEO & Founder",
      content:
        "Partnering with DRFT Marketing has been a game-changer. Their ability to tap into the college demographic through authentic creators helped us build genuine engagement.",
      rating: 5,
      logo: "3i",
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      {/* Unified floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-blue-600/5 rounded-full blur-xl"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

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
            Client Success Stories
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Industry Leaders
            </span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="relative p-8 rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 h-full"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Unified company logo badge */}
                  <motion.div
                    className="absolute -top-4 left-8 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-sm shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    {testimonial.logo}
                  </motion.div>

                  {/* Unified quote icon */}
                  <motion.div
                    className="mb-6 mt-4"
                    initial={{ opacity: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Quote className="h-8 w-8 text-slate-600" />
                  </motion.div>

                  {/* Unified stars */}
                  <motion.div
                    className="flex mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1 + index * 0.1 }}
                      >
                        <Star className="h-5 w-5 fill-blue-400 text-blue-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Content */}
                  <motion.p
                    className="text-slate-300 text-lg leading-relaxed mb-8 group-hover:text-slate-200 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    "{testimonial.content}"
                  </motion.p>

                  {/* Author */}
                  <motion.div
                    className="border-t border-slate-700/50 pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                    <p className="text-slate-400">{testimonial.role}</p>
                    <p className="font-medium text-blue-400">{testimonial.company}</p>
                  </motion.div>

                  {/* Unified glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    initial={false}
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
