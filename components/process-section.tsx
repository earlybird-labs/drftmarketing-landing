"use client"

import { motion } from "framer-motion"
import { ProcessIcon1, ProcessIcon2, ProcessIcon3 } from "./icon-library"

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We understand your brand, goals, and target audience",
      icon: <ProcessIcon1 />,
    },
    {
      number: "02",
      title: "Creator Matching",
      description: "We source and vet the perfect creators for your campaign",
      icon: <ProcessIcon2 />,
    },
    {
      number: "03",
      title: "Campaign Launch",
      description: "Seamless execution with real-time monitoring and optimization",
      icon: <ProcessIcon3 />,
    },
  ]

  return (
    <section className="py-32 bg-black">
      <div className="container px-4 md:px-6">
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
            Simple Process
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Three Steps to
            <span className="block h-fit pb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Campaign Success
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From first call to campaign success in three streamlined steps
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Unified connecting line */}
            <motion.div
              className="absolute top-16 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 opacity-20 hidden lg:block"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />

            <div className="space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <motion.div
                      className="inline-flex items-center gap-4 mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800">
                        {step.number}
                      </span>
                      <div className="p-3 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
                        {step.icon}
                      </div>
                    </motion.div>

                    <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Unified visual element */}
                  <motion.div
                    className="flex-1 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center">
                      <motion.div
                        className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center border border-blue-500/20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <div className="text-4xl scale-150">{step.icon}</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
