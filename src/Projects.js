import React from "react";
import {
  Flex,
  Heading,
  Box,
  Image,
  Link,
  SimpleGrid,
  WrapItem,
  Wrap,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

export default function Projects(props) {
  let white_mode_color_box = "#dcdfe2";
  let dark_mode_color_box = "#e0eefa";
  return (
    <>
      <Flex direction="column" mt={55} mb={50} alignItems="center">
        <Flex direction="row" justifyContent="center">
          <img
            src={
              props.isDark
                ? "./icons/white_mode_projects.png"
                : "./icons/dark_mode_projects.png"
            }
            alt=""
            width="40"
            height="40"
          />
          <Box width="3"></Box>
          <Heading textAlign="center">Projects</Heading>
          <Box width="3"></Box>
          <Heading textAlign="center" color="#4299E1">
            Made
          </Heading>
        </Flex>
        <Box height="20">
        </Box>
        <SimpleGrid  spacing="40px" columns={props.isNotSmallerScreen ? 3 : 2}>
          <Box bg={props.isDark ? dark_mode_color_box : white_mode_color_box} borderRadius = {20}width={[100 , 200, 300]} height="400px"></Box>
          <Box bg={props.isDark ? dark_mode_color_box : white_mode_color_box} borderRadius = {20}width={[100 , 200 ,300]} height="400px"></Box>
          <Box bg={props.isDark ? dark_mode_color_box : white_mode_color_box} borderRadius = {20}width={[100 , 200 ,300]} height="400px"></Box>
          <Box bg={props.isDark ? dark_mode_color_box : white_mode_color_box} borderRadius = {20}width={[100 , 200 ,300]} height="400px"></Box>
          <Box bg={props.isDark ? dark_mode_color_box : white_mode_color_box} borderRadius = {20}width={[100 , 200 ,300]} height="400px"></Box>
          <Box bg={props.isDark ? dark_mode_color_box : white_mode_color_box} borderRadius = {20}width={[100 , 200 ,300]} height="400px"></Box>
        </SimpleGrid>

      </Flex>
    </>
  );
}
