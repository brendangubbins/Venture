import React from "react";
import styled from "styled-components";
import Angie from "../Images/Angie.JPG";
import Charles from "../Images/Charles.jpg";
import Tyler from "../Images/Tyler.jpg";
import FeedAlert from "./FeedAlert";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
`;

const FeedWrapper = styled.div`
  width: 80%;
  height: 500px;
  margin-bottom: 1rem;
`;

const Title = styled.h4`
  margin-top: 0.5rem;
  color: white;
  font-size: 1.5rem;
  font-family: "Archivo", sans-serif;
`;

const Content = styled.div`
  flex-direction: row;
  width: 100%;
`;

const feedData = [
  {
    name: "Angie",
    status: "is attending a wine tasting room in the city",
    image: Angie,
  },
  {
    name: "Charles",
    status: "is at the New York Mets game ",
    image: Charles,
  },
  {
    name: "Tyler",
    status: "got tickets to The Lion King on Broadway ",
    image: Tyler,
  },
];
const Feed = () => {
  return (
    <Wrapper>
      <FeedWrapper>
        <Title>Feed</Title>
        <Content>
          {feedData.map((event, index) => {
            return <FeedAlert data={event} key={index} />;
          })}
        </Content>
      </FeedWrapper>
    </Wrapper>
  );
};

export default Feed;
