import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const aboutData = [
  {
    index: 0,
    data: "Hey, I am ankit kumar, a pre-final year student at the Indian Institute of Technology Roorkee.",
  },
  {
    index: 1,
    data: "My hometown is Vaishali, Bihar.",
  },
  {
    index: 2,
    data: "My interests include web development and competitive programming.",
  },
];

const About = () => {
  return (
    <>
      <Box
       
        minHeight={"100vh"}
        display={"flex"}
        flexDir="column"
        justifyContent={"space-evenly"}
        alignItems="center"
      >
        <VStack 
        w={{ base: "75%", sm: "70%", md: "60%"  }} 
         display={"block"}
        
        >
          <Text
           display="block"
            fontSize={"4xl"}
            fontWeight="bold"
            style={{ fontFamily: "Poppins" }}
            alignItem="left"
            alignSelf="left"
            borderBottom="3px solid teal"
            marginLeft={0}
          >
            ABOUT
          </Text>
          <br/>
          {aboutData.map((m) => (
            <Text 
            key={m.index}
            fontSize={"2xl"}
           
            style={{ fontFamily: 'Open Sans' }}
            >{m.data}</Text>
          ))}
        </VStack>
      </Box>
    </>
  );
};
export default About;
