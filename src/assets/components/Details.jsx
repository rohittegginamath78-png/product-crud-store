import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-[70%] flex h-full justify-between m-auto p-[10%] ">
      <img
        className="object-contain h-[80%] w-[40%]"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        alt=""
      />
      <div className="content bg-red-10@ w-[50%]">
        <h1 className="text-4xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="text-zinc-400 my-5">men's clothing</h3>
        <h2 className="text-red-200">$ 109.95</h2>
        <p>description</p>
        <Link>Edit</Link>
        <Link>Delete</Link>
      </div>
    </div>
  );
};

export default Details;
