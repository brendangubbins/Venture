import React from "react";
// import styled from "styled-components";
import { chakra, Text, Box, Image, Button } from "@chakra-ui/react";
import { CalendarIcon, AtSignIcon, AddIcon } from "@chakra-ui/icons";
import Adventure from "../Images/Adventure.png";

// const Container = styled.div`
//   display: flex;
//   width: 20%;
//   height: 20%;
//   background-color: white;
//   margin: 1rem;
//   justify-content: center;
//   align-items: center;
// `;

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   flex-wrap: wrap;
//   width: 100%;
//   height: 100%;
// `;

// const Image = styled.img`
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 250px;
// `;

// const Name = styled.h3`
//   font-family: "Archivo", sans-serif;
//   font-size: 1.5rem;
//   color: black;
//   justify-content: center;
// `;

// const Location = styled.h4`
//   font-family: "Archivo", sans-serif;
//   font-size: 1rem;
//   color: black;
//   justify-content: black;
// `;

// const Description = styled.h4`
//   font-family: "Archivo", sans-serif;
//   font-size: 0.5rem;
//   color: black;
//   text-align: center;
//   overflow-y: hidden;
// `;

const ResultCard = ({ event }) => {
  console.log("Event page event", event);
  let dateString = event.time_start.substring(0, 10);
  let dateArr = dateString.split("-");
  dateArr.push(dateArr.shift());
  let date = dateArr.join("-");
  return (
    <Box
      w="400px"
      mx="auto"
      bg="white"
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      mt="2rem"
    >
      {/* //Some api responses don't have an image, if they don't make their image the adventure image */}
      {event.image_url ? (
        <Image
          width="100%"
          h="224px"
          fit="cover"
          objectPosition="center"
          src={event.image_url}
          alt="avatar"
          draggable="false"
        />
      ) : (
        <Image
          width="100%"
          h="224px"
          fit="cover"
          objectPosition="center"
          src={Adventure}
          alt="avatar"
          draggable="false"
        />
      )}

      <Box py={1} px={6} h="280px">
        <chakra.h3
          fontFamily="Archivo, sans-serif"
          fontSize="1rem"
          fontWeight="bolder"
          color="black"
          textAlign="center"
        >
          {event.name}
        </chakra.h3>
        <Text fontSize="1rem" py={2} color="black" textAlign="center">
          {event.description}
        </Text>
        <chakra.p fontSize="sm" py={2} color="black" textAlign="left">
          <CalendarIcon marginRight=".5rem" />
          {date}
        </chakra.p>
        <chakra.p fontSize="sm" py={2} color="black" textAlign="left">
          <AtSignIcon /> {event.location.display_address}
        </chakra.p>
        <chakra.p>
          <AddIcon /> <Button>Add</Button>
        </chakra.p>
      </Box>
    </Box>
  );
};

export default ResultCard;
