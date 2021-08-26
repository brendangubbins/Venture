import React from 'react';
import { useState, useContext, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styled from 'styled-components';
import { DiscoverEvents } from './DiscoverEvents';
import axios from 'axios';
import Context from '../Context';
import Results from '../Results/Results';
import { Skeleton } from '@chakra-ui/react';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: #0a192f;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 83%;
  margin-left: 307px;
  margin-top: 101px;
  margin-bottom: 1rem;
`;

const CategoriesRow = styled.div`
  display: flex;
  justify-content: center;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 3.5rem;
`;

const CategoryName = styled.h3`
  color: white;
  font-family: 'Archivo', sans-serif;
`;

const CategoryImage = styled.img`
  width: 275px;
  height: 325px;
  transition: 0.5s all ease-out;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 5px #00cba6;
  }
`;

const Heading = styled.h1`
  color: white;
  font-family: 'Archivo', sans-serif;
  margin-top: 3rem;
  margin-bottom: 0;
  font-size: 3rem;
`;

const unixStartDate = Math.round(new Date().getTime() / 1000);

const getLocation = () => {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

const categoryToResults = async (category) => {
  if (!navigator.geolocation) {
    console.log('error; Geolocation API failed.');
  }

  const position = await getLocation();

  const yelpAPIResults = await axios({
    method: 'post',
    url: 'http://localhost:5000/api/search',
    data: {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      type: category,
      startDate: unixStartDate,
      limit: 6,
      radius: 40000,
    },
  });
  //use the yelp api results and store in state
  return yelpAPIResults.data;
};

function Discover() {
  const firstRowEvents = DiscoverEvents.slice(0, 3);
  const secondRowEvents = DiscoverEvents.slice(3, 6);

  const { userObject, setUserObject, yelpEvents, setYelpEvents } =
    useContext(Context);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageCounter, setImageCounter] = useState(0);
  const handleEventClick = async (e, data) => {
    let res = await categoryToResults(data);
    console.log(res);
    setYelpEvents(res.events);
  };

  const setImageLoad = () => {
    setImageCounter(imageCounter + 1);
  };

  useEffect(() => {
    if (imageCounter === 6) {
      setImageLoaded(true);
    }
  }, [imageCounter]);

  if (yelpEvents.length === 0) {
    return (
      <>
        <Wrapper>
          <Sidebar />
          <CategoriesContainer>
            <Heading>Pick Your Category</Heading>
            <CategoriesRow>
              {firstRowEvents.map((data, key) => {
                return (
                  <Category key={key}>
                    <CategoryName>{data.name}</CategoryName>
                    <Skeleton
                      fadeDuration={key === 1 ? 1.5 : 1}
                      isLoaded={imageLoaded}
                    >
                      <CategoryImage
                        onLoad={setImageLoad}
                        onClick={(e) => handleEventClick(e, data.type)}
                        src={data.image}
                      />
                    </Skeleton>
                  </Category>
                );
              })}
            </CategoriesRow>
            <CategoriesRow>
              {secondRowEvents.map((data, key) => {
                return (
                  <Category key={key}>
                    <CategoryName>{data.name}</CategoryName>
                    <Skeleton fadeDuration={1} isLoaded={imageLoaded}>
                      <CategoryImage
                        onLoad={setImageLoad}
                        src={data.image}
                        onClick={(e) => handleEventClick(e, data.type)}
                      />
                    </Skeleton>
                  </Category>
                );
              })}
            </CategoriesRow>
          </CategoriesContainer>
        </Wrapper>
      </>
    );
  } else {
    return <Results yelpEvents={yelpEvents} />;
  }
}

export default Discover;
