import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci itaque voluptas ipsa ea perferendis expedita.</Description>
      <InputContainer>
        <Input  placeholder='your email'/>
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: #fff;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;
`;
const Button = styled.button`
border:none;
background-color: teal;
border:1px solid black;
color: white;
border-radius: 2px;
flex:1;
`;

const Input = styled.input`
border: none;
flex:8;
padding-left: 20px;
`
