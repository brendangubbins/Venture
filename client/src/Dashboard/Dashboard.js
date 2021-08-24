import React from 'react';
import styled from 'styled-components';
import Trending from './Trending';
import Feed from './Feed';
import Sidebar from '../Sidebar/Sidebar';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  overflow-y: hidden;
  // margin-left: 5rem;
`;

const UserEvents = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Events = styled.div`
  display: flex;
  width: 85%;
  // margin: 2rem 0;
`;

const Event = styled.div`
  background: #c4c4c4;
  height: 300px;
  width: 300px;
  margin: 0 1rem;
`;

const Title = styled.h3`
  color: white;
  font-family: 'Archivo', sans-serif;
  font-size: 3.5rem;
`;

const Social = styled.div`
  width: 25%;
  /* border: 1px solid red; */
  flex-direction: column;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Sidebar />
      <UserEvents>
        <Title>Upcoming Events</Title>
        <Events>
          <Event></Event>
          <Event></Event>
          <Event></Event>
          <Event></Event>
        </Events>
        <Title>Past Events</Title>
        <Events>
          <Event></Event>
          <Event></Event>
          <Event></Event>
          <Event></Event>
        </Events>
      </UserEvents>
      <Social>
        <Trending />
        <Feed />
      </Social>
    </Wrapper>
  );
};

export default Dashboard;
