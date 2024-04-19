
import React, { useEffect, useState } from "react";

export default function Fetchdata() {
  const [blogs, setblogs] = useState(null);

  useEffect(() => {
    console.log("hello this is useEffect");

    fetch("http://localhost:6000//blogs")
      .then((res) => {
  return res.json
      })
    .then((data)=>{
        console.log(data);
    })
     .catch((error)=>{
   console.log(error)
      })
  });

  return (
    <>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        impedit magnam, atque nostrum omnis molestiae labore illum ea sequi
        fugit, debitis illo exercitationem, quia fuga obcaecati architecto
        praesentium sed sapiente!
      </p>
    </>
  );
}
