import {
  Flex,
  Heading,
  Container,
  WrapItem,
  Wrap,
  Avatar,
  Box,
  Text,
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { RiAccountCircleFill } from "react-icons/ri";

export default function About(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Flex direction="column" mt={150}>
        <Flex direction="row" justifyContent="center">
          <img
            src={
              props.isDark
                ? "./icons/dark_mode_about.png"
                : "./icons/white_mode_about.png"
            }
            alt=""
            width="40"
            height="40"
          />
          <Box width="3"></Box>
          <Heading textAlign="center">About</Heading>
          <Box width="3"></Box>
          <Heading textAlign="center" color="#4299E1">
            Me
          </Heading>
        </Flex>
        <Flex
          direction={props.isNotSmallerScreen ? "row" : "column"}
          m={10}
          ml={props.isNotSmallerScreen ? 100 : 30}
        >
          <Flex direction="column" alignItems="center">
            <motion.div
              whileHover={{ scale: 0.9, rotate: 30 }}
              whileTap={{
                scale: 0,
                rotate: 30,
                borderRadius: "100%",
              }}
            >
              <Wrap data-aos="fade-up">
                <WrapItem>
                  <Avatar
                    width={props.isNotSmallerScreen ? "450px" : "350px"}
                    height={props.isNotSmallerScreen ? "450px" : "350px"}
                    name="Dan Abrahmov"
                    src="./images/me.png"
                  />
                </WrapItem>
              </Wrap>
            </motion.div>

            <Flex direction="row" alignItems="center" columnGap={30} mt={10}>
              <a href="https://github.com/Harvinder-Singh24" target="_blank">
                <img src="./images/github.png" alt="" width="40" height="40" />
              </a>

              <a href="https://www.linkedin.com/in/coder-boy/" target="_blank">
                <img
                  src="./images/linkedin.png"
                  alt=""
                  width="40"
                  height="40"
                />
              </a>

              <a href="https://twitter.com/ExtractsNft" target="_blank">
                <img src="./images/twitter.png" alt="" width="40" height="40" />
              </a>
            </Flex>
          </Flex>
          <Box width={100}></Box>
          <Wrap data-aos="zoom-in-up">
            <WrapItem>
              <Container
                alignContent="center"
                mt={100}
                ml={props.isNotSmallerScreen ? 0 : 59}
              >
                <Text as="samp" textAlign="left" fontSize={20}>
                  👋🏼 Hello! I am an 18-year-old software developer and a designer
                  from India. As a self-learner, I have learnt all the things
                  and managed all the things on my own. I just love to make
                  websites and apps in the most simple and efficient way. I
                  mainly work with flutter and react to build my stuff.🧑🏼‍💻
                </Text>
              </Container>
            </WrapItem>
          </Wrap>
        </Flex>
      </Flex>
    </>
  );
}
