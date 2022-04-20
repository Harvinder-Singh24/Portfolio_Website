import { Flex, Heading , Box} from "@chakra-ui/react";
import React from "react";

export default function Skill(props) {
  return (
    <>
      <Flex direction="column" mt={50} mb={50}>
      <Flex direction="row" justifyContent="center">
          <img src={props.isDark ? "./icons/dark_mode_skill.png" : "./icons/white_mode_skill.png"}alt="" width="40" height="40" />
          <Box width="3"></Box>
          <Heading textAlign="center">Skills &</Heading>
          <Box width="3"></Box>
          <Heading textAlign="center" color="#4299E1">Abilities</Heading>
        </Flex>
      </Flex>
    </>
  );
}
