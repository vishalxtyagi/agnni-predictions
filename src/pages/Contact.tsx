import React, { useState, useEffect } from "react";
import background from "../assets/images/backgrounds/purple-gradient.webp";
import { Phone, MapPin, Mail, Share2 } from "lucide-react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import FooterMenu from "../components/FooterMenu";
import CrownDecoration from "../components/CrownDecoration";
import "/fonts.css";

// Import AOS library
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    message: "",
  });

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "PHONE",
      content: "tel: +91 00 00 0000",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "ADDRESS",
      content: "1017 Ridgeway Dr, Arnold, MO, 63010",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "EMAIL",
      content: "example@example.com",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "SOCIAL SHARE",
      content: "fb tw in yt",
    },
  ];

  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      {/* Header Section */}
      <div className="pt-20 pb-10 text-center" data-aos="fade-down">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Get a Tarot Reading done to understand the Depth of the Situation and
          Resolve it
        </p>
      </div>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Get in touch section */}
          <div className="text-center mb-16" data-aos="fade-up">
           
            <CrownDecoration className="w-12 h-8 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Get in touch with us!</h2>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 200}
                >
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="opacity-80">{info.content}</p>
              </div>
            ))}
          </div>

          {/* Book Appointment Button */}
          <div
            className="text-center mb-20"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <button className="bg-gradient-to-r from-orange-400 to-orange-700 px-8 py-3 rounded-full text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all">
              Book A Appointment
            </button>
          </div>
<CrownDecoration />
          {/* Contact Form Section */}
          <div className="text-center mb-16" data-aos="fade-up">
           
            <h2 className="text-4xl font-bold mb-4">
              If you got any questions
            </h2>
            <p className="text-xl mb-12">
              Please do not hesitate to send us a message
            </p>
          </div>

          <div
            className="max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-600/20 placeholder-white/70 text-white focus:outline-none focus:border-orange-400"
                  required
                  data-aos="fade-right"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-600/20 placeholder-white/70 text-white focus:outline-none focus:border-orange-400"
                  required
                  data-aos="fade-left"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-600/20 placeholder-white/70 text-white focus:outline-none focus:border-orange-400"
                  required
                  data-aos="fade-right"
                  data-aos-delay="100"
                />
                <input
                  type="date"
                  name="dateOfBirth"
                  placeholder="Date of birth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-600/20 placeholder-white/70 text-white focus:outline-none focus:border-orange-400"
                  required
                  data-aos="fade-left"
                  data-aos-delay="100"
                />
              </div>
              <textarea
                name="message"
                placeholder="Question or Comment"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-600/20 placeholder-white/70 text-white focus:outline-none focus:border-orange-400"
                required
                data-aos="fade-up"
                data-aos-delay="200"
              ></textarea>
              <div
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <button
                  type="submit"
                  className="border border-2 border-orange-700 px-8 py-3 rounded-full text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Send a message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="rounded-2xl overflow-hidden h-[400px] shadow-2xl"
            data-aos="zoom-in"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.13565556951!2d-90.37844867832036!3d38.43276029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8c6c4bb891e0d%3A0x7eb0b29e22fc5d83!2s1017%20Ridgeway%20Dr%2C%20Arnold%2C%20MO%2063010%2C%20USA!5e0!3m2!1sen!2sin!4v1647886700772!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsLetter />

      {/* Footer Menu */} 
      <FooterMenu />
    </div>
  );
};

export default Contact;
