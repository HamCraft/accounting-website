"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <section className="pt-48">
      <footer className="bg-[#3EB7B1] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Taxsation</h3>
              <p className="text-white/90 mb-6">
                Professional accounting services for businesses and individuals. We provide expert financial guidance and
                personalized solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span>123 Accounting Street, Financial District, New York, NY 10004</span>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span>(972) 885-8655</span>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span>info@Taxsation.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 text-center md:text-left md:flex md:justify-between md:items-center text-lg">
            <p>© {new Date().getFullYear()} Taxsation. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Link
                href="https://www.texaswebart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white animate-glow hover:text-teal-100 transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] cursor-pointer relative"
              >
                Website designed by TexasWebArt
                <span className="absolute inset-0 border border-white/30 rounded-sm opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-100 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        @keyframes glow {
          0% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4);
          }
          100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}