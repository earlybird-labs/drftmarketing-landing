import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Client Testimonials | DRFT Marketing",
  description: "Read what our clients say about working with DRFT Marketing. Real results from real brands.",
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      company: "C4 Energy",
      author: "Emily Bragg",
      role: "Influencer Marketing",
      content:
        "DRFT was an incredible partner on two major C4 campaigns, including our Walmart retail push and a UGC-style creator initiative. They exceeded view goals, over-delivered on content, and sourced creators who were a perfect fit for our brand. Noah and Thomas were fantastic to work with—responsive, hardworking, and completely aligned with our vision. Everything was seamless from start to finish, and the quality of content was consistently high. DRFT will definitely be a continued partner for future campaigns.",
      rating: 5,
      results: [
        "1,000,000+ Views",
        "400+ Posts",
        "UGC Content, Retail Pushes (Walmart), and Location Specific Campaign (NYC)",
      ],
    },
    {
      company: "inDrive",
      author: "Eddy Velázquez",
      role: "Business Development Director, inDrive USA",
      content:
        "inDrive is thrilled to collaborate with DRFT Marketing, led by Noah Gaudet and Thomas Van Der Leegte, who have been nothing short of exceptional in driving our campaign forward. Their strategic vision, energy, and innovative approach have been instrumental in amplifying our brand presence in Miami. We value their ability to execute bold ideas with precision and are excited to see how this partnership continues to evolve. DRFT Marketing's commitment to excellence and creativity perfectly aligns with inDrive's mission to challenge the status quo and deliver meaningful experiences.",
      rating: 5,
      results: [
        "400,000+ Views",
        "30+ Creators at the University of Miami",
        "Week over week increase in downloads and rideshare",
      ],
    },
    {
      company: "Zenjoy",
      author: "Daniel Osborne",
      role: "CEO & Founder",
      content:
        "DRFT helped us create content across the nation quickly and efficiently. No wasted time doing outreach. No wasted time following up with creators. Just shipping products and watching the videos uploaded to social media!",
      rating: 5,
      results: [
        "40+ Posts",
        "2 week turnaround time",
      ],
    },
    {
      company: "3rd-i",
      author: "Dillon Abend",
      role: "CEO & Founder",
      content:
        "Partnering with DRFT Marketing has been a game-changer for 3rd-i. Their ability to tap into the college demographic through authentic, high-performing creators helped us build genuine awareness and engagement around our app. From campaign strategy to execution, the DRFT team was incredibly proactive, communicative, and aligned with our goals. They understood our vision and delivered content that not only looked great—but converted. We're excited to continue building with them and can't wait to see how our second campaign goes.",
      rating: 5,
      results: [
        "80,000+ Views",
        "40+ Posts",
        "Rights to all content",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Success Stories</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. See what industry leaders say about working with DRFT Marketing and the
              results we've delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Quote className="h-8 w-8 text-blue-400 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {testimonial.results.map((result, i) => (
                        <li key={i} className="text-green-400 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-800 pt-6">
                    <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                    <p className="text-blue-400 font-medium text-lg">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Book a free strategy call and discover how DRFT Marketing can help your brand achieve similar results.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-lg font-semibold"
            >
              <Link href="https://calendly.com/noah-drftmarketing/30min?month=2025-07" target="_blank">
                Schedule Your Strategy Call
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
