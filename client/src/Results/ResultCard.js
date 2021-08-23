import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 20%;
  height: 20%;
  background-color: white;
  margin: 1rem;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
`;

const Name = styled.h3`
  font-family: "Archivo", sans-serif;
  font-size: 1.5rem;
  color: black;
  justify-content: center;
`;

const Location = styled.h4`
  font-family: "Archivo", sans-serif;
  font-size: 1rem;
  color: black;
  justify-content: black;
`;

const Description = styled.h4`
  font-family: "Archivo", sans-serif;
  font-size: 0.5rem;
  color: black;
  text-align: center;
  overflow-y: hidden;
`;

const ResultCard = (props) => {
  console.log(props);
  return (
    <Container>
      <Card>
        <Image src={props.cardData.image.event} />
        <Name>{props.cardData.name}</Name>
        <Location>{props.cardData.location}</Location>
        <Description>{props.cardData.description}</Description>
      </Card>
    </Container>
  );
};

export default ResultCard;
