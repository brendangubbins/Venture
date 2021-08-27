import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Adventure from "../Images/Adventure.png";
import axios from "axios";
import Context from "../Context";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #0a192f;
`;

const LeftAlign = styled.div`
  flex-direction: column;
  width: 50%;
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  bottom: 0;
  top: 0;
  left: 0;
  right: auto;
  margin: auto;
`;

const Header = styled.h1`
  font-family: "Archivo", sans-serif;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 4.5rem;
  margin-top: 5rem;
`;

const Description = styled.h3`
  font-family: "Archivo", sans-serif;
  color: white;
  text-align: center;
  font-size: 2rem;
`;

const ButtonWrap = styled.div`
  text-align: center;
`;

const LoginButton = styled.button`
  font-family: "Archivo", sans-serif;
  background-color: #00cba6;
  border-radius: 20px;
  color: white;
  margin-top: 1.5rem;
  font-size: 1.5rem;
  width: 175px;
  padding: 1rem;
  border: 2px solid #00cba6;
  transition: 0.5s all ease-out;
  &:hover {
    transform: translateY(-0.5rem);
    filter: drop-shadow(0 0 0.75rem #346e93);
    cursor: pointer;
  }
`;

const RightAlign = styled.div`
  justify-content: flex-end;
  width: 50%;
`;

const ImageContainer = styled.img`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10rem;
`;

//renders the landing page
const Landing = () => {
  const { userObject, setUserObject } = useContext(Context);

  useEffect(() => {
    console.log("userObject retrieved in Landing", userObject);
  }, []);

  const handleGoogleLogin = () => {
    axios
      .get("https://www.venture-ctp.herokuapp.com/getUser", { withCredentials: true })
      .then((response) => {
        if (response.data) {
          setUserObject(response.data);
          window.open("https://www.venture-ctp.herokuapp.com/Dashboard", "_self");
        } else {
          window.open("https://www.venture-ctp.herokuapp.com/auth/google", "_self");
        }
      })
      .catch((error) => {
        console.log("error logging in", error);
      });
  };

  return (
    <Wrapper>
      <LeftAlign>
        <TextWrapper>
          <Header>Your Next Adventure Awaits</Header>
          <Description>Find events near you</Description>
          <ButtonWrap>
            <LoginButton onClick={handleGoogleLogin}>Login</LoginButton>
          </ButtonWrap>
        </TextWrapper>
      </LeftAlign>
      <RightAlign>
        <ImageContainer src={Adventure} />
      </RightAlign>
    </Wrapper>
  );
};

export default Landing;
