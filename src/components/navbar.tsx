"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`bg-white py-4 px-4 border-b sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1">
          <div className="flex items-center">
            <Image
            src={"/logo_2.png"}
            alt="Logo"
            width={120}
            height={150}
            priority
            />
            {/* <div className="grid place-items-center w-8 h-8">
              <div className="w-6 h-6 bg-[#3EB7B1] grid grid-cols-3 gap-[2px]">
                {Array(9)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="w-[5px] h-[5px] bg-white opacity-70"></div>
                  ))}
              </div>
            </div> */}
            {/* <span className="font-semibold text-gray-800 ml-2 text-3xl">Taxation</span> */}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-xl">
          <Link href="/" className="font-medium relative group">
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2a7c78] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link href="#about" className="font-medium relative group">
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2a7c78] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link href="#contact" className="font-medium relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2a7c78] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-11 w-11" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <div className="flex flex-col gap-6 mt-10">
              <Link href="/" className="font-medium text-lg relative group" onClick={() => setIsOpen(false)}>
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2a7c78] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
              <Link href="#about" className="font-medium text-lg relative group" onClick={() => setIsOpen(false)}>
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2a7c78] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
              <Link href="#contact" className="font-medium text-lg relative group" onClick={() => setIsOpen(false)}>
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2a7c78] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
