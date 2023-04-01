import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDir="column"
        justifyContent={"space-evenly"}
        alignItems="center"
      >
        <VStack
          w={{ base: "75%", sm: "70%", md: "60%" }}
          borderTop="2px solid teal"
          marginBottom={5}
          paddingTop={5}
          paddingBottom={5}
        >
          <Text>COPYRIGHT © 2022 ANKIT KUMAR. ALL RIGHTS RESERVED.</Text>
        </VStack>
      </Box>
    </>
  );
};
export default Footer;
