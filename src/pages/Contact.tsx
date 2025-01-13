import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useContactStore } from "../store/useStore";

const Contact: React.FC = () => {
  const { formData, setFormData, saveFormData } = useContactStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.subject ||
      !formData.message
    ) {
      alert("All fields are required!");
      return;
    }

    // Save form data using the store
    saveFormData();
    alert("Your message has been submitted successfully!");
  };

  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ml-40">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Address Section */}
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-[#FF8800] text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#6d4211]">Address</h3>
                <p className="text-gray-700">
                  Kilo 20 Bilbes Road - Alobbor
                  <br />
                  Egyptian Engineers Association, Gate No. 3 - Egypt
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-[#FF8800] text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#6d4211]">
                  Contacts
                </h3>
                <p className="text-gray-700">+2 (02)26328464</p>
                <a
                  href="mailto:info@egy-pro.com"
                  className="text-gray-700 hover:text-[#FF8800] transition duration-200"
                >
                  info@egy-pro.com
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.1314169224315!2d31.4681146!3d30.2903202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145805028a2d22d1%3A0x5f0fa79de443fa7f!2sEGYPRO!5e0!3m2!1sen!2seg!4v1736630113382!5m2!1sen!2seg"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-4/5 xl:w-3/4">
          <h3 className="text-lg font-semibold text-[#FF8800] mb-4">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData("name", e.target.value)}
                  className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABB47]"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData("email", e.target.value)}
                  className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABB47]"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Mobile */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => setFormData("mobile", e.target.value)}
                  className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABB47]"
                  placeholder="Your Mobile Number"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData("subject", e.target.value)}
                  className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABB47]"
                  placeholder="Subject"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData("message", e.target.value)}
                  className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABB47]"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-[#FF8800] text-white font-semibold rounded hover:bg-[#004F26] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
