import React from "react";
import {
  Flex,
  Text,
  Box,
  Center,
  Link,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import celebratingTogether from "../Images/celebratingTogether.png";
import javascript from "../Images/javascript.svg";
import react from "../Images/react.svg";
import google from "../Images/google.svg";
import nodejs from "../Images/nodejs.svg";
import mongodb from "../Images/mongodb.svg";
import express from "../Images/express.svg";
import Chakra from "../Images/Chakra.png";
import StyledComponents from "../Images/StyledComponents.png";
import passport from "../Images/passport.png";

//Renders the About page
const About = () => {
  //all devs for the project
  let devs = [
    {
      name: "Abedin Kadir",
      link: "https://github.com/auto-kad",
    },
    {
      name: "Brendan Gubbins",
      link: "https://github.com/brendangubbins",
    },
    {
      name: "Edward Paez",
      link: "https://github.com/epaez1996",
    },
    {
      name: "Harjit Liyal",
      link: "https://github.com/Slaeh",
    },
  ];

  //All technologies used
  let icons = [
    {
      name: "JavaScript",
      image: javascript,
    },
    {
      name: "React",
      image: react,
    },
    {
      name: "ChakraUI",
      image: Chakra,
    },
    {
      name: "Styled-Components",
      image: StyledComponents,
    },
    {
      name: "Node.Js",
      image: nodejs,
    },
    {
      name: "Google",
      image: google,
    },
    {
      name: "MongoDB",
      image: mongodb,
    },
    {
      name: "Express",
      image: express,
    },
    {
      name: "Passport",
      image: passport,
    },
  ];
  return (
    <Flex flexDirection="column" justifyContent="center" width="100%">
      <Flex flexDirection="row" justifyContent="center">
        <Box mt="6rem" width="30%" height="30%">
          <img src={celebratingTogether} alt="two people celebrating" />
        </Box>
        <Box width="50%" height="30%">
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text
              mt="9rem"
              color="white"
              fontFamily="Archivo, sans-serif"
              fontSize="4rem"
              textAlign="center"
            >
              Welcome to Venture
            </Text>
            <Box w="75%" textAlign="center">
              <Center>
                <Text
                  mt="2rem"
                  color="white"
                  fontFamily="Archivo"
                  fontSize="1.5rem"
                  textAlign="center"
                >
                  As places begin to open up, there are more opportunities for
                  us to leave virtual events behind, and begin doing the things
                  we love once more. Venture is designed to help people return
                  to normal by searching for in-person events in their area. Our
                  application allows users to search for nearby concerts,
                  festivals, performing arts, and much more. It also saves each
                  user's events as well as all of the attendees to each event.
                </Text>
              </Center>
            </Box>
          </Flex>
          <Text
            color="white"
            fontFamily="Archivo"
            fontSize="1.5rem"
            textAlign="center"
            mt="2rem"
          >
            Made by{" "}
            <Link
              href="https://github.com/epaez1996/ctp-hack"
              target="_blank"
              _hover={{ textDecoration: "none", color: "#00cba6" }}
            >
              Team Passione
            </Link>
          </Text>
          <Box>
            {/* Everyone who worked on the project */}
            {devs.map((dev, index) => {
              return (
                <Center key={index}>
                  <Link
                    href={dev.link}
                    target="_blank"
                    mt=".5rem"
                    fontFamily="Archivo"
                    color="white"
                    fontSize="1rem"
                    _hover={{ color: "#00cba6" }}
                  >
                    {dev.name}
                  </Link>
                </Center>
              );
            })}
          </Box>
        </Box>
      </Flex>
      <Box width="100%">
        <Center>
          <Flex mt="2rem">
            {/* All technologies used in the project */}
            {icons.map((icon, index) => {
              return (
                <motion.div whileHover={{ scale: 1.1 }} key={index}>
                  <Tooltip
                    hasArrow
                    label={icon.name}
                    bg="white"
                    color="black"
                    arrowSize={5}
                    gutter="20"
                  >
                    <Image src={icon.image} boxSize="70px" m="2rem" />
                  </Tooltip>
                </motion.div>
              );
            })}
          </Flex>
        </Center>
      </Box>
    </Flex>
  );
};

export default About;
