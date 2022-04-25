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

export default function education(props) {
  return (
    <>
      <Flex direction="column" mt={55} mb={50} alignItems="center">
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

        <Box height="10"></Box>

        <Box p={10} display={{ md: "flex" }}>
          <Box >
            <Image
              borderRadius="lg"
              width={{ md: 40 }}
              src="./images/college.jpg"
              alt="College"
            />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="lg"
              letterSpacing="wide"
              color="teal.600"
            >
              Bachelor Of Computer Application (BCA)
            </Text>
            <Link
              mt={1}
              display="block"
              fontSize="sm"
              target="_blank"
              lineHeight="normal"
              fontWeight="semibold"
              href="https://www.gehu.ac.in/"
            >
                Graphic Era Hill University , Haldwani
            </Link>
            <Text mt={2} color="gray.500">
              2021 - 2024
            </Text>
          </Box>
        </Box>


        <Box p={10} display={{ md: "flex" }} mr={props.isNotSmallerScreen ? 100:0}>
          <Box >
            <Image
              borderRadius="lg"
              width={{ md: 40 }}
              src="./images/school.jpg"
              alt="College"
            />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="lg"
              letterSpacing="wide"
              color="teal.600"
            >
              Class 12 - 85% && Class 10 - 80%
            </Text>
            <Link
              mt={1}
              display="block"
              fontSize="sm"
              target="_blank"
              lineHeight="normal"
              fontWeight="semibold"
              href="https://www.gehu.ac.in/"
            >
                St.Peter Senior Secondary School , Kishanpur
            </Link>
            <Text mt={2} color="gray.500">
              2006 - 2021
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
