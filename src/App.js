import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Skill from "./skill";
import { Heading, useToast } from "@chakra-ui/react";
import {
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useMediaQuery,
  Box,
  Button,
} from "@chakra-ui/react";
import Home from "./home";
import { useWindowScrollPositions } from "./scrolldirection";
import About from "./About";
import ClockLoader from "react-spinners/ClockLoader";
import {motion} from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function App() {
  const toast = useToast();
  const [loading, setloading] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:1000px)");

  let InitialbuttonColor = "white";
  const [Color, setColor] = useState(InitialbuttonColor);

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
            as="header"
            position="fixed"
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
                onClick={() =>
                  toast({
                    title: "Email Copied",
                    description: "I am waitting for your email 😊",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  })
                }
                icon={<CgMail />}
              />
            </CopyToClipboard>

            <Spacer />

            <motion.div
              whileHover={{ scale: 1.2, rotate: 0 }}
              whileTap={{
                scale: 0.8,
                rotate: 0,
                borderRadius: "100%",
              }}
            >
              <a target="_blank" href="https://github.com/Harvinder-Singh24">
                <Button
                  bg="blue.400"
                  mt={0}
                  h={50}
                  w={120}
                  borderRadius={10}
                  onMouseOver={
                    isDark ? () => setColor("white") : () => setColor("black")
                  }
                  onMouseLeave={() => setColor(InitialbuttonColor)}
                  borderColor={isDark ? "white" : "black"}
                  color={Color}
                >
                  View Projects
                </Button>{" "}
              </a>
            </motion.div>

            <Box width={30}></Box>

            <IconButton
              borderRadius={10}
              onClick={toggleColorMode}
              icon={isDark ? <FaSun /> : <FaMoon />}
            />
          </Flex>

          <Home isDark={isDark} isNotSmallerScreen={isNotSmallerScreen} />

          <About isDark={isDark} isNotSmallerScreen={isNotSmallerScreen} />

          <Skill isNotSmallerScreen={isNotSmallerScreen} isDark={isDark} />
        </>
      )}
    </div>
  );
}
