import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Pack House Section */}
      <section className="py-16 px-10 lg:px-36 bg-white">
        <h2 className="text-4xl font-bold text-[#FF8800]">Pack House</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-gray-800 mb-8 lg:mb-0">
            <h1 className="text-lg font-bold leading-relaxed">
              Pack house is the secret word for good finish for fresh box to export.
            </h1>
            <p className="text-lg leading-relaxed">
              That’s what we been working on since 2011, a newly built modern pack house in the right location which was up and running in 2014. The pack house is equipped with the latest technology,
              perfectly located within minutes from main Cairo Airport Cargo and on the main road to Egypt’s main sea port. All this gives our produce the advantage of being kept super fresh as well as shorting transit time to the minimum level.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/portfolio/pack.jpg"
              alt="Pack House"
              className="w-3/4 rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Farms Section */}
      <section className="py-16 px-10 lg:px-36 bg-gray-100">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-gray-800 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-[#FF8800] mb-8">Farms</h2>
            <p className="text-lg leading-relaxed">
                As we believe in sustainable and regular supply throughout the production season, the company owns a 100-fedden farm in Wadi El Notron – West desert Egypt, as well as another farm in Belbais City. On top of that, the company works with some 60 small farm holders to maintain a constant supply to our customers.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/portfolio/farm.png"
              alt="Farms"
              className="w-3/4"
            />
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-16 px-10 lg:px-36 bg-white">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-gray-800 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-[#FF8800] mb-8">Logistics</h2>
            <p className="text-lg leading-relaxed">
              In fresh produce industry, logistics has been always playing an important role. We at Egy-Pro pays attention to logistics as an important key for effective supply chain. Whether transporting crops from farms or to export ports, only our temperature controlled vehicle are used to ensure constant quality for the produce.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/portfolio/logistics.jpg"
              alt="Logistics"
              className="w-3/4 rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Produce Calendar Section */}
      <section className="py-16 px-10 lg:px-36 bg-gray-100">
        <h2 className="text-4xl font-bold text-[#FF8800] mb-8">Produce Calendar</h2>
        <div className="flex justify-center">
          <img
            src="/portfolio/calendar.png"
            alt="Produce Calendar"
            className="w-3/4 rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
