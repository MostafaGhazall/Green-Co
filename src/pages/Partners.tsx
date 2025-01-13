import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';

const Partners: React.FC = () => {
  return (
    <PageWrapper>
      {/* Where We Serve Section */}
      <section className="py-16 px-10 lg:px-36 bg-white">
        <h2 className="text-4xl font-bold text-[#FF8800] mb-6">Where We Serve?</h2>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Map Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="/map2.png"
              alt="Service Areas Map"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          {/* Text Section */}
          <div className="lg:w-1/2 text-gray-800 pl-8">
            <p className="text-lg leading-relaxed mb-4">
              Our reach extends to key markets across the globe, ensuring timely delivery and satisfaction. We specialize in providing fresh produce to:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                <span className="font-bold text-[#004F26]">North America:</span> Delivering to Canada and the United States with a focus on high-quality, sustainable products.
              </li>
              <li>
                <span className="font-bold text-[#004F26]">Europe:</span> Serving countries like Germany, France, and the United Kingdom, known for their demand for premium produce.
              </li>
              <li>
                <span className="font-bold text-[#004F26]">Middle East:</span> A primary hub for our exports, including the UAE and surrounding Gulf countries.
              </li>
              <li>
                <span className="font-bold text-[#004F26]">Asia:</span> Expanding our reach to key markets in Asia, ensuring fresh and reliable supply chains.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Customer Service Section */}
      <section className="py-16 px-10 lg:px-36 bg-gray-100">
        <h2 className="text-4xl font-bold text-[#FF8800] mb-6">Customer Service</h2>
        <div className="text-gray-800">
          {/* Text Content */}
          <p className="text-lg leading-relaxed mb-8">
            Al salloum core philosophy is to keep customer happy at all times.
            Basically by fulfilling customer’s needs and meeting expectations.
            In case of any deviations that may affect the customers satisfactory, a fast corrective action will be taken place.
          </p>

          {/* Contact Section */}
          <div className="flex items-center space-x-8">
            {/* Phone Number */}
            <div className="flex items-center space-x-2 group">
              <div className="p-2 bg-[#FFE0B2] rounded-full transform transition-transform duration-300 group-hover:scale-125">
                <FaPhoneAlt className="text-[#FF8800] w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-medium group-hover:text-[#FF8800]">
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
                  className="block text-sm font-medium hover:underline group-hover:text-[#FF8800]"
                >
                  info@egy-pro.com
                </a>
                <span className="block text-xs text-gray-500">Send us an email</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Partners;
