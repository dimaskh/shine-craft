"use client";

import { getImagePath } from "@/utils/paths";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const top =
        section.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsBookingOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handlePopupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingOpen(false);
  };

  return (
    <main className="relative">
      {/* Booking Popup */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Book Your Service
                </h2>
                <button
                  onClick={() => setIsBookingOpen(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Contact Form */}
              <form onSubmit={handlePopupSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="popup-name"
                      className="block text-white/80 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="popup-name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="popup-email"
                      className="block text-white/80 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="popup-email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="popup-vehicle"
                    className="block text-white/80 mb-2"
                  >
                    Vehicle Details
                  </label>
                  <input
                    type="text"
                    id="popup-vehicle"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                    placeholder="Year, Make, Model"
                  />
                </div>
                <div>
                  <label
                    htmlFor="popup-message"
                    className="block text-white/80 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="popup-message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#BF9BF9] to-[#3F4390] text-white px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 text-lg w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter">
                <span className="text-gradient">Shine</span>
                <span className="text-white"> Craft</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#gallery"
                onClick={(e) => scrollToSection(e, "gallery")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Gallery
              </a>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "services")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#process"
                onClick={(e) => scrollToSection(e, "process")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Process
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Contact
              </a>
              <button
                onClick={handleBookNow}
                className="bg-gradient-to-r from-[#BF9BF9] to-[#3F4390] text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300"
              >
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src={getImagePath("/images/hero/hero-1.jpg")}
          alt="Crafting Workspace"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-overlay" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Crafting with</span>{" "}
            <span className="text-gradient">Passion</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl mb-4">
            Welcome to{" "}
            <span className="text-gradient font-semibold">Shine Craft</span> —
            where creativity
          </p>
          <p className="text-white/80 text-lg md:text-2xl mb-12">
            meets precision in every handmade piece
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#"
              onClick={handleBookNow}
              className="bg-gradient-to-r from-[#BF9BF9] to-[#3F4390] text-white px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 text-lg flex items-center justify-center"
            >
              Start Crafting
            </Link>
            <Link
              href="#"
              onClick={handleBookNow}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-lg flex items-center justify-center"
            >
              Explore Projects
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 mx-auto w-fit animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-white/60 text-sm mb-2">
              Scroll to explore
            </span>
            <svg
              className="w-6 h-6 text-[#7554A3]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="gallery" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Featured Work
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Discover our commitment to excellence through our portfolio of
              meticulously detailed vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-80">
                  <Image
                    src={getImagePath(project.image)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-black to-[#1A1A1A]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Experience the pinnacle of automotive care with our comprehensive
              detailing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-96">
                  <Image
                    src={getImagePath(service.image)}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/80 mb-6">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-[#7554A3] hover:text-[#674099] transition-colors"
                    >
                      Learn more
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-white/60 text-lg md:text-xl">
              Meticulous attention to every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative h-full">
                <div className="bg-card-gradient rounded-lg p-6 border border-white/10 hover:border-[#7554A3]/50 transition-colors h-full flex flex-col">
                  <span className="text-5xl font-bold text-[#7554A3]/30 absolute -top-6 left-4">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-white/60 flex-grow">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-[#7554A3]/20">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#7554A3]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-white/60 text-lg md:text-xl">
              Create something amazing with Shine Craft
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black/30 p-8 rounded-2xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="vehicle" className="block text-white/80 mb-2">
                    Vehicle Details
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                    placeholder="Year, Make, Model"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#BF9BF9] to-[#3F4390] text-white px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 text-lg w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Location */}
              <div className="bg-black/30 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#7554A3]/10 rounded-lg">
                    <svg
                      className="w-6 h-6 text-[#7554A3]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Location
                    </h3>
                    <p className="text-white/60">123 Detailing Street</p>
                    <p className="text-white/60">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-black/30 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#7554A3]/10 rounded-lg">
                    <svg
                      className="w-6 h-6 text-[#7554A3]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Contact
                    </h3>
                    <p className="text-white/60">(123) 456-7890</p>
                    <p className="text-white/60">info@shine-craft.com</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-black/30 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#7554A3]/10 rounded-lg">
                    <svg
                      className="w-6 h-6 text-[#7554A3]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Hours
                    </h3>
                    <p className="text-white/60">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-white/60">Sat: 10:00 AM - 4:00 PM</p>
                    <p className="text-white/60">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="relative py-32">
        <Image
          src={getImagePath("/images/hero/hero-2.jpg")}
          alt="Contact Background"
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Experience the pinnacle of automotive detailing. Schedule your
            appointment today.
          </p>
          <Link
            href="#"
            onClick={handleBookNow}
            className="bg-gradient-to-r from-[#BF9BF9] to-[#3F4390] text-white px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 text-lg inline-flex items-center"
          >
            Get Started
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h4 className="text-2xl font-bold mb-6">
                <span className="text-gradient">Shine</span>
                <span className="text-white"> Craft</span>
              </h4>
              <p className="text-white/60 mb-6">
                Premium automotive detailing services for those who demand
                excellence. Transform your vehicle with our expert care.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/60 hover:text-[#BF9BF9] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#BF9BF9] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-[#BF9BF9] transition-colors"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-white/60 hover:text-[#BF9BF9] transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="text-white/60 hover:text-[#BF9BF9] transition-colors"
                  >
                    Our Process
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/60 hover:text-[#BF9BF9] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Our Services
              </h4>
              <ul className="space-y-4">
                <li className="text-white/60">Full Detail Package</li>
                <li className="text-white/60">Paint Correction</li>
                <li className="text-white/60">Ceramic Coating</li>
                <li className="text-white/60">Interior Detailing</li>
                <li className="text-white/60">Paint Protection Film</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Contact Info
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#BF9BF9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-white/60">
                    123 Detailing Street, San Francisco, CA 94105
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#BF9BF9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-white/60">(123) 456-7890</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#BF9BF9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-white/60">info@shinecraft.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm">
                &copy; {new Date().getFullYear()} Shine Craft. All rights
                reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-white/60 hover:text-[#BF9BF9] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#BF9BF9] transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const projects = [
  {
    title: "Porsche 911 GT3",
    description: "Full exterior detail with ceramic coating",
    image: "/images/projects/porsche-911.jpg",
  },
  {
    title: "Mercedes-AMG GT",
    description: "Paint correction and interior restoration",
    image: "/images/projects/mercedes-amg.jpg",
  },
  {
    title: "BMW M4 Competition",
    description: "Complete protection package",
    image: "/images/projects/bmw-m4.jpg",
  },
  {
    title: "Audi RS e-tron GT",
    description: "New vehicle preparation",
    image: "/images/projects/audi-rs.jpg",
  },
  {
    title: "Tesla Model S Plaid",
    description: "Paint protection film installation",
    image: "/images/projects/tesla-s.jpg",
  },
  {
    title: "Lamborghini Huracán",
    description: "Show car preparation",
    image: "/images/projects/lambo.jpg",
  },
];

const services = [
  {
    title: "Paint Correction",
    description:
      "Professional paint correction service to remove swirls, scratches, and imperfections, restoring your vehicle's finish to showroom quality.",
    image: "/images/services/paint-correction.jpg",
    link: "/services/paint-correction",
  },
  {
    title: "Ceramic Coating",
    description:
      "Premium ceramic coating applications that provide long-lasting protection and enhance your vehicle's paint with a deep, glossy finish.",
    image: "/images/services/ceramic-coating.jpg",
    link: "/services/ceramic-coating",
  },
  {
    title: "Interior Detailing",
    description:
      "Comprehensive interior detailing service including deep cleaning, leather care, and protection for all interior surfaces.",
    image: "/images/services/interior.jpg",
    link: "/services/interior",
  },
];

const process = [
  {
    title: "Initial Inspection",
    description:
      "Thorough evaluation of your vehicle's condition and detailing needs.",
  },
  {
    title: "Paint Analysis",
    description: "Professional paint measurement and defect analysis.",
  },
  {
    title: "Surface Preparation",
    description: "Careful washing, decontamination, and clay bar treatment.",
  },
  {
    title: "Paint Correction",
    description: "Multi-stage paint correction to remove imperfections.",
  },
  {
    title: "Protection Application",
    description: "Application of ceramic coating or paint protection film.",
  },
  {
    title: "Interior Detail",
    description: "Deep cleaning and protection of all interior surfaces.",
  },
  {
    title: "Final Inspection",
    description: "Comprehensive quality check of all completed work.",
  },
  {
    title: "Client Review",
    description: "Detailed walkthrough of completed services with the client.",
  },
];
