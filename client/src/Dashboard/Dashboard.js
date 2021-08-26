import React, { useEffect, useContext, useState } from 'react';
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
`;

const MainColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  margin-left: 307px;
`;

const UserEvents = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const EventWrapper = styled.div`
  position: relative;
  height: 290px;
  width: 250px;
  margin: 0.5rem 1rem 1rem 2rem;
  box-shadow: 5px 5px 5px black;
`;

const Event = styled.img`
  height: 290px;
  width: 250px;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  transition: 0.1s all ease-out;
  visibility: ${(props) => {
    return props.visible ? 'visible' : 'hidden';
  }};
`;

const EventText = styled.p`
  color: white;
`;

const Title = styled.h3`
  color: white;
  font-family: 'Archivo', sans-serif;
  font-size: 3.5rem;
`;

const Social = styled.div`
  width: 35%;
  margin-top: 2.7rem;
  flex-direction: column;
`;

const Dashboard = () => {
  const { userObject, setUserObject, yelpEvents, setYelpEvents } =
    useContext(Context);

  const [eventSelected, setEventSelected] = useState(null);
  const [userEvents, setUserEvents] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    axios
      .get('http://localhost:5000/getUser', { withCredentials: true })
      .then((response) => {
        setUserObject(response.data);
        setUserEvents(response.data.upcomingEvents);
        console.log(response.data.upcomingEvents);
        // console.log('userObject retrieved in Dashboard', userObject);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <MainColumnContainer>
        <Title>Upcoming Events</Title>
        <UserEvents>
          {userEvents.map((data, key) => {
            return (
              <EventWrapper
                onMouseEnter={() => setEventSelected(key)}
                onMouseLeave={() => setEventSelected(null)}
                key={key}
              >
                <Event src={data.image} />
                <TextWrapper visible={eventSelected === key}>
                  <EventText>{data.title}</EventText>
                  <EventText>{data.description}</EventText>
                </TextWrapper>
              </EventWrapper>
            );
          })}
        </UserEvents>
      </MainColumnContainer>
      <Social>
        <Trending />
        <Feed />
      </Social>
    </Wrapper>
  );
};

export default Dashboard;
