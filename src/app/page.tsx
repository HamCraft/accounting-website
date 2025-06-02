import { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import ServicesSection from '@/components/services-section';

export const metadata: Metadata = {
  title: 'Taxsation | Expert Bookkeeping & Tax Services',
  description: 'Taxsation offers affordable bookkeeping and tax preparation services starting at $149.99. Contact us for stress-free financial solutions.',
  keywords: ['Taxsation', 'bookkeeping services', 'tax preparation', 'accounting New York'],
  openGraph: {
    title: 'Taxsation | Expert Bookkeeping & Tax Services',
    description: 'Taxsation provides affordable bookkeeping and tax services starting at $149.99.',
    url: 'https://taxsation.com',
    images: ['https://taxsation.com/images/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="bg-[#f5f8fa] py-2 px-4 flex justify-end items-center">
        <div className="max-w-7xl w-full mx-auto flex justify-end items-center">
          <div className="text-1xl font-semibold">Call Us: (972) 885-8655</div>
        </div>
      </div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}