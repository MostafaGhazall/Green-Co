import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Partners", path: "/partners" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow">
      {/* Upper Navbar */}
      <nav className="bg-white text-[#FF8800] px-4 md:px-20 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-start group hover:animate-rotate360">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-10 md:h-12 w-auto"
          />
          <span className="text-[#004F26] font-semibold text-xs ml-2">
            fine egyptian produce
          </span>
        </div>

        {/* Contact Section */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Phone Number */}
          <div className="flex items-center space-x-2 group">
            <div className="p-2 bg-[#FFE0B2] rounded-full transform transition-transform duration-300 group-hover:scale-125">
              <FaPhoneAlt className="text-[#FF8800] w-5 h-5" />
            </div>
            <div>
              <span className="block text-sm font-medium group-hover:text-[#FF6D00]">
                +2 (02)12345678 - .U.K :00123456789123
              </span>
              <span className="block text-xs text-gray-500">
                Get in touch with us
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2 group">
            <div className="p-2 bg-[#FFE0B2] rounded-full transform transition-transform duration-300 group-hover:scale-125">
              <FaEnvelope className="text-[#FF8800] w-5 h-5" />
            </div>
            <div>
              <a
                href=""
                className="block text-sm font-medium hover:underline group-hover:text-[#FF6D00]"
              >
                info@green.com
              </a>
              <span className="block text-xs text-gray-500">
                Send us an email
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-[#FF8800] text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Lower Navbar */}
      <nav className="bg-[#004F26] text-white">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-6 px-8 py-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`relative px-4 py-2 transition duration-500 ${
                  location.pathname === item.path
                    ? 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#6ABB47] after:transition-all after:duration-500'
                    : 'hover:text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-[#6ABB47] hover:after:w-full hover:after:transition-all hover:after:duration-500'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="flex flex-col space-y-2 px-4 py-4 bg-[#004F26] md:hidden">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-white text-center ${
                    location.pathname === item.path
                      ? "bg-[#6ABB47] rounded"
                      : "hover:bg-[#6ABB47] rounded transition duration-200"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
