import React from "react";
import Slogon from "../../components/slogon";
import About from "../../components/About";
import Resume from "../../components/resume";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import SideBar from "./SideBar";

import { Box } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <>
      <Box display={"flex"} flexDir={"column"}>
      <Box display={{base:"block",md:"none"}} bg="black">
        <SideBar/>
      </Box>
        <div id="home">
          <Slogon />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </Box>
    </>
  );
};
export default MainPage;
