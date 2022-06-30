import axios from "axios";
import React, { createContext, useState } from "react";

const OrderContext = createContext("");

function OrderProvider({ children }) {
  const [orders, setOrder] = useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFhZGI4YWU2MjE1NGNhNWM1NGJjYTEiLCJpYXQiOjE2NTUzNjUwNjh9.uSL4SGxTjG7i22Y7xIhTXrrETXq3Gfhob4fKcQbkoDA"
        },
      })
      .then((res) => {
        setOrder(res.data.orders);

      })
      .catch(err => {
        console.log(err);
      });
  }, [])
  const value = {
    orders,
  };
  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export { OrderProvider, OrderContext };
