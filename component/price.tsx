"use client";
import React from 'react';

const PricingCards = () => {
  return (
    <div className="flex md:justify-center items-center min-h-screen bg-gray-100 p-4 overflow-x-auto no-scrollbar">
      <div className="flex space-x-6">
        {/* Standard Logo Design */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-72 transform hover:scale-105 transition duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold">S</span>
            </div>
          </div>
          <h3 className="text-center text-gray-700 font-semibold mb-2">STANDARD LOGO DESIGN</h3>
          <p className="text-3xl font-bold text-center text-purple-600 mb-4">$500</p>
          <p className="text-center text-gray-600 mb-4">
            I design the logo that reflects the identity of your brand in a professional and unique way.
          </p>
          <ul className="text-gray-600 mb-6">
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> 1 logo variation</li>
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> 4 revisions</li>
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> Color palette</li>
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> AI, pdf, svg, png delivery</li>
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> Est. 3 days of delivery</li>
          </ul>
          <button className="w-full bg-purple-100 text-purple-600 font-semibold py-2 rounded-lg hover:bg-purple-200 transition duration-300">
            Click here to get started!
          </button>
        </div>

        {/* Professional Logo Design */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-72 transform hover:scale-105 transition duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold">P</span>
            </div>
          </div>
          <h3 className="text-center text-gray-700 font-semibold mb-2">PROFESSIONAL LOGO DESIGN</h3>
          <p className="text-3xl font-bold text-center text-purple-600 mb-4">$899</p>
          <p className="text-center text-gray-600 mb-4">
            I design the logo that reflects the identity of your brand in a professional and unique way.
          </p>
          <ul className="text-gray-600 mb-6">
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> 2 logo variations</li>
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> 10 revisions</li>
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> Color palette</li>
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> AI, pdf, svg, png delivery</li>
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> Est. 7 days of delivery</li>
          </ul>
          <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-300">
            Click here to get started!
          </button>
        </div>

        {/* Premium Logo Design */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-72 transform hover:scale-105 transition duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold">P</span>
            </div>
          </div>
          <h3 className="text-center text-gray-700 font-semibold mb-2">PREMIUM LOGO DESIGN</h3>
          <p className="text-3xl font-bold text-center text-purple-600 mb-4">$1499</p>
          <p className="text-center text-gray-600 mb-4">
            I design the logo that reflects the identity of your brand in a professional and unique way.
          </p>
          <ul className="text-gray-600 mb-6">
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> 5 logo variations</li>
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> Unlimited revisions</li>
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> Color palette</li>
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> AI, pdf, svg, png delivery</li>
            <li className="flex items-center mb-2"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span> Est. 14 days of delivery</li>
          </ul>
          <button className="w-full bg-purple-100 text-purple-600 font-semibold py-2 rounded-lg hover:bg-purple-200 transition duration-300">
            Click here to get started!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;

