import React from "react";
import styled from "styled-components";
import event from "../Images/event.jpg";
import ResultCard from "./ResultCard";
import Sidebar from "../Sidebar/Sidebar";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.header`
  font-family: "Archivo", sans-serif;
  color: white;
  font-size: 3rem;
  text-align: center;
  margin-top: 15rem;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  overflow-x: hidden;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Results = () => {
  //dummy data to populate cards
  let data = [
    {
      name: "Name",
      image: { event },
      location: "Location",
      description:
        "Description text Description text Description textDescription textDescription textDescription text",
      link: "Example.com",
    },
    {
      name: "Name",
      image: { event },
      location: "Location",
      description:
        "Description text Description text Description textDescription textDescription textDescription text",
      link: "Example.com",
    },
    {
      name: "Name",
      image: { event },
      location: "Location",
      description:
        "Description text Description text Description textDescription textDescription textDescription text",
      link: "Example.com",
    },
    {
      name: "Name",
      image: { event },
      location: "Location",
      description:
        "Description text Description text Description textDescription textDescription textDescription text",
      link: "Example.com",
    },
    {
      name: "Name",
      image: { event },
      location: "Location",
      description:
        "Description text Description text Description textDescription textDescription textDescription text",
      link: "Example.com",
    },
    {
      name: "Name",
      image: { event },
      location: "Location",
      description:
        "Description text Description text Description textDescription textDescription textDescription text",
      link: "Example.com",
    },
  ];

  let split1 = [];
  split1.push(data.shift());
  split1.push(data.shift());
  split1.push(data.shift());
  let split2 = [];
  split2.push(data.shift());
  split2.push(data.shift());
  split2.push(data.shift());

  //making mock cards, waiting for api to be finished
  return (
    <Wrapper>
      <Sidebar />
      <ContentWrapper>
        <Title>Your Results</Title>
        <Grid>
          <Container>
            {split1.map((data, index) => {
              return <ResultCard cardData={data} key={index} />;
            })}
          </Container>
          <Container>
            {split2.map((data, index) => {
              return <ResultCard cardData={data} key={index} />;
            })}
          </Container>
        </Grid>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Results;
