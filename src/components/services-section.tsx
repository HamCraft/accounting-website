import { Calculator, FileText, BarChart3, PieChart, Receipt, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesSection() {

  const bookkeepingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bookkeeping",
    "provider": { "@type": "Organization", "name": "Taxsation" },
    "description": "Affordable bookkeeping services starting at $149.99 for accurate financial records.",
  };
  
  return (
    <section className="pt-48 pb-5 bg-gray-50" id="services">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookkeepingSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-[#3EB7B1] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive financial solutions tailored to meet the unique needs of your business or personal
            finances.
          </p>
        </div>

        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bookkeeping Services */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:translate-y-[-5px] hover:border-[#3EB7B1]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#3EB7B1] text-white py-1 px-4 rounded-bl-lg font-medium text-sm">
              Starting at $149.99
            </div>
            <div className="bg-[#3EB7B1]/10 p-3 rounded-full w-fit mb-6">
              <Calculator className="h-8 w-8 text-[#3EB7B1]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Bookkeeping</h3>
            <p className="text-gray-600 mb-4">
              Our bookkeeping services help you maintain accurate financial records and provide insights into your
              business performance.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Monthly Financial Statements</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Accounts Payable & Receivable</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Bank Reconciliation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Payroll Processing</span>
              </li>
            </ul>
            <Link href="#contact">
            <Button
              variant="outline"
              className="border-[#3EB7B1] text-[#3EB7B1] hover:bg-[#3EB7B1] hover:text-white transition-colors duration-300"
            >
              Learn More
            </Button>
            </Link>
          </div>

          {/* Tax Services */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:translate-y-[-5px] hover:border-[#3EB7B1]/30">
            <div className="bg-[#3EB7B1]/10 p-3 rounded-full w-fit mb-6">
              <FileText className="h-8 w-8 text-[#3EB7B1]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Tax Services</h3>
            <p className="text-gray-600 mb-4">
              Our expert tax professionals provide comprehensive tax planning and preparation services for individuals
              and businesses.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Individual & Business Tax Returns</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Partnerships(1065)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Corporations(1120)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Corporations(1120S)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>W-2 and 1099 Processing</span>
              </li>
            </ul>
            <Link href="#contact">
            <Button
              variant="outline"
              className="border-[#3EB7B1] text-[#3EB7B1] hover:bg-[#3EB7B1] hover:text-white transition-colors duration-300"
            >
              Learn More
            </Button>
            </Link>
          </div>

          

          {/* Financial Advisory */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:translate-y-[-5px] hover:border-[#3EB7B1]/30">
            <div className="bg-[#3EB7B1]/10 p-3 rounded-full w-fit mb-6">
              <BarChart3 className="h-8 w-8 text-[#3EB7B1]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Financial Advisory</h3>
            <p className="text-gray-600 mb-4">
              Get expert financial guidance to help you make informed decisions and achieve your financial goals.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Business Planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Cash Flow Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Financial Forecasting</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Investment Consulting</span>
              </li>
            </ul>
           <Link href="#contact">
            <Button
              variant="outline"
              className="border-[#3EB7B1] text-[#3EB7B1] hover:bg-[#3EB7B1] hover:text-white transition-colors duration-300"
            >
              Learn More
            </Button>
            </Link>
          </div>

          {/* Business Consulting */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:translate-y-[-5px] hover:border-[#3EB7B1]/30">
            <div className="bg-[#3EB7B1]/10 p-3 rounded-full w-fit mb-6">
              <TrendingUp className="h-8 w-8 text-[#3EB7B1]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Business Consulting</h3>
            <p className="text-gray-600 mb-4">
              Strategic guidance to optimize your business operations and drive growth.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Business Strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Process Improvement</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Risk Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Growth Planning</span>
              </li>
            </ul>
           <Link href="#contact">
            <Button
              variant="outline"
              className="border-[#3EB7B1] text-[#3EB7B1] hover:bg-[#3EB7B1] hover:text-white transition-colors duration-300"
            >
              Learn More
            </Button>
            </Link>
          </div>

          {/* Audit & Assurance */}
          {/* <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:translate-y-[-5px] hover:border-[#3EB7B1]/30">
            <div className="bg-[#3EB7B1]/10 p-3 rounded-full w-fit mb-6">
              <PieChart className="h-8 w-8 text-[#3EB7B1]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Audit & Assurance</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive audit services to ensure financial accuracy and regulatory compliance.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Financial Statement Audits</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Internal Audits</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Compliance Reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Fraud Investigation</span>
              </li>
            </ul>
            <Link href="#contact">
            <Button
              variant="outline"
              className="border-[#3EB7B1] text-[#3EB7B1] hover:bg-[#3EB7B1] hover:text-white transition-colors duration-300"
            >
              Learn More
            </Button>
            </Link>
          </div> */}

          {/* Payroll Services */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:translate-y-[-5px] hover:border-[#3EB7B1]/30">
            <div className="bg-[#3EB7B1]/10 p-3 rounded-full w-fit mb-6">
              <Receipt className="h-8 w-8 text-[#3EB7B1]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Payroll Services</h3>
            <p className="text-gray-600 mb-4">
              Streamline your payroll process with our efficient and accurate payroll services.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Payroll Processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Tax Filing & Payments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Employee Benefits</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EB7B1] mr-2">•</span>
                <span>Time & Attendance</span>
              </li>
            </ul>
           <Link href="#contact">
            <Button
              variant="outline"
              className="border-[#3EB7B1] text-[#3EB7B1] hover:bg-[#3EB7B1] hover:text-white transition-colors duration-300"
            >
              Learn More
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
