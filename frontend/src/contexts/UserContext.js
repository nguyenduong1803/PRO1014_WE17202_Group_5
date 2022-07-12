import axios from "axios";
import React, { createContext, useState } from "react";

const UserContext = createContext("");

function UserProvider({ children }) {
  const [user, setUser] = useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFhZGI4YWU2MjE1NGNhNWM1NGJjYTEiLCJpYXQiOjE2NTUzNjUwNjh9.uSL4SGxTjG7i22Y7xIhTXrrETXq3Gfhob4fKcQbkoDA",
        },
      })
      .then((res) => {

        setUser(res.data.user)
      })
      .catch(err => {
        console.log(err);
      })
      ;
  }, []);
  const value = {
    user,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
