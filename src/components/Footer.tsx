import React from 'react';

const Footer: React.FC = () => {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Partners', href: '#partners' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Products', href: '#products' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between px-20">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-16 w-auto mb-4"
          />
          <p className="text-sm">
            Kilo 20 Bilbes Road - Alobbor<br />
            Egyptian Engineers Association, Gate No. 3 - Egypt
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-4 text-[#6ABB47]">Navigation</h3>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-[#6ABB47] transition duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-lg mb-4 text-[#6ABB47]">Contact Info</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:text-left">
            <div>
              <p className="text-sm">
                <strong>Phone:</strong>
                <br />
                +2 (02)26328464,<br /> +2 (02)26345832<br />
                +2 (0)1006718384,<br /> .U.K: 00447949084684
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:info@egy-pro.com"
                  className="hover:text-[#6ABB47] hover:underline transition duration-200"
                >
                  info@egy-pro.com
                </a>
                <br />
                <a
                  href="mailto:Yasser.salloum@egy-pro.com"
                  className="hover:text-[#6ABB47] hover:underline transition duration-200"
                >
                  Yasser.salloum@egy-pro.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
