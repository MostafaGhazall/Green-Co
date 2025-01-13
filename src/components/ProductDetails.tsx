import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p className="text-center py-16">Product not found.</p>;
  }

  return (
    <div className="py-16 px-6 lg:px-20">
      {/* Product Title */}
      <h1 className="text-3xl font-bold text-[#FF8800] mb-8">{product.name}</h1>

      {/* Image and Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <img
          src={product.image || '/no-photo.png'}
          alt={product.name}
          className="w-full h-96 object-contain rounded-lg shadow-md"
        />

        {/* Product Info */}
        <div>
          <h2 className="text-2xl font-semibold text-[#004F26] mb-4">
            Product Description
          </h2>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>

          <h3 className="text-xl font-semibold text-[#004F26] mb-2">
            Quality Indication:
          </h3>
          <p className="text-gray-700 mb-4">{product.quality}</p>

          <h3 className="text-xl font-semibold text-[#004F26] mb-2">
            Optimum Conditions:
          </h3>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li>Temperature: {product.conditions.temperature}</li>
            <li>Humidity: {product.conditions.humidity}</li>
            <li>Storage: {product.conditions.storage}</li>
          </ul>
        </div>
      </div>

      {/* Categories and Months */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold text-[#004F26] mb-4">
            Categories
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <span className="text-[#6ABB47] text-lg mr-2">✓</span>
              {product.category}
            </li>
          </ul>
        </div>

        {/* Months */}
        <div>
          <h3 className="text-xl font-semibold text-[#004F26] mb-4">Months</h3>
          <ul className="flex flex-wrap gap-4">
            {product.months?.map((month) => (
              <li
                key={month}
                className="flex items-center text-gray-700 space-x-2"
              >
                <span className="text-[#6ABB47] text-lg">✓</span>
                <span>{month}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Nutritional Value Table */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-[#004F26] mb-4">
          Nutritional Value
        </h3>
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              {Object.keys(product.nutrition).map((key) => (
                <th
                  key={key}
                  className="border border-gray-300 px-4 py-2 font-medium text-gray-700"
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(product.nutrition).map((value, index) => (
                <td
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-gray-600"
                >
                  {value}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;