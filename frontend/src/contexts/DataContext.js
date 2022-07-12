import axios from "axios";
import React, { createContext, useState } from "react";

const DataContext = createContext("");

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [bill, setBill] = useState([
    { name: "name", payload: "" ,notify:"không"},
    { name: "phone", payload: "" ,notify:""},
    { name: "city", payload: "" ,notify:""},
    { name: "district", payload: "" ,notify:""},
    { name: "commune", payload: "" ,notify:""},
    { name: "detail", payload: "" ,notify:""},
  ]);
  const [renderProduct, setRenderProduct] = useState({ type: "", payload: "" });
  const [carts, setCarts] = useState(() => {
    const newData = JSON.parse(localStorage.getItem("cart")) || [];
    return newData;
  });
  const action = {
    renderProduct,
    setRenderProduct,
  };
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/products", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const value = {
    data,setData,
    action,
    carts,
    setCarts,
    bill,
    setBill,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export { DataProvider, DataContext };
