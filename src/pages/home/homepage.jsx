import React from "react";
import SideBar from "./SideBar";
import MainPage from "./MainPage";
import NavBar from "../../components/NavBar";
import { Box } from "@chakra-ui/react";
const HomePage = () => {
  return (
    <>
      <Box
        display={{ base: "block", md: "none" }}
        bg="white"
        height="auto"
        className="fixed-top"
        boxShadow="2xl"
        w="100%"
      >
        <NavBar />
      </Box>

      <Box display="flex" bg="white" w="100%">
        <Box
          bg="black"
          display={{base:"none",md:"block"}}
          width={{ md: "35%", lg: "25%" }}
          marginTop={{ base: "60px", md: "0" }}
          maxHeight="100vh"
        >
          <SideBar />
        </Box>
        <Box bg="white" width={{ md: "65%", lg: "75%" }}
        maxHeight={"100vh"} 
        overflowY={"scroll"}
        >
          <Box
            display={{ base: "none", md: "block" }}
            bg="white"
            height="auto"
            className="fixed-top"
            boxShadow="2xl"
            marginLeft={{ md: "35%", lg: "25%" }}
            w={{ md: "65%", lg: "75%" }}
          >
            <NavBar />
          </Box>
          <Box 
          marginTop={{ base: "0", md: "60px" }}
          
          >
            <MainPage />
          </Box>
        </Box>
      </Box>

      
    </>
  );
};
export default HomePage;
