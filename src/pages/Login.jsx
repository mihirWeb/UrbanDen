import styled from "@emotion/styled"
import { login } from "../Redux/loginCall.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mobile } from "../../responsive.js";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
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
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 10px;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-decoration: none;
`;

const Error = styled.div`
  color: red;
`

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const { isFetchingUser, isError} = useSelector(state => state.user)

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {username, password});
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
          <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          {isError && <Error>*Invalid User Credentials</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link href="/register">CREATE AN ACCOUNT</Link>
          <Button onClick={handleLogin}>LOGIN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;