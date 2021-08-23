import React from "react";
import styled from "styled-components";
import Trending from "./Trending";
import Feed from "./Feed";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  overflow-y: hidden;
  // margin-left: 5rem;
`;

const Social = styled.div`
  width: 25%;
  /* border: 1px solid red; */
  flex-direction: column;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Social>
        <Trending />
        <Feed />
      </Social>
    </Wrapper>
  );
};

export default Dashboard;
