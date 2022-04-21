import { Flex, Heading, Box, SimpleGrid, WrapItem ,Wrap } from "@chakra-ui/react";
import React , {useEffect} from "react";
import Records from "./skills.json";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skill(props) {
  useEffect(() =>{
    Aos.init({duration: 2000});
  },[])
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
        <Wrap data-aos="fade-up">
          <WrapItem>
            <Box width={1300} height={900} bg="#1A202C" mt={100} p={14} borderRadius={20}>
              <SimpleGrid minChildWidth="180px" spacing="60px">
                {Records &&
                  Records.map((record) => {
                    return (
                      <Box
                        bg="#4299E1"
                        width="180px"
                        height="150px"
                        p={5}
                        borderRadius={20}
                      >
                        <Flex direction="column" alignItems="center">
                          <Heading size={25} textAlign="center">
                            {record.name}
                          </Heading>
                          <img src={record.icon} width={80} height={80} />
                        </Flex>
                      </Box>
                    );
                  })}
              </SimpleGrid>
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  );
}
