import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products ] = useContext(ProductContext);

  // Extract unique categories
  const distinct_category = [...new Set(products?.map(p => p.category))];



  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <Link
        to="/"
        className="px-5 py-3 rounded-xl border-blue-300 border"
      >
        Add new Product
      </Link>

      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl">Category</h1>

      <div className="w-[80%]">
        {distinct_category.length > 0 ? (
          distinct_category.map((c, i) => (
            <Link
              to={`/?category=${c}`}
              key={i}
              className="mb-3 flex items-center"
            >
              <span className="h-[15px] w-[15px] bg-red-300 rounded-full inline-block mr-2"></span>
              {c}
            </Link>
          ))
        ) : (
          <p className="text-gray-500 mt-3">No categories found</p>
        )}
      </div>
    </nav>
  );
};

export default Nav;
