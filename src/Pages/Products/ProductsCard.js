import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ProductsCard = ({ product }) => {
  const {
    picture,
    name,
    sellet_picture,
    seller_name,
    post_data,
    location,
    original_price,
    resale_price,
    use,
    seller,
  } = product;
  return (
    <div>
      <div className="max-w-2xl my-14 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="object-cover w-full h-64" src={picture} alt="Article" />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {name}
            </span>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src={sellet_picture}
                />
                <a
                  href="#"
                  className="mx-2 flex items-center font-semibold text-gray-700 dark:text-gray-200"
                  tabIndex="0"
                  role="link"
                >
                  <span className="text-green-600 mr-2">
                    {seller === "verified" && <FaCheckCircle></FaCheckCircle>}
                  </span>
                  {seller_name}
                </a>
              </div>
              <span className="mx-4 text-xs text-gray-600 dark:text-gray-300">
                {post_data} <br />
                Location: {location}
              </span>
            </div>
            <div className="my-2 flex justify-between text-gray-600 dark:text-gray-300">
              <small>
                Original Price : $<del>{original_price}</del>
              </small>{" "}
              <br />
              <span className="font-semibold">
                Resale Price :{" "}
                <span className="text-orange-400">${resale_price}</span>
              </span>
            </div>
            <div className="my-2 text-center text-gray-600 dark:text-gray-300">
              Product Using: {use}
            </div>
            <div className="flex justify-center">
              <button className="btn bg-[#153764] hover:bg-[#394CF3] w-1/2 ">
                purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
