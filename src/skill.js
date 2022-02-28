import { Flex, Heading, Grid, GridItem , Container } from "@chakra-ui/react";
import React from "react";

export default function Skill(props) {
  return (
    <>
      <Flex direction="column" mt={50}>
        <Heading textAlign="center">Skills</Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} m={props.isNotSmallerScreen ? 100 : 30} h="500px">
            <GridItem w="85%" borderRadius={10} bg="blue.500" />
            <GridItem w="85%" borderRadius={10} bg="blue.500" />
            <GridItem w="85%" borderRadius={10} bg="blue.500" />
            <GridItem w="85%" borderRadius={10} bg="blue.500" />
            <GridItem w="85%" borderRadius={10} bg="blue.500" />
            <GridItem w="85%" borderRadius={10} bg="blue.500" />
          </Grid>   
      </Flex>
    </>
  );
}
