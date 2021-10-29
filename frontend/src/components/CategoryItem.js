import React from "react";
import styled from "styled-components";
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
      <Title>{item.title}</Title>
      <Button>shop now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top:0;
left:0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Title = styled.h1`
color: white;
font-weight: 800;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white;
  color :black;
  cursor: pointer;
  border:1px solid black;
  border-radius: 5px;
  font-weight: 600;
`
