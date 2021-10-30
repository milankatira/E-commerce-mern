import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>

          <Input placeholder="username" />

          <Input placeholder="password" />
          
           <Button>Login</Button>
           
           <Link>forgot password</Link>
           
           <Link>create an account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/9967675/pexels-photo-9967675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: 1px solid black;
  color: white;
  background-color: teal;
  padding: 15px 20px;
  cursor: pointer;
`;


const Link=styled.a`
margin: 5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
margin-bottom: 10px;
`