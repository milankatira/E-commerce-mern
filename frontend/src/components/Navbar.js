import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
import { mobile } from "../responsive";
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>

          <Searchcontainer>
            <Input placeholder="search" />
            
            <SearchIcon  style={{color:'gray',fontSize:16}}/>
          </Searchcontainer>
        </Left>
        <Centre>
          <Logo>myshop</Logo>
        </Centre>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge color="secondary" badgeContent={99}>
              <ShopOutlinedIcon  style={{
              color: "gray",
              fontSize:'16px'
              }}/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 60px;
  padding-bottom: 25px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}

`;

const Searchcontainer = styled.div`
  border: 2px solid red;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}

`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Centre = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
