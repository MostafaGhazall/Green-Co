import React, { useState } from 'react';

const About: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const certificates = [
    { src: '/about/certificate1.png', alt: 'NSF Global GAP', label: 'NSF Global GAP' },
    { src: '/about/certificate2.png', alt: 'NSF Certificate of Conformity', label: 'NSF Certificate of Conformity' },
    { src: '/about/certificate3.png', alt: 'CERT Inspection Certificate', label: 'CERT Inspection Certificate' },
    { src: '/about/certificate4.png', alt: 'NSF QMSCERT Audit Notification', label: 'NSF QMSCERT Audit Notification' },
    { src: '/about/certificate5.png', alt: 'NSF Global GAP', label: 'NSF Global GAP' },
  ];

  return (
    <div className="bg-gray-50">
      {/* About Us Section */}
      <section className="py-16 px-10 lg:px-36 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-gray-800 mb-8 lg:mb-0">
          <h2 className="text-4xl text-[#fbb449] mb-4">
            <span className="text-[#FF8800] font-bold">Who</span> We Are
          </h2>
          <p className="text-lg leading-relaxed">
            Al Salloum for Agricultural Development & Investment (EGYPRO)
            is a fast-growing, modern company producing, sourcing, packing, and
            exporting high-quality fruits and vegetables of Egyptian origin.
            <br /> <br />
            The company was incorporated in 2007 with 100 reclaimed fedden in Wadi El Notron – West desert of Egypt.
            First started with growing hot pepper ‘in deferent varieties’ soon expanded to grow and export bell pepper,
            followed with green onion, red onion and number of beans varieties.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/about/about-us.jpg"
            alt="About Us"
            className="w-3/4 rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-10 lg:px-36 bg-white text-gray-800">
        <h2 className="text-4xl font-bold text-[#FF8800] mb-6">Vision</h2>
        <p className="text-lg leading-relaxed">
           - We are people who believe in better. Proceeding from this, we work around the clock to follow market trends as well as the latest technology to improve our services.
          <br />
          <br />
           - DIVERSIFICATION IS PART OF OUR PHILOSOPHY
          <br />
          We supply products that are in great demand in foreign markets such as Sweet potatoes, Strawberry, Grapes, Beans, and onions.
          <br />
          <br />
           - From seeding to feeding, produce we handle carries our name. Therefore, they are grown on crop lands certified by global standards, sorted and packed in our modern pack house, then shipped under our supervision. Thus, we guarantee customer satisfaction.
        </p>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-10 lg:px-36 bg-gray-100">
        <h2 className="text-4xl font-bold text-[#FF8800] mb-6">Certificates</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div key={certificate.alt} className="relative group">
              <img
                src={certificate.src}
                alt={certificate.alt}
                className="w-full rounded-lg shadow-md cursor-pointer"
                onClick={() => setModalImage(certificate.src)}
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                {certificate.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div className="relative">
            <img src={modalImage} alt="Certificate" className="w-full max-w-3xl rounded-lg shadow-md" />
            {/* <button
              className="absolute top-2 right-2 text-white text-xl font-bold bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setModalImage(null)}
            >
              &times;
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
