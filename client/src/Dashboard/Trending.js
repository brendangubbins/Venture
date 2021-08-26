import React from "react";
import styled from "styled-components";
import CTP from "../Images/CTP.png";
import mlb from "../Images/mlb.png";
import qc from "../Images/qc.jpg";
import TrendingEvent from "./TrendingEvent";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  margin-top: 5rem;
`;

const Title = styled.h4`
  font-family: "Archivo", sans-serif;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  color: white;
`;

const TrendingWrapper = styled.div`
  width: 70%;
  margin-bottom: 1rem;
`;

//Returns trending data on dashboard
const Trending = () => {
  //trending data to be displayed
  const trendingData = [
    {
      name: "C7 Hackathon",
      description:
        "Event participants will come together in a learning-first-minded event, to create tools that will help us transition back to pre-pandemic life. ",
      image: CTP,
    },
    {
      name: "Welcome Day",
      description:
        "Welcome Day is a fun-filled event for students starting their academic journey at QC.",
      image: qc,
    },
    {
      name: "New York Mets vs New York Yankees",
      description: "The subway series battle for New York",
      image: mlb,
    },
  ];

  return (
    <Wrapper>
      <TrendingWrapper>
        <Title>Explore</Title>
        {trendingData.map((event, index) => {
          return <TrendingEvent data={event} key={index} />;
        })}
      </TrendingWrapper>
    </Wrapper>
  );
};

export default Trending;
