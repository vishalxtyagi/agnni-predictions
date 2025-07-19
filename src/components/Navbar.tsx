import React, { useState } from "react";
import { Star, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/agnni_logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 h-16 flex items-center">
      {" "}
      {/* Fixed height and flex alignment */}
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="AGNNI Logo" className="h-12" />{" "}
          {/* Adjust this value as needed */}
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/Consultation"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Consultation
          </Link>
          <Link
            to="/Shop"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Products
          </Link>
          <Link
            to="/Courses"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Courses
          </Link>
          
          <Link
            to="/about"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* <Link
          to="/contact"
          className="hidden md:block bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full font-semibold text-black hover:shadow-xl transform hover:scale-105 transition-all"
        >
          Book a Consultation
        </Link> */}

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden mt-16 pb-4 space-y-4 bg-black/50 rounded-lg px-4 absolute w-full left-0">
          <Link to="/" className="block text-white hover:text-yellow-400 py-2">
            Home
          </Link>
          <Link
            to="/Consultation"
            className="block text-white hover:text-yellow-400 py-2"
          >
            Consultation
          </Link>
          <Link
            to="/Shop"
            className="block text-white hover:text-yellow-400 py-2"
          >
            Shop
          </Link>
          <Link
            to="/guidance"
            className="block text-white hover:text-yellow-400 py-2"
          >
            Guidance
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-yellow-400 py-2"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-yellow-400 py-2"
          >
            Contact Us
          </Link>
          {/* <Link
            to="/contact"
            className="block bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full font-semibold text-black hover:shadow-xl transform hover:scale-105 transition-all text-center"
          >
            Book a Consultation
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
