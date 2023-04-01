import React from "react";
import { Box, Image, Button, Wrap, WrapItem } from "@chakra-ui/react";
import imgUrl from "../../usefulResources/myface.jpeg";
import resume from "../../usefulResources/ankit_kumar_resume.pdf";
import { DownloadIcon } from "@chakra-ui/icons";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";


const SideBar = () => {

  return (
    <>
      <Box
        display="flex"
        minHeight="100vh"
        maxHeight="100vh"
        overflowY="hidden"
        flexDir="column"
        alignSelf="center"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Image
          borderRadius="full"
          boxSize={{ base: "200px", md: "160px" }}
          src={imgUrl}
          alt="Ankit Kumar"
          cursor={"pointer"}
        />
        
        <Wrap spacing={6} justify="center">
            <WrapItem>
                <Button
                as='a'
                href="https://www.facebook.com/aki.singh.1253"
                colorScheme={"teal"} 
                variant="link"
                _hover={{color:"white"}}
                >
                    <Icon as={BsFacebook} boxSize={10}/>
                </Button>
            </WrapItem>
            <WrapItem>
                <Button 
                as='a'
                href='https://www.instagram.com/akki_singh_ak/'
                colorScheme={"teal"} 
                variant="link"
                _hover={{color:"white"}}
                >
                    <Icon as={BsInstagram} boxSize={10}/>
                </Button>
            </WrapItem>
            <WrapItem>
                <Button 
                as='a'
                href="https://twitter.com/AnkitSi14330900"
                colorScheme={"teal"} 
                variant="link"
                _hover={{color:"white"}}
                >
                    <Icon as={BsTwitter} boxSize={10}/>
                </Button>
            </WrapItem>
            <WrapItem>
                <Button
                as='a'
                href="https://www.linkedin.com/in/ankit-kumar-43897a212/"
                colorScheme={"teal"} 
                variant="link"
                _hover={{color:"white"}}

                >
                    <Icon as={BsLinkedin} boxSize={10}/>
                </Button>
            </WrapItem>
        </Wrap>

        <Button
          colorScheme="teal"
          as="a"
          href="#"
          download={resume}
          _hover={{
            color: "teal",
            backgroundColor: "white",
            textDecoration: "none",
          }}
          leftIcon={<DownloadIcon />}
        >
          DownLoad CV
        </Button>
      </Box>
    </>
  );
};
export default SideBar;
