import React from "react";
import styled from "styled-components";

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
`;

const ButtonWrap = styled.div`
  margin-right: 2rem;
`;

const AboutButton = styled.button`
  background-color: transparent;
  border-radius: 10px;
  font-family: "Archivo", sans-serif;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  width: 8rem;
  /* margin-top: 0.5rem; */
  padding: 0.5rem;
  border: 2px solid #00cba6;
`;

//renders a navbar on top of every page
const Navbar = () => {
  return (
    <Nav>
      <Logo>CTP Hack</Logo>
      <ButtonWrap>
        <AboutButton>About</AboutButton>
      </ButtonWrap>
    </Nav>
  );
};

export default Navbar;
