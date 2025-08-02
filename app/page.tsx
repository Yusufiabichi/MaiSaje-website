
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <i className="ri-leaf-line text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-green-800 font-['Pacifico']">Mai Saje</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium">About</a>
              <a href="#products" className="text-gray-700 hover:text-green-600 font-medium">Products</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t">
              <div className="flex flex-col space-y-3 pt-4">
                <a href="#home" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
                <a href="#about" className="text-gray-700 hover:text-green-600 font-medium">About</a>
                <a href="#products" className="text-gray-700 hover:text-green-600 font-medium">Products</a>
                <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=modern%20agricultural%20facility%20with%20water%20bottling%20plant%20rice%20fields%20and%20livestock%20farm%20in%20Nigeria%20showing%20cattle%20goats%20chickens%20with%20green%20landscapes%20blue%20skies%20professional%20commercial%20photography%20clean%20industrial%20equipment%20agricultural%20machinery%20pristine%20facilities&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
      }}>
        <div className="container mx-auto px-4 pt-24 pb-16 min-h-screen flex items-center">
          <div className="w-full max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Mai Saje <span className="text-green-400">General</span><br/>
              <span className="text-blue-400">Enterprises</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Your Trusted Source for Water, Rice & Livestock Products
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-3xl">
              Providing clean table water, nutritious parboiled rice, and healthy livestock products to households and businesses across Nigeria with quality, trust, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" 
                 className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                View Products
              </a>
              <a href="#contact" 
                 className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Mai Saje</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are committed to providing clean table water, nutritious rice, and healthy livestock products to households and businesses across Nigeria. Our dedication to quality, hygiene, and community development drives everything we do.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded with the vision of becoming Nigeria's most trusted agro-based enterprise, we combine traditional farming wisdom with modern production techniques to deliver excellence in every product.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Nigerian%20agricultural%20company%20team%20working%20in%20modern%20facility%20with%20water%20processing%20equipment%20rice%20storage%20and%20livestock%20management%20professional%20workers%20in%20clean%20uniforms%20quality%20control%20processes%20agricultural%20technology&width=600&height=400&seq=about-img&orientation=landscape"
                alt="Mai Saje Team"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Products</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium range of agricultural products, carefully produced to meet the highest standards of quality and freshness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Water Product */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=packaged%20bottled%20water%20bottles%20in%20clear%20plastic%20packaging%20with%20blue%20labels%20clean%20modern%20bottling%20facility%20in%20background%20Nigerian%20water%20production%20NAFDAC%20approved%20pure%20drinking%20water%20commercial%20photography%20professional%20product%20shot&width=400&height=300&seq=water-product&orientation=landscape"
                alt="Mai Saje Table Water"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Mai Saje Table Water</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Produced and packaged with modern equipment ensuring safety and purity. Our water undergoes rigorous quality control processes to deliver refreshing, clean drinking water.
                </p>
                <div className="flex items-center text-green-600">
                  <i className="ri-drop-line text-xl mr-2"></i>
                  <span className="font-semibold">NAFDAC Approved</span>
                </div>
              </div>
            </div>

            {/* Rice Product */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Nigerian%20parboiled%20rice%20grains%20in%20traditional%20packaging%20bag%20with%20golden%20brown%20color%20high%20quality%20stone%20free%20rice%20agricultural%20product%20local%20processing%20facility%20rice%20fields%20in%20background%20professional%20product%20photography&width=400&height=300&seq=rice-product&orientation=landscape"
                alt="Mai Saje Parboiled Rice"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Mai Saje Parboiled Rice</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Carefully processed Nigerian parboiled rice—stone-free, clean, and tasty. Our rice is locally sourced and processed using traditional methods combined with modern technology.
                </p>
                <div className="flex items-center text-orange-600">
                  <i className="ri-seedling-line text-xl mr-2"></i>
                  <span className="font-semibold">100% Nigerian</span>
                </div>
              </div>
            </div>

            {/* Livestock Product */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=healthy%20cattle%20goats%20chickens%20and%20poultry%20on%20Nigerian%20farm%20green%20pastures%20livestock%20farming%20modern%20agricultural%20facility%20healthy%20animals%20grazing%20professional%20farm%20management%20agricultural%20photography&width=400&height=300&seq=livestock-product&orientation=landscape"
                alt="Mai Saje Livestock & Poultry"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Mai Saje Livestock & Poultry</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We raise and supply healthy livestock and poultry for local markets. Our animals are well-cared for with proper nutrition, veterinary care, and humane treatment.
                </p>
                <div className="flex items-center text-green-600">
                  <i className="ri-heart-pulse-line text-xl mr-2"></i>
                  <span className="font-semibold">Healthy & Fresh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why Choose Mai Saje?</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">NAFDAC Approved</h3>
              <p className="text-gray-600">All our products meet regulatory standards and safety requirements.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Affordable & Reliable</h3>
              <p className="text-gray-600">Competitive pricing without compromising on quality and consistency.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-community-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Locally Owned</h3>
              <p className="text-gray-600">Community-based business supporting local farmers and economy.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-health-book-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hygienic Standards</h3>
              <p className="text-gray-600">Strict hygiene protocols and standard-compliant production processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "Mai Saje water has been our go-to choice for our restaurant. The quality is consistent and customers always compliment the taste."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-fill text-gray-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Amina Ibrahim</div>
                  <div className="text-sm text-gray-600">Restaurant Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "The parboiled rice quality is exceptional. Stone-free and perfectly processed. My family loves it and it cooks beautifully."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-fill text-gray-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Bala Mohammed</div>
                  <div className="text-sm text-gray-600">Wholesale Buyer</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "Reliable supplier for our livestock needs. Healthy animals and excellent customer service. Highly recommended for serious farmers."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-fill text-gray-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Fatima Usman</div>
                  <div className="text-sm text-gray-600">Livestock Distributor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to experience the quality of Mai Saje products? Contact us today for orders, partnerships, or any inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your requirements or questions..."
                  ></textarea>
                  <div className="text-sm text-gray-500 mt-1">{formData.message.length}/500 characters</div>
                </div>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-map-pin-line text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">Mai Saje Industrial Complex<br/>Kano State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-phone-line text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+234 803 123 4567<br/>+234 805 987 6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-mail-line text-orange-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@maisaje.com<br/>sales@maisaje.com</p>
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="https://wa.me/2348031234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 w-fit cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-whatsapp-line text-xl"></i>
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Us</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3615536749!2d8.5177!3d12.0022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae813a8b3a3b0f%3A0x2b0e0e0e0e0e0e0e!2sKano%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <i className="ri-leaf-line text-white text-xl"></i>
                </div>
                <span className="text-2xl font-bold font-['Pacifico']">Mai Saje</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted source for quality table water, parboiled rice, and livestock products across Nigeria. Committed to excellence, hygiene, and community development.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center cursor-pointer">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center cursor-pointer">
                  <i className="ri-whatsapp-line"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <div className="space-y-3">
                <a href="#home" className="block text-gray-300 hover:text-white cursor-pointer">Home</a>
                <a href="#about" className="block text-gray-300 hover:text-white cursor-pointer">About Us</a>
                <a href="#products" className="block text-gray-300 hover:text-white cursor-pointer">Products</a>
                <a href="#contact" className="block text-gray-300 hover:text-white cursor-pointer">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Our Products</h4>
              <div className="space-y-3">
                <div className="text-gray-300">Table Water</div>
                <div className="text-gray-300">Parboiled Rice</div>
                <div className="text-gray-300">Livestock & Poultry</div>
                <div className="text-gray-300">Poultry Feed</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Mai Saje General Enterprises. All rights reserved. | Proudly Nigerian 🇳🇬
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
