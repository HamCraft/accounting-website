import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function HeroSection() {
  return (
    <section className="flex-1 bg-[#f5f8fa]">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">Your Financial Peace Starts Here</h1>
          <p className="text-gray-600 mb-8 max-w-md text-2xl">
            We offer services for business owners and individuals.
          </p>
          <Link href="#contact"><Button className="bg-[#3EB7B1] hover:bg-[#35a19c] text-white px-6 py-2 rounded">Free Consultation</Button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="flex justify-end">
            <Image
              src="/accountant.jpg"
              alt="Professional accountant"
              width={600}
              height={600}
              className="object-contain max-h-[500px] w-auto rounded-lg outline outline-3 outline-[#181e1e]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
