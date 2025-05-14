import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <section className="pt-48 ">
    <footer className="bg-[#3EB7B1] text-white py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Taxsation</h3>
            <p className="text-white/90 mb-6">
              Professional accounting services for businesses and individuals. We provide expert financial guidance and
              personalized solutions.
            </p>
            {/* <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
            </div> */}
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

        <div className="pt-8 border-t border-white/20 text-center md:text-left md:flex md:justify-center md:items-center">
          <p>© {new Date().getFullYear()} Taxsation. All rights reserved.</p>
          {/* <div className="mt-4 md:mt-0">
            <Link href="/privacy" className="hover:underline mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
    </section>
  )
}
