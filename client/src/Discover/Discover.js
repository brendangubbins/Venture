import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styled from 'styled-components';
import { DiscoverEvents } from './DiscoverEvents';

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
`;

const CategoriesRow = styled.div`
  display: flex;
  justify-content: center;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
`;

const CategoryName = styled.h3`
  color: white;
  font-family: 'Archivo', sans-serif;
`;

const CategoryImage = styled.img`
  width: 250px;
  height: 350px;

  &:hover {
    cursor: pointer;
  }
`;

const Heading = styled.h1`
  color: white;
  font-family: 'Archivo', sans-serif;
  margin-top: 3rem;
`;

function Discover() {
  const firstRowEvents = DiscoverEvents.slice(0, 3);
  const secondRowEvents = DiscoverEvents.slice(3, 6);

  const handleEventClick = (e, data) => {
    console.log(data);
  };

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
                  <CategoryImage
                    onClick={(e) => handleEventClick(e, data.type)}
                    src={data.image}
                  />
                </Category>
              );
            })}
          </CategoriesRow>
          <CategoriesRow>
            {secondRowEvents.map((data, key) => {
              return (
                <Category key={key}>
                  <CategoryName>{data.name}</CategoryName>
                  <CategoryImage src={data.image} />
                </Category>
              );
            })}
          </CategoriesRow>
        </CategoriesContainer>
      </Wrapper>
    </>
  );
}

export default Discover;
