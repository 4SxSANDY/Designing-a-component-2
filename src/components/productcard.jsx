import React from "react";
import ViewProductButton from "../components/button";

const Productcard = () => {

  const productImage = "../public/img/superbike-pictures-c5wba3jd45ebpcjf.webp";
  const productName = "Sample Product";
  const productPrice = "$49.99";

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-64 text-center border border-gray-200">
      <img
        src={productImage}
        alt="Product"
        className="w-40 h-40 mx-auto rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-700 text-md font-bold">{productPrice}</p>
      <div className="mt-3">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;