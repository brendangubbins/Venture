import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import venture from "../Images/venture.png";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #071221;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #040a13;
  position: fixed;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
`;

const Logo = styled.h3`
  font-family: "Archivo", sans-serif;
  font-size: 3rem;
  color: white;
  margin-left: 1.5rem;
  font-weight: bold;
  transition: 0.2s all ease-out;
  &:hover {
    color: #00cba6;
  }
`;

const ButtonWrap = styled.div`
  margin-right: 2rem;
`;

const AboutButton = styled.button`
  background-color: transparent;
  border-radius: 10px;
  color: white;
  margin-top: 0.5rem;
  font-family: "Archivo", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  width: 8rem;
  padding: 0.5rem;
  border: 2px solid #00cba6;
  transition: 0.5s all ease-out;
  &:hover {
    color: #00cba6;
    box-shadow: 5px 5px 2px 1px #00cba6;
    cursor: pointer;
  }
`;

//renders a navbar on top of every page
const Navbar = () => {
  return (
    <Nav>
      <Wrapper>
        <img src={venture} height="50px" width="50px" />
        <Logo>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Venture
          </Link>
        </Logo>
      </Wrapper>
      <ButtonWrap>
        <Link
          to="/About"
          style={{ textDecoration: "none", color: "white" }}
          target="_blank"
        >
          <AboutButton>About</AboutButton>
        </Link>
      </ButtonWrap>
    </Nav>
  );
};

export default Navbar;
