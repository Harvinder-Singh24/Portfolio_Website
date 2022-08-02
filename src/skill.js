import {
  Flex,
  Heading,
  Box,
  SimpleGrid,
  WrapItem,
  Wrap,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Records from "./skills.json";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function Skill(props) {
  let white_mode_color_box = "#dcdfe2";
  let dark_mode_color_box = "#e0eefa";
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [IsMobile] = useMediaQuery("(min-width:1000px)");
  const [WhiteMode, SetWhiteModeColor] = useState(white_mode_color_box);
  const [DarkMode, SetDarkModeColor] = useState(dark_mode_color_box);

  return (
    <>
      <Flex direction="column" mt={50} mb={50} alignItems="center">
        <Flex direction="row" justifyContent="center">
          <img
            src={
              props.isDark
                ? "./icons/dark_mode_skill.png"
                : "./icons/white_mode_skill.png"
            }
            alt=""
            width="40"
            height="40"
          />
          <Box width="3"></Box>
          <Heading textAlign="center">Skills &</Heading>
          <Box width="3"></Box>
          <Heading textAlign="center" color="#4299E1">
            Abilities
          </Heading>
        </Flex>
        <Box height="50"></Box>
        <Wrap data-aos="fade-up">
          <WrapItem>
            <SimpleGrid
              columns={props.isNotSmallerScreen ? 4 : 2}
              spacing="60px"
            >
              {Records &&
                Records.map((record) => {
                  return (
                    <motion.div
                      whileHover={{ scale: 0.8, rotate: 30 }}
                      whileTap={{
                        scale: 0.5,
                        rotate: 30,
                        borderRadius: "100%",
                      }}
                    >
                      <Box
                        bg={
                          props.isDark
                            ? dark_mode_color_box
                            : white_mode_color_box
                        }
                        width="150px"
                        height="150px"
                        p={5}
                        cursor="pointer"
                        borderRadius={8}
                      >
                        <Flex direction="column" alignItems="center">
                          <Heading size={25} textAlign="center" color="black">
                            {record.name}
                          </Heading>
                          <img src={record.icon} width={80} height={80} />
                        </Flex>
                      </Box>
                    </motion.div>
                  );
                })}
            </SimpleGrid>
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  );
}
