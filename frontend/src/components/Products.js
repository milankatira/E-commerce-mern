import React from "react";
import { popularProducts } from "../data";
import styled from "styled-components";
import Product from "./Product";
const Products = () => {
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
