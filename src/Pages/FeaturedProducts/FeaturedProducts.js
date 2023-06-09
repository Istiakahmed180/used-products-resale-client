import React from "react";
import { Transition } from "@headlessui/react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Dell",
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6372/6372667cv20d.jpg",
      features: [
        "Slim and lightweight design",
        "Fast SSD storage for quick boot-up times",
        "Full HD 14-inch touchscreen",
      ],
      price: "$999",
    },
    {
      id: 2,
      name: "Lenovo",
      image:
        "https://5.imimg.com/data5/AD/HL/TO/ANDROID-73331331/1576575915770-jpg-500x500.jpg",
      features: [
        "Powerful Intel Core i7 processor",
        "High-resolution display",
        "Long battery life",
      ],
      price: "$899",
    },
    {
      id: 3,
      name: "HP",
      image:
        "https://cdn1.smartprix.com/rx-iAUGgTVix-w280-h280/hp-victus-15-fb0050a.jpg",
      features: [
        "Fast and efficient AMD Ryzen processor",
        "Large storage capacity",
        "Sleek and lightweight design",
      ],
      price: "$799",
    },
  ];

  return (
    <section className="mt-28 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Transition
              key={product.id}
              as={React.Fragment}
              show={true}
              enter="transition ease-out duration-300 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-200 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="bg-white rounded-lg shadow hover:shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-lg p-5"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <ul className="mb-4">
                    {product.features.map((feature) => (
                      <li key={feature} className="mb-1">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{product.price}</span>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </Transition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
