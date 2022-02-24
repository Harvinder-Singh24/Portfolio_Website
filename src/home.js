import React from "react";
import {
    Flex,
    Button,
    Spacer,
    IconButton,
    useColorMode,
    Heading, 
    useMediaQuery,
  } from "@chakra-ui/react";


export default function home(props) {
  return (
    <Flex direction="column" m={0} alignItems="center">
      <Heading fontSize={props.isNotSmallerScreen ? "120px" : "70px"} mt="100" textAlign="center">
        Software
      </Heading>
      <Heading
        fontSize={props.isNotSmallerScreen ? "120px" : "70px"}
        color="blue.400"
        mt="0"
        textAlign="center"
      >
        Developer
      </Heading>

      <Button
        bg="blue.400"
        mt={50}
        h={50}
        w={120}
        boxShadow='dark-lg'
        borderRadius={30}
        border="1px"
        borderColor={props.isDark ? "white" : "black"}
        color={props.isDark ? "white" : "white"}
      >
        Hire Me
      </Button>
    </Flex>
  );
};
