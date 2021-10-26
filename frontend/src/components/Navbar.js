import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
   
        <Searchcontainer>
        <Input/>
          <SearchIcon />
        </Searchcontainer>
        </Left>
        <Centre><Logo>myshop</Logo></Centre>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  
`;
const Centre = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
`;

const Searchcontainer = styled.div`
  border: 1 px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Input = styled.input`
border: none;

`
const Logo = styled.h1`
font-weight: bold;
`