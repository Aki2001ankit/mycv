import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const Slogon = () => {
  return (
    <>
      <Box
        bg="white"
        minHeight={"100vh"}
        display={"flex"}
        flexDir="column"
        justifyContent={"space-evenly"}
        alignItems="center"
      >
        {" "}
        <VStack w={{ base: "75%", sm: "65%", md: "55%" }}>
          <Text
            fontSize={"3xl"}
            fontWeight="bold"
            style={{ fontFamily: "Playfair Display" }}
          >
            "The mind is the limit. When you face your struggles, you overcome
            them."
          </Text>
          <Text
            fontSize={"5xl"}
            fontWeight="bold"
            style={{ fontFamily: "Poppins" }}
          >
            Ankit Kumar
          </Text>
          <Text
            fontSize={"2xl"}
            fontWeight="bold"
            style={{ fontFamily: "Poppins" }}
          >
            B.Tech Pre-Final Student at Indian Institude of Technology Roorkee
          </Text>
        </VStack>
      </Box>
    </>
  );
};
export default Slogon;
