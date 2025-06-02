import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taxsation",
    "url": "https://taxsation.com",
    "logo": "https://taxsation.com/logo.png",
    "description": "Taxsation offers expert tax preparation, bookkeeping, and accounting services for individuals and businesses.",
  };

  return (
    <section className="pt-48 pb-5 w-full bg-gray-50" id="about">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-[#3EB7B1] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Taxsation Accounting</h3>
            <p className="text-gray-600 mb-4">
              Most accounting firms charge high fees for bloated overhead—not better service. At Taxsation, we’re
              different.
            </p>
            <p className="text-gray-600 mb-4">
              We’re a lean, transparent team focused on saving you money and keeping you compliant. Our expert
              bookkeeping, tax preparation, and accounting services provide peace of mind without the fluff.
            </p>
            <h4 className="text-xl font-semibold mb-2">Why Choose Our Bookkeeping?</h4>
            <p className="text-gray-600 mb-6">
              Our bookkeeping starts at $149.99, delivering accurate records and personal attention. No surprise fees—just
              results. Call us today for a free consultation and stress-free tax season.
            </p>
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
  );
}