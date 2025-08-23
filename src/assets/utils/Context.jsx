import React, { useEffect, useState } from "react";
import axios from "./axios.jsx";
const Context = (props) => {
  const [products, setproducts] = useState(null);
  const getproduct = async () => {
    try{
        const {data} = await axios.get("/products");
        setproducts(data);
    }catch(error){
        console.log(error);
    }
  }
  useEffect(() => {
    getproduct();
  },[])
  return <div>{props.children}</div>;
};

export default Context;
