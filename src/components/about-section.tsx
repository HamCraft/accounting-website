import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="pt-48 pb-5  w-full  bg-gray-50 " id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-[#3EB7B1] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Taxsation Accounting</h3>
            <p className="text-gray-600 mb-6">
              Most accounting companies charge premium fees—not because your taxes are complex, but because their business is.

              You’re paying for their downtown offices, bloated staff, and fancy coffee machines… not for better service.

              At Taxsation, we do things differently.

              We’re a lean, transparent, and experienced accounting firm focused on what actually matters: saving you money, keeping you compliant, and giving you peace of mind.

              No fluff. No surprise fees. Just personal attention and results that speak for themselves.

              Let’s make tax season stress-free.
              Call or message Taxsation now for your free consultation.

              Your money deserves smarter handling—not higher markups.
            </p>
            
            {/* <Button className="bg-[#3EB7B1] hover:bg-[#35a19c] text-white">Learn More</Button> */}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3EB7B1] text-4xl font-bold mb-2">10+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3EB7B1] text-4xl font-bold mb-2">500+</div>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3EB7B1] text-4xl font-bold mb-2">100+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3EB7B1] text-4xl font-bold mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
