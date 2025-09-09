import React, { useState, useEffect } from "react";
import { Star, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoLight from "../assets/images/logos/agnni-logo-main.webp";
import logoDark from "../assets/images/logos/agnni-logo-main.webp";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = isScrolled
    ? "bg-black/80 backdrop-blur-lg shadow-lg"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 w-full z-50 h-20 flex items-center transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={isScrolled ? logoDark : logoLight}
            alt="AGNNI Logo"
            className="h-16 transition-all duration-300"
          />
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Consultation">Consultation</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/Shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-xl rounded-b-2xl shadow-lg p-6 space-y-4">
          <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/Consultation" onClick={() => setMobileMenuOpen(false)}>Consultation</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink to="/Shop" onClick={() => setMobileMenuOpen(false)}>Shop</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white/80 hover:text-white font-medium transition-colors duration-300 relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-white/90 hover:text-white text-lg font-semibold p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
