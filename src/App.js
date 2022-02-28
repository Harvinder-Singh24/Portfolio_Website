import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Skill from "./skill";
import {
  Flex,
  Button,
  Spacer,
  IconButton,
  useColorMode,
  Heading,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import Home from "./home";
import { useWindowScrollPositions } from "./scrolldirection";
import About from "./About";
import ClockLoader from "react-spinners/ClockLoader";

export default function App() {
  const [loading, setloading] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  return (
    <div height="100vh">
      {loading ? (
        <div style= {{
          display:"flex",
              alignItems: "center",
              justifyContent:"center",
              width:"100%",
              height:"100vh"
        }}>
        <ClockLoader
          color="#36D7B7"
          loading={loading}
          size={150}
        />
        </div>
      ) : (
        <>
          <Flex
            p={30}
            direction="row"
            as="header"
            position="fixed"
            backgroundColor={isDark ? "transparent" : "white"}
            w="100%"
            h="10%"
          >
            <IconButton
              borderRadius={10}
              border="1px"
              borderColor={isDark ? "white" : "black"}
              variant="solid"
              aria-label="Email_Button"
              fontSize="30px"
              icon={<CgMail />}
            />

            <Spacer></Spacer>
            <IconButton
              borderRadius={10}
              border="1px"
              borderColor={isDark ? "white" : "black"}
              onClick={toggleColorMode}
              icon={isDark ? <FaSun /> : <FaMoon />}
            />
          </Flex>
          <Home isDark={isDark} isNotSmallerScreen={isNotSmallerScreen}></Home>
          <About
            isDark={isDark}
            isNotSmallerScreen={isNotSmallerScreen}
          ></About>
          <Skill></Skill>
        </>
      )}
    </div>
  );
}
