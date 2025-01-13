import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";

const months = [
  "Show All",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [selectedMonth, setSelectedMonth] = useState("Show All");
  const [isModalOpen, setModalOpen] = useState(false);

  // Filter products based on the category and selected month
  const categoryProducts = products.filter((product) => {
    const isCategoryMatch =
      product.category.toLowerCase() === category?.toLowerCase();
    const isMonthMatch =
      selectedMonth === "Show All" ||
      product.months?.some((month) => month === selectedMonth);
    return isCategoryMatch && isMonthMatch;
  });

  if (!categoryProducts.length) {
    return (
      <p className="text-center py-16">No products found for this category.</p>
    );
  }

  return (
    <div className="py-16 px-10">
      {/* Category Title */}
      <h1 className="text-3xl font-bold text-[#FF8800] mb-8 capitalize">
        {category}
      </h1>

      {/* Filter Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-4 flex-wrap">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setSelectedMonth(month)}
              className={`px-4 py-2 rounded ${
                selectedMonth === month
                  ? "bg-[#6ABB47] text-white font-semibold"
                  : "bg-white text-[#004F26] border border-gray-300 hover:bg-gray-100"
              } transition duration-200`}
            >
              {month}
            </button>
          ))}
        </div>
        <div>
          {/* Open Modal Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center text-[#FF8800] hover:text-[#004F26] transition duration-200"
          >
            <span className="mr-2">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
            View Calendar
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="shadow-md rounded-md overflow-hidden">
              <img
                src={product.image || "/no-photo.png"}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-screen-md w-full">
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>

            {/* Calendar Image */}
            <img
              src="/portfolio/calendar.png"
              alt="Calendar"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
