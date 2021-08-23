import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: #0a192f;
`;

function Discover() {
  return (
    <>
      <Wrapper>
        <Sidebar />
      </Wrapper>
    </>
  );
}

export default Discover;
