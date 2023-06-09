import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeCategoriesCard = ({ categoryCard }) => {
  const { category, image, _id } = categoryCard;
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
          <img
            src={image}
            alt=""
            className="object-cover w-full h-full rounded"
          />
        </div>

        <div className="w-56 mt-4 overflow-hidden bg-white rounded-lg shadow-lg md:w-64">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">
            {category}
          </h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200">
            <span className="flex items-center text-gray-800">
              <FaRegStar className="text-orange-400" />
              <FaRegStar className="text-orange-400" />
              <FaRegStar className="text-orange-400" />
              <FaRegStar className="text-orange-400" />
            </span>
            <Link to={`/category/${_id}`}>
              <button className="px-3 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none">
                Show All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategoriesCard;
