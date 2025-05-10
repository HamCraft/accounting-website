import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-[#3EB7B1] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">TrulyNest Accounting</h3>
            <p className="text-gray-600 mb-6">
              With over 20 years of experience, TrulyNest provides expert accounting services to businesses
              and individuals. Our team of certified professionals is dedicated to helping you achieve your financial
              goals.
            </p>
            <p className="text-gray-600 mb-6">
              We believe in building long-term relationships with our clients based on trust, reliability, and
              exceptional service. Our personalized approach ensures that we understand your unique needs and provide
              tailored solutions.
            </p>
            {/* <Button className="bg-[#3EB7B1] hover:bg-[#35a19c] text-white">Learn More</Button> */}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3EB7B1] text-4xl font-bold mb-2">20+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3EB7B1] text-4xl font-bold mb-2">500+</div>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3EB7B1] text-4xl font-bold mb-2">15</div>
              <p className="text-gray-600">Expert Accountants</p>
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
