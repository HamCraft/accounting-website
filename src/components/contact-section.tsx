"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [emailError, setEmailError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);


  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Taxsation",
    "telephone": "(972) 885-8655",
    // "address": {
    //   "@type": "PostalAddress",
    //   "streetAddress": "123 Accounting Street",
    //   "addressLocality": "Financial District",
    //   "addressRegion": "NY",
    //   "postalCode": "10004",
    //   "addressCountry": "US",
    // },
    "url": "https://taxsation.com",
    "description": "Contact Taxsation for expert bookkeeping, tax preparation, and accounting services.",
  };

  const verifyEmail = async (email: string) => {
    setIsVerifying(true);
    setEmailError("");
    
    try {
      const response = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.isValid) {
        setIsEmailValid(true);
        setEmailError("");
      } else {
        setIsEmailValid(false);
        setEmailError(data.message || "Please enter a valid, deliverable email address");
      }
    } catch (error) {
      setIsEmailValid(false);
      setEmailError("Error verifying email. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(null); // Reset validation state
    setEmailError("");
    
    // Debounce verification to avoid rapid API calls
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    
    if (newEmail) {
      const timeout = setTimeout(() => verifyEmail(newEmail), 500); // 500ms debounce
      setDebounceTimeout(timeout);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!isEmailValid) {
      e.preventDefault();
      setEmailError("Please verify your email before submitting");
    }
  };

  // Cleanup debounce timeout on component unmount
  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  return (
    <section className="pt-48 w-full bg-white" id="contact">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-[#3EB7B1] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help. Reach out to us using the form below or contact
            us directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form
              action="https://formspree.io/f/xqaqwegy"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className={emailError ? "border-red-500" : ""}
                  />
                  {isVerifying && <p className="text-gray-600 text-sm mt-1">Verifying email...</p>}
                  {isEmailValid === false && emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                  {isEmailValid && !isVerifying && (
                    <p className="text-green-500 text-sm mt-1">Email verified successfully</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea name="message" id="message" placeholder="Your message" className="min-h-[150px]" required />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#3EB7B1] hover:bg-[#35a19c] text-white"
                disabled={isVerifying || isEmailValid === null || !isEmailValid}
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-[#3EB7B1]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Our Office</h4>
                  <p className="text-gray-600">123 Accounting Street, Financial District, New York, NY 10004</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-[#3EB7B1]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Email Us</h4>
                  <p className="text-gray-600">info@Taxsation.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-[#3EB7B1]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Call Us</h4>
                  <p className="text-gray-600">(972) 885-8655</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-medium mb-2">Business Hours</h4>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}