import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Orders from "../components/orders/Orders";

let cartFromLocalStorage = [];

if (typeof window !== "undefined") {
  cartFromLocalStorage = JSON.parse(localStorage.getItem("product") || "[]");
}

function Order() {
  let d = useSelector((state) => state.cart.product);
  const [product, setProduct] = useState([...cartFromLocalStorage, ...d]);

  React.useEffect(() => {
    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  return <Orders />;
}

export default Order;
