import { Flex, Heading, SimpleGrid, Box , Spacer } from "@chakra-ui/react";
import React from "react";

export default function skill() {
  return (
    <>
      <Flex direction="column" mt={50}>
        <Heading textAlign="center">Skills</Heading>
        <SimpleGrid columns={2}  minChildwidth ='10px' spacing={20} p ={30} mt={10}>
          <Box bg="#EDEEEE" height="280px" border="1px" boxShadow="dark-lg" borderRadius={30} alignItems="center">
            <Flex direction="column" alignItems="center">
            <Heading>Flutter</Heading>
            </Flex>
          </Box>
          <Box bg="#EDEEEE" height="280px" border="1px" boxShadow="dark-lg" borderRadius={30}></Box>
          <Box bg="#EDEEEE" height="280px" border="1px" boxShadow="dark-lg" borderRadius={30}></Box>
          <Box bg="#EDEEEE" height="280px" border="1px" boxShadow="dark-lg" borderRadius={30}></Box>
          <Box bg="#EDEEEE" height="280px" border="1px" boxShadow="dark-lg" borderRadius={30}></Box>
          <Box bg="#EDEEEE" height="280px" border="1px" boxShadow="dark-lg" borderRadius={30}></Box>
        </SimpleGrid>
      </Flex>
    </>
  );
}
