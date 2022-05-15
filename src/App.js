import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Skill from "./skill";
import { useToast } from '@chakra-ui/react'
import Education from "./education";
import {
  Flex,
  Spacer,
  IconButton,
  useColorMode,
useMediaQuery,
} from "@chakra-ui/react";
import Home from "./home";
import { useWindowScrollPositions } from "./scrolldirection";
import About from "./About";
import ClockLoader from "react-spinners/ClockLoader";
import Projects from "./Projects";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Contact from './contact'

export default function App() {

  const toast = useToast()
  const [loading, setloading] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:1000px)");

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  return (
    <div height="100vh">
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <ClockLoader color="#36D7B7" loading={loading} size={150} />
        </div>
      ) : (
        <>
          <Flex
            p={30}
            direction="row"
            backgroundColor={isDark ? "transparent" : "white"}
            w="100%"
            h="10%"
          >
            <CopyToClipboard text="Hackersvilla776@gmail.com">
              <IconButton
                borderRadius={10}

              variant="solid"
                aria-label="Email_Button"
                fontSize="30px"
                onClick={() => toast({
                  title:'Email Copied',
                  description: 'I am waitting for your email 😊',
                  status: 'success',
                  duration: 5000,
                  isClosable: true,
                })}
                icon={ <CgMail /> }
              />

            </CopyToClipboard>

            <Spacer/>

            <IconButton
              borderRadius={10}
              onClick={toggleColorMode}
              icon={isDark ? <FaSun /> : <FaMoon />}
            />
          </Flex>

          <Home isDark={isDark} isNotSmallerScreen={isNotSmallerScreen} />

          <About
            isDark={isDark}
            isNotSmallerScreen={isNotSmallerScreen} />n

          <Skill isNotSmallerScreen={isNotSmallerScreen} isDark={isDark}/>
          <Education isNotSmallerScreen={isNotSmallerScreen} isDark={isDark}/>

         {/*<Projects isNotSmallerScreen={isNotSmallerScreen} isDark={isDark}/>*/}
        </>
      )}
    </div>
  );
}
