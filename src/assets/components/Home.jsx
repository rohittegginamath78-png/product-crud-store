import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <Nav />
      <div className="h-full w-[85%] p-11 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {products && products.length > 0 ? (
          products.map((p, i) => (
            <Link
              key={i}
              to={`/details/${p.id}`}
              className="card p-5 mr-3 mb-3 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1>{p.title}</h1>
            </Link>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
};

export default Home;
