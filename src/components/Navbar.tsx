import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation(); 

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Partners', path: '/partners' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Products', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="shadow">
      {/* Upper Navbar */}
      <nav className="bg-white text-[#FF8800] px-20 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-start group transition-transform duration-500 hover:animate-rotate360">
          <img src="/logo2.png" alt="Company Logo" className="h-12 w-auto" />
          <span className="text-[#004F26] font-semibold text-xs ml-2">
            fine egyptian produce
          </span>
        </div>

        {/* Contact Section */}
        <div className="flex items-center space-x-8">
          {/* Phone Number */}
          <div className="flex items-center space-x-2 group">
            <div className="p-2 bg-[#FFE0B2] rounded-full transform transition-transform duration-300 group-hover:scale-125">
              <FaPhoneAlt className="text-[#FF8800] w-5 h-5" />
            </div>
            <div>
              <span className="block text-sm font-medium group-hover:text-[#FF6D00]">
                +2 (02)26328464 - .U.K :00447949084684
              </span>
              <span className="block text-xs text-gray-500">Get in touch with us</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2 group">
            <div className="p-2 bg-[#FFE0B2] rounded-full transform transition-transform duration-300 group-hover:scale-125">
              <FaEnvelope className="text-[#FF8800] w-5 h-5" />
            </div>
            <div>
              <a
                href="mailto:info@egy-pro.com"
                className="block text-sm font-medium hover:underline group-hover:text-[#FF6D00]"
              >
                info@egy-pro.com
              </a>
              <span className="block text-xs text-gray-500">Send us an email</span>
            </div>
          </div>
        </div>
      </nav>


      {/* Lower Navbar */}
      <nav className="bg-[#004F26] text-white px-8 py-2">
        <ul className="flex justify-center space-x-6">
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
      </nav>
    </header>
  );
};

export default Navbar;
