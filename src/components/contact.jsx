import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const contactData = [
  {
    index: 0,
    name: "Name: Ankit Kumar",
    address: "Address: Govind Bhawan, IIT Roorkee, Roorkee Uttarakhand",
    email: "Email: aki2001ankit@gmail.com",
    contact: "Contact No: 8920529523",
  },
];

const Contact = () => {
  return (
    <>
      <Box
        minHeight={"100vh"}
        display={"flex"}
        flexDir="column"
        justifyContent={"space-evenly"}
        alignItems="center"
      >
        <VStack w={{ base: "75%", sm: "70%", md: "60%" }} display={"block"}>
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
            CONTACT DETAILS
          </Text>
          <br />
          {contactData.map((m) => (
            <Box
              key={m.index}
              fontSize={"2xl"}
              style={{ fontFamily: "Open Sans" }}
            >
              <Text>{m.name}</Text>
              <Text>{m.address}</Text>
              <Text>{m.email}</Text>
              <Text>{m.contact}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </>
  );
};
export default Contact;
