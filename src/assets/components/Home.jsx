import React, { useContext } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { useEffect, useState } from "react";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1] || "");
  console.log("Category from URL:", category);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const getProductsCategory = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category && category.length > 0) {
      getProductsCategory();
    } else {
      // fallback to all products if no category in URL
      setFilteredProducts(products);
    }
  }, [category]);
  return (
    <>
      <Nav></Nav>
      <div></div>
      <div className=" h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts.map((p, i) => (
          <Link
            key={i}
            to={`/details/${p.id}`}
            className="card p-5 mr-3 mb-3 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center"
          >
            <div
              className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            ></div>
            <h1>{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
