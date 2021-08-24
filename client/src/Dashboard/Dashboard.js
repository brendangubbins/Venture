import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Trending from './Trending';
import Feed from './Feed';
import Sidebar from '../Sidebar/Sidebar';
import Context from '../Context';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  overflow-y: hidden;
  // margin-left: 5rem;
  // margin-bottom: 2rem;
`;

const UserEvents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 307px;
  margin-top: 101px;
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
  margin: 1rem 1rem 2.5rem 1rem;
`;

const Title = styled.h3`
  color: white;
  font-family: 'Archivo', sans-serif;
  font-size: 3.5rem;
  margin: 0 0 2rem 0;
`;

const Social = styled.div`
  width: 25%;
  /* border: 1px solid red; */
  flex-direction: column;
`;

const Dashboard = () => {
  const { userObject, setUserObject, yelpEvents, setYelpEvents } =
    useContext(Context);

  useEffect(() => {
    axios
      .get('http://localhost:5000/getUser', { withCredentials: true })
      .then((response) => {
        setUserObject(response.data);
        console.log('userObject retrieved in Dashboard', userObject);
      })
      .catch((error) => console.log(error));
  }, []);

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
        {/* <Title>Past Events</Title> */}
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
