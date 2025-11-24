"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Calendar } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Clients", href: "/clients" },
    { label: "Testimonials", href: "/testimonials" },
  ]

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled
        ? "border-gray-800 bg-black/95 backdrop-blur-md shadow-lg"
        : "border-gray-800/50 bg-black/80 backdrop-blur-sm"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container flex h-20 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/" className="flex items-center space-x-2" aria-label="DRFT Marketing Homepage">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Image
                src="/drft-logo-trans.png"
                alt="DRFT Marketing"
                width={120}
                height={80}
                className="h-18 w-32"
              />
            </motion.div>
          </Link>
        </motion.div>

        <motion.nav
          className="hidden md:flex gap-6"
          aria-label="Main Navigation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {navItems.map((item, index) => (
            <motion.div key={index} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white relative group"
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white relative overflow-hidden group"
            >
              <Link href="https://calendly.com/noah-drftmarketing/30min?month=2025-07" target="_blank">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <Calendar className="h-4 w-4 relative z-10" />
                <span className="relative z-10">Book a Call</span>
              </Link>
            </Button>
          </motion.div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="icon" className="border-gray-700 bg-transparent">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-gray-800">
              <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile Navigation">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-gray-300 transition-colors hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="https://calendly.com/noah-drftmarketing/30min?month=2025-07" target="_blank">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book a Call
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
