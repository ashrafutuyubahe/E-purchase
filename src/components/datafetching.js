import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Fetchdata() {
  const [blogs, setBlogs] = useState(null);

  //data fetching using Axios library

  useEffect(() => {
    axios
      .get("http://localhost:7600/blogs")
      .then((response) => {
        console.log(response.data);
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //data fetching using fetching API
  //   useEffect(() => {
  //     console.log("hello this is useEffect");

  //     fetch("http://localhost:7600/blogs")
  //       .then((res) => res.json())
  //                .then((data) => {
  //console.log(data);
  //          setBlogs(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  return (
    <>
    <div className="container flex m-2">
    {blogs &&
        blogs.map((blog) => (
          <div key={blog._id} className=" m-2 bg-info" >
            <h2>{blog.data.blogtitle}</h2>
            <p>{blog.data.blogdescription}</p>
            <p>{blog.data.authorname}</p>
            <p>{blog.data.date}</p>
          </div>
        ))}
    </div>
    
    </>
  );
}
