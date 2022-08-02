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
  Stack
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
export default function Projects(props) {
  var project_number = 1;
  return (
    <>
      <Flex direction="column" mt={65} mb={50} alignItems="center">
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
        <SimpleGrid spacing="40px" columns={props.isNotSmallerScreen ? 3 : 2}>
          <ProjectCard isDark={props.isDark} projectname = "RiteMyStory" projectnumber={project_number} />
          <ProjectCard isDark={props.isDark} projectname = "Portfolio Wesbite" projectnumber= {project_number+1}/>
          <ProjectCard isDark={props.isDark}  projectname = "UI Clones " projectnumber= {project_number+2}/>

        </SimpleGrid>

      </Flex>
    </>
  );
}
