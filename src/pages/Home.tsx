import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({
  onClick,
  direction,
}: {
  className?: string;
  onClick?: () => void;
  direction: "left" | "right";
}) => {
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-[#FF8800] hover:bg-[#ffc061] text-white rounded-full flex items-center justify-center shadow-lg ${
        direction === "left" ? "left-4" : "right-4"
      }`}
      onClick={onClick}
    >
      {direction === "left" ? (
        <i className="fas fa-chevron-left"></i>
      ) : (
        <i className="fas fa-chevron-right"></i>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <div>
      <style>
        {`
          .slick-dots {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex !important;
            justify-content: center;
            gap: 10px;
          }
          .slick-dots li {
            margin: 0;
          }
          .slick-dots li button {
            width: 10px;
            height: 10px;
            background: #ccc;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
          }
          .slick-dots li.slick-active button {
            background: #FF8800;
          }
          .slick-dots li button:before {
            content: '';
          }
        `}
      </style>

      {/* Slider Section */}
      <div className="relative">
        <Slider {...settings} className="w-full h-[80vh]">
          <div>
            <Link to="/portfolio">
              <div className="relative w-full h-[80vh]">
                <img
                  src="/home/pack.jpg"
                  alt="Pack House"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h2 className="text-white text-4xl font-bold">Pack House</h2>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/partners">
              <div className="relative w-full h-[80vh]">
                <img
                  src="/home/map2.png"
                  alt="Partners"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h2 className="text-white text-4xl font-bold">
                    Where We Serve?
                  </h2>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/products">
              <div className="relative w-full h-[80vh]">
                <img
                  src="/home/fruits.jpg"
                  alt="Contact Us Placeholder"
                  className="w-full h-full object-contain"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h2 className="text-white text-4xl font-bold">
                    Our Products
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </Slider>
      </div>

      {/* About Us Section */}
      <section
        id="about-us"
        className="py-12 px-6 md:py-16 md:px-10 lg:py-28 lg:px-36 bg-white flex flex-col lg:flex-row items-center justify-between"
      >
        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FF8800] font-bold mb-4 md:mb-6">
            About Us
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed max-w-xl">
            Green for Agricultural Development & Investment is a
            fast-growing, modern company producing, sourcing, packing, and
            exporting high-quality fruits and vegetables of Egyptian origin.
          </p>
          <Link
            to="/about"
            className="px-6 py-2 md:px-8 md:py-3 bg-[#E94D23] text-white font-semibold rounded hover:bg-[#004F26] transition duration-200"
          >
            Learn More
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center px-4 md:px-8">
          <img
            src="/home/who.jpeg"
            alt="Who We Are"
            className="w-3/4 sm:w-2/3 lg:w-3/4"
          />
        </div>
      </section>
      {/* Fruits & Vegetables Section */}
      <section
        id="products-section"
        className="py-12 px-6 md:py-16 md:px-10 lg:py-20 lg:px-36 bg-gray-100"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FF8800] font-bold mb-7">
            Green Products
          </h2>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
            Our products are a testament to our dedication to delivering
            excellence in agricultural produce. From farm to table, we offer a
            diverse range of fruits, vegetables, herbs, and specialty items that
            embody freshness, quality, and sustainability. Each product is a
            result of meticulous cultivation, ethical farming practices, and
            advanced handling techniques to ensure the highest standards.
            Explore our offerings and experience the perfect blend of nature’s
            bounty and our unwavering commitment to providing premium
            agricultural solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          <Link to="/categories/fruits" className="group">
            <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-lg">
              <img
                src="/home/fruits2.jpg"
                alt="Fruits"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-45 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                  Fruits
                </h3>
              </div>
            </div>
          </Link>

          <Link to="/categories/vegetables" className="group">
            <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-lg">
              <img
                src="/home/vegetables.jpg"
                alt="Vegetables"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                  Vegetables
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
