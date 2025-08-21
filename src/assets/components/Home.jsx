import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Nav></Nav>
      <Link
        to="/Details"
        className=" h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto"
      >
        <div className="card p-5 mr-3 mb-3 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
      </Link>
    </>
  );
};

export default Home;
