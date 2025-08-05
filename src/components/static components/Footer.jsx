import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-50 py-10 px-5 sm:px-10 lg:px-20 rounded-t-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Newsletter</h4>
          <p className="text-sm text-gray-700 mb-4">
            Receive updates on our latest projects and success stories.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold text-lg mb-3">About Us</h4>
          <p className="text-sm text-gray-700 mb-4">
            Earth Renew is committed to planting trees in areas most affected by deforestation and pollution, prioritizing
            sustainable solutions for a healthier planet.
          </p>
          <div className="flex gap-3">
            <FaFacebookF className="text-green-700 hover:text-green-900 cursor-pointer" />
            <FaInstagram className="text-green-700 hover:text-green-900 cursor-pointer" />
            <FaTwitter className="text-green-700 hover:text-green-900 cursor-pointer" />
            <FaYoutube className="text-green-700 hover:text-green-900 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Link</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Work</a></li>
            <li><a href="#" className="hover:underline">Green Effect</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>📍 Kwara State University,Malete, Earth</li>
            <li>✉️ contact@ummi.org</li>
            <li>📞 +2348167137812</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-200 pt-5 text-center text-sm text-gray-600">
        © 2025 Earth Renew. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
