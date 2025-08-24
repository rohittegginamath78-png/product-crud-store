import React, { useEffect, useState } from "react";
import axios from "./axios.jsx";
export const ProductContext = React.createContext();
const Context = (props) => {
  const [products, setproducts] = useState([]);
  const getproduct = async () => {
    try {
      const { data } = await axios.get("/products");
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getproduct();
  }, []);
  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
