import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <Image
              src="/drft-logo-trans.png"
              alt="DRFT Marketing"
              width={120}
              height={80}
              className="h-18 w-16"
            />
            <p className="text-gray-400 text-sm">
              Influencer marketing that delivers real results for brands across all industries.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Creator Sourcing
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Campaign Strategy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Content Creation
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Analytics & Reporting
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/clients" className="text-gray-400 hover:text-white text-sm transition-colors">
                Our Clients
              </Link>
              <Link href="/testimonials" className="text-gray-400 hover:text-white text-sm transition-colors">
                Testimonials
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Case Studies
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Ready to get started?</p>
              <Link
                href="https://calendly.com/noah-drftmarketing/30min?month=2025-07"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">© {currentYear} DRFT Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
