import React from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const Slider = () => {
  const handleclick = (direction) => {};
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleclick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1502389614483-e475fc34407e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
          </ImageContainer>

          <InfoContainer>
            <Title>kmkj</Title>
            <Decs>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              fuga sequi quasi ea, laudantium asperiores!
            </Decs>
            <Button>shop now</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="f5fafd">
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1502389614483-e475fc34407e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
          </ImageContainer>

          <InfoContainer>
            <Title>kmkj</Title>
            <Decs>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              fuga sequi quasi ea, laudantium asperiores!
            </Decs>
            <Button>shop now</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="f5fafd">
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1502389614483-e475fc34407e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
          </ImageContainer>

          <InfoContainer>
            <Title>kmkj</Title>
            <Decs>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              fuga sequi quasi ea, laudantium asperiores!
            </Decs>
            <Button>shop now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right" onClick={() => handleclick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX();
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vh;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Decs = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 28px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid black;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  margin: auto;
  opacity: 0.5;
`;
