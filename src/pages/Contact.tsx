import React, { useState, useEffect } from "react";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CrownDecoration from "../components/CrownDecoration";
import MagicalEffects from "../components/MagicalEffects";
import "/fonts.css";

// Import background assets
import astrologyZodiacBg from "../assets/images/backgrounds/astrology-zodiac.webp";
import bokehGlitterBg from "../assets/images/backgrounds/bokeh-glitter.webp";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-divine-900 text-white font-inter overflow-hidden relative">
      {/* Magical Effects Layer */}
      <MagicalEffects page="contact" intensity="low" enableScrollTrigger={true} />
      
      <Navbar />
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-luxury-900 to-divine-900">
        <div className="absolute inset-0 opacity-15">
          <img src={astrologyZodiacBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-6">
          <CrownDecoration />
          <h1 className="text-5xl md:text-7xl font-bold font-cinzel text-luxury-300 mt-4">
            Contact & Consultation
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6">
            Reach out to begin your journey towards clarity and empowerment. We are here to guide you with divine wisdom and holistic solutions.
          </p>
        </div>
      </div>

      <div 
        className="py-24 bg-divine-900 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(88, 28, 135, 0.85), rgba(88, 28, 135, 0.85)), url(${bokehGlitterBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-luxury-900/50 to-divine-900/50 p-8 md:p-12 rounded-3xl border border-luxury-500/30 shadow-divine">
              <h2 className="text-3xl font-bold font-cinzel text-gold-400 mb-2">Send a Message</h2>
              <p className="text-white/70 mb-8">We typically respond within 24 hours.</p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-10 pt-8">
              <ContactInfoItem
                icon={<MapPin className="w-7 h-7 text-gold-400" />}
                title="Our Sacred Space"
                lines={["B 507 Tulsi 1 Appartment, Near Versova Metro Station, Bon Bon lane, Seven Bungalows, Andheri west, Mumbai 400061"]}
              />
              <ContactInfoItem
                icon={<Phone className="w-7 h-7 text-gold-400" />}
                title="Call for Guidance"
                lines={["+91-9870111356"]}
              />
              <ContactInfoItem
                icon={<Mail className="w-7 h-7 text-gold-400" />}
                title="Email Us"
                lines={["pranjal@agnni.co.in"]}
              />
              <ContactInfoItem
                icon={<Clock className="w-7 h-7 text-gold-400" />}
                title="Consultation Timings"
                lines={["Monday – Saturday: 10:00 AM – 7:00 PM", "Wednesday (Oberoi Mall): 4:00 PM - 10:00 PM", "Sunday: Closed (Prior Appointments Only)"]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-24 bg-gradient-to-t from-luxury-900 to-divine-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden h-[500px] shadow-divine border border-luxury-500/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.952573253504!2d72.81558407520674!3d19.10966988209951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b746a5bd5d%3A0x752a61a75f7c33f4!2sTulsi%20Apartment!5e0!3m2!1sen!2sin!4v1678886700772!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (value.trim() !== '') {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/\S+@\S+\.\S+/.test(formData.email),
      message: formData.message.trim() === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(isError => isError);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Reset form or show success message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <FloatingLabelInput
        id="name"
        name="name"
        label="Full Name"
        value={formData.name}
        onChange={handleInputChange}
        error={errors.name}
        errorMessage="Please enter your name."
      />
      <FloatingLabelInput
        id="email"
        name="email"
        type="email"
        label="Email Address"
        value={formData.email}
        onChange={handleInputChange}
        error={errors.email}
        errorMessage="Please enter a valid email."
      />
      <FloatingLabelTextarea
        id="message"
        name="message"
        label="Your Message or Question"
        value={formData.message}
        onChange={handleInputChange}
        error={errors.message}
        errorMessage="Please enter your message."
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-gold hover:shadow-gold-lg font-inter cta-button interactive text-lg"
      >
        Send Message
      </button>
    </form>
  );
};

const FloatingLabelInput = ({ id, name, type = 'text', label, value, onChange, error, errorMessage }) => (
  <div className="relative">
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`peer w-full px-4 py-3 bg-transparent border-2 rounded-lg text-white placeholder-transparent transition-colors duration-300 ${error ? 'border-red-500/70 focus:border-red-500' : 'border-luxury-500/50 focus:border-purple-400'}`}
      placeholder={label}
    />
    <label
      htmlFor={id}
      className={`absolute left-4 -top-2.5 px-1 bg-gradient-to-br from-luxury-900 to-divine-900 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm ${error ? 'text-red-400' : 'text-purple-300 peer-focus:text-purple-300'}`}>
      {label}
    </label>
    {error && <p className="text-red-400 text-xs mt-1">{errorMessage}</p>}
  </div>
);

const FloatingLabelTextarea = ({ id, name, label, value, onChange, error, errorMessage }) => (
  <div className="relative">
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      rows={5}
      className={`peer w-full px-4 py-3 bg-transparent border-2 rounded-lg text-white placeholder-transparent transition-colors duration-300 ${error ? 'border-red-500/70 focus:border-red-500' : 'border-luxury-500/50 focus:border-purple-400'}`}
      placeholder={label}
    />
    <label
      htmlFor={id}
      className={`absolute left-4 -top-2.5 px-1 bg-gradient-to-br from-luxury-900 to-divine-900 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm ${error ? 'text-red-400' : 'text-purple-300 peer-focus:text-purple-300'}`}>
      {label}
    </label>
    {error && <p className="text-red-400 text-xs mt-1">{errorMessage}</p>}
  </div>
);

const ContactInfoItem = ({ icon, title, lines }) => (
  <div className="flex items-start space-x-6">
    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-luxury-800 to-divine-800 rounded-2xl flex items-center justify-center border border-luxury-500/30 shadow-lg">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold font-cinzel text-gold-400 mb-2">{title}</h3>
      {lines.map((line, index) => (
        <p key={index} className="text-white/80 leading-relaxed">{line}</p>
      ))}
    </div>
  </div>
);

export default Contact;