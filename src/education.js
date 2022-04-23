import React from 'react';
import { Flex, Heading, Box, SimpleGrid, WrapItem ,Wrap , useMediaQuery} from "@chakra-ui/react";

export default function education(props) {
  return (
    <>
        <Flex direction="column" mt={50} mb={50} alignItems="center">
            <Flex direction="row" justifyContent="center">
            <img
                src={
                props.isDark
                    ? "./icons/white_mode_education.png"
                    : "./icons/dark_mode_education.png"
                }
                alt=""
                width="40"
                height="40"
            />
            <Box width="3"></Box>
            <Heading textAlign="center">My</Heading>
            <Box width="3"></Box>
            <Heading textAlign="center" color="#4299E1">
                Education
            </Heading>
            </Flex>
        </Flex>
    </>
  )
}
