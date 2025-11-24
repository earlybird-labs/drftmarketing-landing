"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      company: "C4 Energy",
      author: "Emily Bragg",
      role: "Influencer Marketing",
      content:
        "DRFT was an incredible partner on two major C4 campaigns, including our Walmart retail push and a UGC-style creator initiative. They exceeded view goals, over-delivered on content, and sourced creators who were a perfect fit for our brand. Noah and Thomas were fantastic to work with—responsive, hardworking, and completely aligned with our vision. Everything was seamless from start to finish, and the quality of content was consistently high. DRFT will definitely be a continued partner for future campaigns.",
      rating: 5,
      logo: "/c4-energy-logo.jpg",
      bgColor: "bg-[#FFE400]",
    },
    {
      company: "inDrive",
      author: "Eddy Velázquez",
      role: "Business Development Director, inDrive USA",
      content:
        "inDrive is thrilled to collaborate with DRFT Marketing, led by Noah Gaudet and Thomas Van Der Leegte, who have been nothing short of exceptional in driving our campaign forward. Their strategic vision, energy, and innovative approach have been instrumental in amplifying our brand presence in Miami. We value their ability to execute bold ideas with precision and are excited to see how this partnership continues to evolve. DRFT Marketing's commitment to excellence and creativity perfectly aligns with inDrive's mission to challenge the status quo and deliver meaningful experiences.",
      rating: 5,
      logo: "/indrive-logo.jpeg",
      bgColor: "bg-[#C0F11C]",
    },
    {
      company: "3rd-i",
      author: "Dillon Abend",
      role: "CEO & Founder",
      content:
        "Partnering with DRFT Marketing has been a game-changer for 3rd-i. Their ability to tap into the college demographic through authentic, high-performing creators helped us build genuine awareness and engagement around our app. From campaign strategy to execution, the DRFT team was incredibly proactive, communicative, and aligned with our goals. They understood our vision and delivered content that not only looked great—but converted. We're excited to continue building with them and can't wait to see how our second campaign goes.",
      rating: 5,
      logo: "/3rd-i.jpg",
      bgColor: "bg-[#000000]",
    },
    {
      company: "Zenjoy",
      author: "Daniel Osborne",
      role: "CEO & Founder",
      content:
        "DRFT helped us create content across the nation quickly and efficiently. No wasted time doing outreach. No wasted time following up with creators. Just shipping products and watching the videos uploaded to social media!",
      rating: 5,
      logo: "/zenjoy-logo.png",
      bgColor: "bg-[#FFFFFF]",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Real results from real partnerships</p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Testimonial Cards */}
          <div className="relative min-h-[650px] overflow-hidden mx-8 md:mx-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="min-h-full bg-black border border-gray-800 rounded-2xl p-8 md:p-12 flex flex-col justify-between">
                  {/* Company Logo */}
                  <div className="flex justify-center mb-8">
                    <div className={`h-16 w-40 relative rounded-lg p-3 ${testimonials[currentIndex].bgColor}`}>
                      <Image
                        src={testimonials[currentIndex].logo || "/placeholder.svg"}
                        alt={`${testimonials[currentIndex].company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-8">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 mx-1" />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex items-center mb-8 px-4 md:px-8">
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="text-center border-t border-gray-800 pt-8">
                    <p className="font-semibold text-white text-xl mb-2">{testimonials[currentIndex].author}</p>
                    <p className="text-gray-400 mb-2 text-lg">{testimonials[currentIndex].role}</p>
                    <p className="font-medium text-gray-300 text-lg">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white" : "bg-gray-600 hover:bg-gray-500"
                  }`}
              />
            ))}
          </div>

          {/* Simple counter */}
          <p className="text-center text-gray-500 text-sm mt-4">
            {currentIndex + 1} of {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  )
}
