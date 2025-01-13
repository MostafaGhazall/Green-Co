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
        className="py-28 px-36 bg-white flex flex-col lg:flex-row items-center justify-between"
      >
        {/* Text Section */}
        <div className="lg:w-1/2 px-12">
          <h2 className="text-5xl text-[#FF8800] font-bold mb-6 leading-tight">
            About Us
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
            Al Salloum for Agricultural Development & Investment (EGYPRO) is a
            fast-growing, modern company producing, sourcing, packing, and
            exporting high-quality fruits and vegetables of Egyptian origin.
          </p>
          <Link
            to="/about"
            className="px-8 py-3 bg-[#E94D23] text-white font-semibold rounded hover:bg-[#004F26] transition duration-200"
          >
            Learn More
          </Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 px-12 mt-8 lg:mt-0 flex justify-center">
          <img src="/home/who.jpeg" alt="Who We Are Placeholder" className="w-3/4" />
        </div>
      </section>
    </div>
  );
};

export default Home;
