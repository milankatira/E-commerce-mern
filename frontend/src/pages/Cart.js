import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping bag(2) </TopText>
            <TopText>your wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/71eiBr2eGZL._UL1500_.jpg " />
                <Details>
                  <ProductName>
                    <b>Product:</b>Lorem ipsum dolor sit.
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>4545648
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>SIZE:</b>51.4{" "}
                  </ProductSize>
                </Details>
              </ProductDetail>

              <Pricedetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$20</ProductPrice>
              </Pricedetail>
            </Product>
          </Info>
          <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          
          
          <SummeryItem>
          <SummeryItemText>sub total</SummeryItemText>
          <SummeryItemPrice>$ 25</SummeryItemPrice>      
          </SummeryItem>
          
          <SummeryItem>
          <SummeryItemText>Estimated Shipping</SummeryItemText>
          <SummeryItemPrice>$ 5.90</SummeryItemPrice>      
          </SummeryItem>
          
          <SummeryItem>
          <SummeryItemText>Discount</SummeryItemText>
          <SummeryItemPrice>$ -.90</SummeryItemPrice>      
          </SummeryItem>
          
          <SummeryItem type="total" > 
          <SummeryItemText  >Total</SummeryItemText>
          <SummeryItemPrice>$ 80</SummeryItemPrice>      
          </SummeryItem>
          
          <Button>Checkout Now </Button>
          </Summary>
          
    
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
  border: 1px solid black;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border:0.5px solid lightgray;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const Pricedetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductSize = styled.div``;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;

`;
const ProductAmount = styled.div`
font-size: 25px;
margin: 5px;
${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 300;
${mobile({ marginBottom: "20px" })}
`;

const SummaryTitle=styled.h1`
font-weight: 200;
`


const SummeryItem=styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type==='total' &&'500'};
font-size: ${props => props.type==='total' &&'24px'}
`


const SummeryItemText=styled.span``


const SummeryItemPrice=styled.span``

const Button=styled.button`
border:1px solid black;
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`