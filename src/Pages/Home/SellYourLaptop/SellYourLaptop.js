import React from "react";

const SellYourLaptop = () => {
  return (
    <section className="mt-28 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Sell Your Laptop</h2>
            <p className="text-gray-800 mb-4">
              Experience the convenience of selling your laptop through our
              platform. We offer fair pricing, a hassle-free selling process,
              and a wide customer base eager to buy used laptops.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Start Selling
            </button>
          </div>
          <div>
            <img
              src="https://d19ayerf5ehaab.cloudfront.net/assets/store-23211/23211-logo-1460994408.png"
              alt="Sell Your Laptop"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellYourLaptop;
