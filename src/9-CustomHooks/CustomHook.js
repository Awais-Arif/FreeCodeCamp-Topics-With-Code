import React, {useState, useEffect} from "react";
// import UseFetch from "./UseFetch";

const url = "https://course-api.com/javascript-store-products";

const CustomHook = () => {
  const {loading, products} = UseFetch(url);
  // console.log(products);
  return (
    <div>
      <h2>{loading ? "Loading..." : "data"}</h2>
    </div>
  );
};

export default CustomHook;
