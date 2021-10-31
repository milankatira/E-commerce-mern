import React, { useState, useEffect } from "react";
import { popularProducts } from "../data";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [product, setProduct] = useState([]);
  const [filterproduct, setFilterproduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/product");
        console.log(res);
      } catch (err) {
        console.log("error ++++++++++++");
      }
      getProducts();
    };
  }, [cat]);
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
