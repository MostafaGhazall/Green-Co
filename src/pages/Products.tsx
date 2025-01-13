import React from "react";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
  const categories = [
    {
      title: "Fruits",
      description:
        "Our fruit selection showcases the finest of nature’s bounty, cultivated with precision and care to meet the highest standards of quality. From sun-ripened local produce to carefully sourced exotic varieties, each fruit embodies freshness, vibrant flavors, and exceptional nutritional value. At Egypro, we ensure that every fruit reflects our commitment to sustainable farming practices, meticulous handling, and timely delivery, bringing you the very best of the harvest.",
      image: "/products/fruits.jpg",
      link: "/categories/fruits",
    },
    {
      title: "Vegetables",
      description:
        "Our vegetables selection showcases a rich array of farm-fresh produce, cultivated with expertise and dedication to deliver exceptional quality. From crisp leafy greens to vibrant root crops, every vegetable is nurtured to ensure peak freshness, flavor, and nutritional value. At Egypro, we prioritize sustainable farming practices, meticulous harvesting, and efficient distribution to guarantee that our vegetables reach your table in their finest form, reflecting our commitment to excellence and the environment.",
      image: "/products/vegetables.jpg",
      link: "/categories/vegetables",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Introduction Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#FF8800] mb-4">Egypro Products</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
            Our products are a testament to our dedication to delivering excellence in agricultural produce. From farm to table, we offer a diverse range of fruits, vegetables, herbs, and specialty items that embody freshness, quality, and sustainability. Each product is a result of meticulous cultivation, ethical farming practices, and advanced handling techniques to ensure the highest standards. Explore our offerings and experience the perfect blend of nature’s bounty and our unwavering commitment to providing premium agricultural solutions tailored to your needs.
        </p>
      </section>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="lg:w-3/4">
          {categories.map((category) => (
            <section key={category.title} className="mb-12">
              <h3 className="text-2xl font-bold text-[#FF8800] mb-4">
                {category.title}
              </h3>
              <div className="flex flex-col lg:flex-row items-center">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full lg:w-1/3 rounded-lg shadow-lg mb-4 lg:mb-0 lg:mr-8"
                />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <Link
                    to={category.link}
                    className="px-6 py-2 bg-[#FF8800] text-white font-semibold rounded hover:bg-[#E94D23] transition duration-300"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
