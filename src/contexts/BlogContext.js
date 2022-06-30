import axios from "axios";
import React, { createContext, useState } from "react";


const BlogContext = createContext("");

function BlogProvider({children}) {
    const [blogs, setBlogs] = useState([]);

    React.useEffect(() => {
      axios
        .get("http://localhost:5000/api/blogs", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFhZGI4YWU2MjE1NGNhNWM1NGJjYTEiLCJpYXQiOjE2NTUzNjUwNjh9.uSL4SGxTjG7i22Y7xIhTXrrETXq3Gfhob4fKcQbkoDA"
          },
        })
        .then((res) => {
          setBlogs(res.data.data);
          
        });
    }, [])
    const value = {
      blogs,
    };
    return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

export { BlogProvider, BlogContext }