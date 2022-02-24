import {Flex, Heading, Text, Box, Container , useMediaQuery} from "@chakra-ui/react";
import React from "react";

export default function About(props) {
  const [isTablet] = useMediaQuery("(min-width:1000px)");

  return (
    <>
      <Flex direction="column" mt={150} mb={50} alignItems="center">
        <Heading>About</Heading>
        <Box
       
          border="1px"
          boxShadow="dark-lg"
          borderColor={props.isDark ? "white" : "black"}
          borderRadius={30}
          bg={props.isDark ? "#EDEEEE" : "#E0E0E0"}
          w={{
            sm: 450,
            md: 700,
            lg: 900,
            xl: 1080
          }}
          mt={50}
          h={600}
        >
          <Flex direction= {isTablet ? "row" : "column"} alignItems="center" >
            <Container mt={100} p={isTablet ? 10 : null} >
              <Text color="black" fontSize="lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic type esetting, remaining essentially unchanged. It
                was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </Container>
            {isTablet ?<Box
              borderRadius={30}
              bg="black"
              w={300}
              h={400}
              mt={100}
              mr={50}
              alignItems="center"
            >
              <Flex direction="column" alignItems="center" >
                <img src="./images/modal.png" alt="" />

                <Flex direction="row" alignItems="center" columnGap={30}>
                  <a href="https://github.com/Hackersvilla">
                    <img
                      src="./images/github.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/coder-boy/">
                    <img
                      src="./images/linkedin.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                  <a href="https://twitter.com/ExtractsNft">
                    <img
                      src="./images/twitter.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                </Flex>
              </Flex>
            </Box> : <Flex direction="row" alignItems="center" columnGap={30}>
                  <a href="https://github.com/Hackersvilla">
                    <img
                      src="./images/github.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/coder-boy/">
                    <img
                      src="./images/linkedin.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                  <a href="https://twitter.com/ExtractsNft">
                    <img
                      src="./images/twitter.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                </Flex>}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
