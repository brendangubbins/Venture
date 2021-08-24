import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #071221;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #040a13;
`;

const Logo = styled.h3`
  font-family: "Archivo", sans-serif;
  font-size: 3rem;
  color: white;
  margin-left: 1.5rem;
  /* text-decoration: none; */
  transition: 0.2s all ease-out;
  &:hover {
    color: #00cba6;
    /* transform: scale(1.1, 1.1); */
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
      <Logo>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          CTP Hack
        </Link>
      </Logo>
      <ButtonWrap>
        <AboutButton
          to="/About"
          style={{ textDecoration: "none", color: "white" }}
        >
          About
        </AboutButton>
      </ButtonWrap>
    </Nav>
  );
};

export default Navbar;
