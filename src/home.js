import React, { useState } from "react";
import {
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

export default function Home(props) {
  let InitialbuttonColor = "white";
  const [Color, setColor] = useState(InitialbuttonColor);
  return (
    <Flex direction="column" m={0} alignItems="center">
      <Heading
        fontSize={props.isNotSmallerScreen ? "120px" : "70px"}
        mt={props.isNotSmallerScreen ? "50" : "100"}
        textAlign="center">

        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Software")
              .pauseFor(5000)
              .deleteAll()
              .typeString("Graphic")
              .pauseFor(5000)
              .deleteAll()
              .typeString("Self")
              .start();
          }}
        />
      </Heading>

      <Heading
        fontSize={props.isNotSmallerScreen ? "120px" : "70px"}
        color="blue.400"
        mt="0"
        textAlign="center"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Developer")
              .pauseFor(5000)
              .deleteAll()
              .typeString("Designer")
              .pauseFor(5000)
              .deleteAll()
              .typeString("Learner")
              .start();
          }}
        />
      </Heading>

      <a target="_blank"
      href="https://www.dropbox.com/s/81vu490hh7rbv3f/My%20Resume%20%281%29.pdf?dl=0">
        <Button
          bg="blue.400"
          mt={50}
          h={50}
          w={120}
          borderRadius={10}
          onMouseOver={
            props.isDark ? () => setColor("white") : () => setColor("black")
          }
          onMouseLeave={() => setColor(InitialbuttonColor)}
          borderColor={props.isDark ? "white" : "black"}
          color={Color}
        >
          Hire Me
        </Button>{" "}
      </a>
    </Flex>
  );
}
