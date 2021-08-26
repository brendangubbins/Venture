import styled from "styled-components";
import ResultCard from "./ResultCard";
import Sidebar from "../Sidebar/Sidebar";
import { SimpleGrid, Flex } from "@chakra-ui/layout";

const Title = styled.header`
  font-family: "Archivo", sans-serif;
  color: white;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 307px;
  margin-top: 101px;
`;

const Results = ({ yelpEvents }) => {
  console.log("These are my yelp events in results", yelpEvents);

  //render event data on cards
  return (
    <Flex>
      <Sidebar />
      <ContentWrapper>
        <Title>Pick your next adventure</Title>
        <SimpleGrid columns="3" spacing={5} mb="3rem">
          {yelpEvents.map((data, index) => {
            return <ResultCard event={data} key={index} />;
          })}
        </SimpleGrid>
      </ContentWrapper>
    </Flex>
  );
};

export default Results;
