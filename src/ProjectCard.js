
import React from 'react'
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
export default function ProjectCard(props) {
    let white_mode_color_box = "#dcdfe2";
    let dark_mode_color_box = "#e0eefa";
    return (
        <>
            <Wrap data-aos="fade-up">
                <WrapItem>
                    <Stack direction="column">
                        <Box width={[100, 200, 300]} height="40px" bg="#4299E1" position="absolute" pl={5}>
                            <Heading color="white" fontSize="30px"># {props.projectnumber}</Heading>
                        </Box>
                        <Box bg={props.isDark ? dark_mode_color_box : white_mode_color_box} pt={20} borderRadius={10} width={[100, 200, 300]} height="400px">
                            <Heading fontSize="28" color={props.isDark? "black" : "black"}>{props.projectname}</Heading>
                        </Box>
                    </Stack>
                </WrapItem>
            </Wrap>
        </>
    )
}
