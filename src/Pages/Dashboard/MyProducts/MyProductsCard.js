import React from "react";

const MyProductsCard = ({ product }) => {
  console.log(product);
  const {
    picture,
    productName,
    seller_name,
    post_data,
    location,
    original_price,
    resale_price,
    use,
    description,
    productQuality,
    year_of_Purchase,
    number,
  } = product;

  const handleAdvertise = () => {
    console.log("advertise");
  };

  return (
    <div class="mx-auto w-3/4 my-20 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <img class="object-cover w-full h-64" src={picture} alt="Article" />

      <div class="p-6">
        <div>
          <div className="flex justify-between">
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {productName}
            </span>
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Status : Available
            </span>
          </div>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <img
                class="object-cover h-10 rounded-full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              <a
                href="#"
                class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                tabindex="0"
                role="link"
              >
                {seller_name}
              </a>
            </div>
            <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
              {post_data} <br /> Location: {location}
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
            Product Using: {use} <br />
            <small>Phone Number: {number}</small>
          </div>
          <div className="flex justify-between">
            <small>Product Quality: {productQuality}</small>
            <small>Year Of Purchase: {year_of_Purchase}</small>
          </div>
          <div onClick={handleAdvertise} className="flex justify-center mt-10">
            <button className="btn btn-accent w-1/2">Advertise</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductsCard;
