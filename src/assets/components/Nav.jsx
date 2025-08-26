import React, { useContext } from "react";

const Nav = () => {
  const [products] = useContext(ProductContext);
  const distinct_category = products && products.reduce((acc, cv) => []);

  return (
    <nav className="w-[18%] h-full bg-white shadow-md flex flex-col items-center pt-6 rounded-r-2xl">
      {/* Button */}
      <a
        href="/"
        className="w-[80%] text-center px-5 py-3 mb-5 rounded-xl bg-blue-500 text-white font-semibold 
        shadow-sm hover:bg-blue-600 transition-all"
      >
        + Add Product
      </a>

      {/* Divider */}
      <hr className="w-[80%] my-3 border-gray-300" />

      {/* Category Title */}
      <h1 className="text-xl font-bold text-gray-700 mb-4">Categories</h1>

      {/* Category List */}
      <ul className="w-[80%] text-gray-600 font-medium">
        <li className="mb-3 flex items-center cursor-pointer hover:text-red-500">
          <span className="h-[14px] w-[14px] bg-red-400 rounded-full inline-block mr-3"></span>
          Electronics
        </li>
        <li className="mb-3 flex items-center cursor-pointer hover:text-blue-500">
          <span className="h-[14px] w-[14px] bg-blue-400 rounded-full inline-block mr-3"></span>
          Clothing
        </li>
        <li className="mb-3 flex items-center cursor-pointer hover:text-green-500">
          <span className="h-[14px] w-[14px] bg-green-400 rounded-full inline-block mr-3"></span>
          Furniture
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
