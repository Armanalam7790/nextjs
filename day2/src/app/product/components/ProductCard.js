"use client";

import { use } from "react";


const ProductCard = ({ Product }) => {
    console.log(Product);
    let pro  = use(Product)

    return (
    <div className="grid grid-cols-5 gap-5">
      {/* {pro.map((elem) => {
        return (
          <div key={elem.id} className="p-4 border-2 border-white rounded">
            <h1 onClick={() => console.log("first")}>{elem.title}</h1>
            <p>{elem.price}</p>
          </div>
        );
      })} */}

         {pro.map((elem) => {
        return (
          <div
            key={elem.id}
            className="bg-zinc-900 text-white p-4 rounded-2xl shadow-md hover:scale-105 transition-all duration-300"
          >
            
            {/* Image */}
            <div className="h-40 flex items-center justify-center mb-4 bg-white rounded-lg">
              <img
                src={elem.image}
                alt={elem.title}
                className="h-full object-contain p-2"
              />
            </div>

            {/* Title */}
            <h1 className="text-sm font-semibold mb-2 line-clamp-2">
              {elem.title}
            </h1>

            {/* Price */}
            <p className="text-green-400 font-bold mb-3">
              ${elem.price}
            </p>

            {/* Button */}
            <button className="w-full bg-white text-black py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
              Add to Cart
            </button>

          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
