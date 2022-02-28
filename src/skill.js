import { Flex, Heading, Grid , GridItem } from "@chakra-ui/react";
import React from "react";

export default function skill() {
  return (
    <>
      <Flex direction="column" mt={50}>
        <Heading textAlign="center">Skills</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} m={10} h="500px">
          <GridItem w="100%" borderRadius={10} bg="blue.500" />
          <GridItem w="100%" borderRadius={10} bg="blue.500" />
          <GridItem w="100%" borderRadius={10} bg="blue.500" />
          <GridItem w="100%" borderRadius={10} bg="blue.500" />
          <GridItem w="100%" borderRadius={10} bg="blue.500" />
          <GridItem w="100%" borderRadius={10}bg="blue.500" />
        </Grid>
      </Flex>
    </>
  );
}
