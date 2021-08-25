import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import Trending from './Trending';
import Feed from './Feed';
import Sidebar from '../Sidebar/Sidebar';
import Context from '../Context';
import axios from 'axios';
import EventImage from '../Images/event.jpg';

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

const EventWrapper = styled.div`
  position: relative;
  height: 290px;
  max-width: 250px;
  margin: 1rem 1rem 2.5rem 1rem;
`;

const Event = styled.img`
  // background: #c4c4c4;
  height: 290px;
  max-width: 250px;
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
    return props.visibility ? 'visible' : 'hidden';
  }};
`;

const EventText = styled.p`
  color: white;
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

  const [eventSelected, setEventSelected] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:5000/getUser', { withCredentials: true })
      .then((response) => {
        setUserObject(response.data);
        console.log('userObject retrieved in Dashboard', userObject);
      })
      .catch((error) => console.log(error));
  }, []);

  const dummyImages1 = [
    {
      title: 'Cap image',
      description: 'A Cap image',
      image: EventImage,
    },
    {
      title: 'Cap image',
      description: 'A Cap image',
      image: EventImage,
    },
    {
      title: 'Cap image',
      description: 'A Cap image',
      image: EventImage,
    },
    {
      title: 'Cap image',
      description: 'A Cap image',
      image: EventImage,
    },
  ];

  const dummyImages2 = [
    {
      title: 'Cap image',
      description: 'A Cap image',
      image: EventImage,
    },
    {
      title: 'Cap image',
      description: 'A Cap image',
      image: EventImage,
    },
    {
      title: 'Cap image',
      description: 'A Cap image',
      image: EventImage,
    },
    {
      title: 'Cap image',
      description: 'A Cap image',
      image: EventImage,
    },
  ];

  return (
    <Wrapper>
      <Sidebar />
      <UserEvents>
        <Title>Upcoming Events</Title>
        <Events>
          {dummyImages1.map((data, key) => {
            return (
              <EventWrapper
                onMouseEnter={() => setEventSelected(key)}
                onMouseLeave={() => setEventSelected(null)}
              >
                <Event src={data.image} key={key} />
                <TextWrapper visibility={eventSelected === key}>
                  <EventText>{data.title}</EventText>
                  <EventText>{data.description}</EventText>
                </TextWrapper>
              </EventWrapper>
            );
          })}
        </Events>
        {/* <Title>Past Events</Title> */}
        <Events>
          {dummyImages2.map((data, key) => {
            return (
              <EventWrapper
                onMouseEnter={() => setEventSelected(key + 4)}
                onMouseLeave={() => setEventSelected(null)}
              >
                <Event src={data.image} key={key} />
                <TextWrapper visibility={eventSelected === key + 4}>
                  <EventText>{data.title}</EventText>
                  <EventText>{data.description}</EventText>
                </TextWrapper>
              </EventWrapper>
            );
          })}
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
