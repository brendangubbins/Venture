import React from "react";
// import styled from "styled-components";
import { Text, Box, Image, Button, Badge } from "@chakra-ui/react";
import { CalendarIcon, AtSignIcon, AddIcon, LinkIcon } from "@chakra-ui/icons";
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

  //Address
  let address = event.location.display_address.join(" ");
  //parse the date to a more readable format
  let dateString = event.time_start.substring(0, 10);
  let dateArr = dateString.split("-");
  dateArr.push(dateArr.shift());
  let date = dateArr.join("-");

  //parse the time to a more readable format
  let timeString = event.time_start.substring(12, 19).split(":");
  console.log("TimeString is ", timeString);
  let part;
  if (parseInt(timeString[0]) > 12) {
    part = "P.M";
  } else {
    part = "A.M";
  }
  timeString[0] = parseInt(timeString % 12).toString();
  timeString.push(part);
  let time = timeString.join(":");
  return (
    <Box
      w="400px"
      mx="auto"
      bg="#071221"
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      mt="2rem"
      transition="0.5s all ease-out"
      _hover={{
        transform: "scale(1.05, 1.05)",
        boxShadow: "5px 5px 5px #00cba6",
      }}
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
          h="220px"
          fit="cover"
          objectPosition="center"
          src={Adventure}
          alt="avatar"
          draggable="false"
        />
      )}

      <Box py={3} px={6} h="300px">
        <Text
          fontFamily="Archivo, sans-serif"
          fontSize=".8rem"
          fontWeight="bold"
          color="white"
          textAlign="center"
        >
          {event.name}
        </Text>
        <Text fontSize=".7rem" py={2} color="white" textAlign="center">
          {event.description}
        </Text>
        <Text fontSize=".8rem" py={2} color="white" textAlign="left">
          <CalendarIcon marginRight=".5rem" />
          {date}
          {time}
        </Text>
        <Text fontSize=".8rem" py={2} color="white" textAlign="left">
          <AtSignIcon /> {address}
        </Text>
        <Text fontSize=".8rem" py={2} color="white" textAlign="left">
          <LinkIcon mr=".5rem" />
          <a href={event.event_site_url} target="_blank" rel="noreferrer">
            Learn more
          </a>
        </Text>
        <Text mt=".3rem">
          <AddIcon color="white" mr=".5rem" />
          <Button bgColor="#00cba6" _hover={{ bgColor: "#00b795" }}>
            Add
          </Button>
        </Text>
      </Box>
    </Box>
  );
};

export default ResultCard;
