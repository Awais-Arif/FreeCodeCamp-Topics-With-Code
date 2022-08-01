import React, {useState, useEffect} from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const products = response.json();
    setProducts(products);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [url]);

  return {
    loading,
    products,
  };
};

export default UseFetch;
