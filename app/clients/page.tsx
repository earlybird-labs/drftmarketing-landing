import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Our Clients | DRFT Marketing",
  description:
    "Trusted by 30+ brands across industries. See the companies that choose DRFT Marketing for their influencer campaigns.",
}

export default function ClientsPage() {
  const clients = [
    {
      name: "C4 Energy",
      industry: "Energy Drinks & Supplements",
      description: "Major retail campaigns including Walmart push and UGC creator initiatives",
      logo: "/c4-energy-logo.jpg",
      bgColor: "bg-[#FFE401]",
    },
    {
      name: "inDrive",
      industry: "Ride-sharing Technology",
      description: "Brand presence amplification in Miami market with strategic creator partnerships",
      logo: "/indrive-logo.jpeg",
      bgColor: "bg-[#C0F11C]",
    },
    // 🔄 Swapped: Vita Hustle now in place of 3rd-i
    {
      name: "Vita Hustle",
      industry: "Consumer Products",
      description: "National content creation with streamlined creator management",
      logo: "/VitaHustle.jpg",
      bgColor: "bg-white",
    },
    {
      name: "Zenjoy",
      industry: "Consumer Products",
      description: "National content creation with streamlined creator management",
      logo: "/zenjoy-logo.png",
      bgColor: "bg-white",
    },
    {
      name: "All Day",
      industry: "Consumer Products",
      description: "National content creation with streamlined creator management",
      logo: "/ALLDAY.jpg",
      bgColor: "bg-[#E4F35A]",
    },
    {
      name: "Cartolina",
      industry: "Clothing Boutique",
      description: "National content creation with streamlined creator management",
      logo: "/Cartolina.jpg",
      bgColor: "bg-white",
    },
    {
      name: "Crossed",
      industry: "Consumer Products",
      description: "National content creation with streamlined creator management",
      logo: "/Crossed.svg",
      bgColor: "bg-white",
    },
    {
      name: "Crunch Cup",
      industry: "Consumer Products",
      description: "National content creation with streamlined creator management",
      logo: "/CrunchCup.jpg",
      bgColor: "bg-white",
    },
    {
      name: "David Protein",
      industry: "Consumer Products",
      description: "National content creation with streamlined creator management",
      logo: "/DavidProtein.jpg",
      bgColor: "bg-white",
    },
    {
      name: "Future Beauty",
      industry: "Consumer Products",
      description: "National content creation with streamlined creator management",
      logo: "/FutureBeauty.png",
      bgColor: "bg-white",
    },
    {
      name: "Intea Cosmetics",
      industry: "Consumer Products",
      description: "National content creation with streamlined creator management",
      logo: "/InteaCosmetics.jpg",
      bgColor: "bg-white",
    },
    {
      name: "Link Me",
      industry: "Social Networking Platform",
      description: "National content creation with streamlined creator management",
      logo: "/LinkMe.jpg",
      bgColor: "bg-[#FFC26C]",
    },
    {
      name: "No Cap! Soda Pop",
      industry: "Consumer Products",
      description: "National content creation with streamlined creator management",
      logo: "/NoCapSodaPop.jpg",
      bgColor: "bg-white",
    },
    {
      name: "Pseudo Labs",
      industry: "Consumer Products",
      description: "National content creation with streamlined creator management",
      logo: "/PseudoLabs.png",
      bgColor: "bg-white",
    },
    {
      name: "Puppy Yoga Miami",
      industry: "Yoga Studio",
      description: "National content creation with streamlined creator management",
      logo: "/PuppyYogaMiami.jpg",
      bgColor: "bg-white",
    },
    {
      name: "Relia Bowls",
      industry: "Consumer Products",
      description: "National content creation with streamlined creator management",
      logo: "/ReliaBowls.jpg",
      bgColor: "bg-white",
    },
    {
      name: "Toska Spa & Facial Bar",
      industry: "Luxury Skincare Destination",
      description: "National content creation with streamlined creator management",
      logo: "/ToskaSpaFacialBar.jpg",
      bgColor: "bg-white",
    },
    // 🔄 Swapped: 3rd-i now in place of Vita Hustle
    {
      name: "3rd-i",
      industry: "Mobile App Technology",
      description: "College demographic targeting with high-converting creator content",
      logo: "/3rd-i.jpg",
      bgColor: "bg-[#000000]",
    },
    {
      name: "Wallmart",
      industry: "Retail Store",
      description: "National content creation with streamlined creator management",
      logo: "/Walmart.jpg",
      bgColor: "bg-white",
    },
    {
      name: "Whoa! Dough",
      industry: "Consumer Products",
      description: "National content creation with streamlined creator management",
      logo: "/WhoaDough.jpg",
      bgColor: "bg-[#E42B77]",
    },
    {
      name: "Zeya",
      industry: "Mobile App Technology",
      description: "National content creation with streamlined creator management",
      logo: "/Zeya.jpg",
      bgColor: "bg-white",
    },
  ];


  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by Industry Leaders</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We've partnered with 30+ brands across diverse industries, delivering results-driven influencer marketing
              campaigns that exceed expectations.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <p className="text-gray-400">Brands Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <p className="text-gray-400">Creator Network</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2M+</div>
              <p className="text-gray-400">Total Reach</p>
            </div>
          </div>

          {/* Client Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {clients.map((client, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className={`h-20 w-full flex items-center justify-center rounded-xl mb-4 ${client.bgColor}`}>
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={80}
                      height={45}
                      className="object-contain "
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-3">{client.industry}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Client Portfolio?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              See how DRFT Marketing can help your brand connect with the right creators and achieve measurable results
              through strategic influencer partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-lg font-semibold"
              >
                <Link href="https://calendly.com/noah-drftmarketing/30min?month=2025-07" target="_blank">
                  Schedule a Strategy Call
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 h-14 px-8 text-lg font-semibold bg-transparent"
              >
                <Link href="/testimonials">Read Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
