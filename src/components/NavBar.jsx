import React from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { Icon } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";


const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display="flex"
        flexDir="row"
        py="20px"
        px="15px"
        justifyContent={"space-between"}
     
      >
        <HStack paddingLeft={6}>
          <HashLink to="/#home" smooth>
            <Button colorScheme="teal" variant="link" fontSize="20px">
              ANKIT
            </Button>
          </HashLink>
        </HStack>

        <HStack
          spacing={7}
          paddingRight={6}
          display={{ base: "none", sm: "flex" }}
        >
          <HashLink to="/#about" smooth>
            <Button colorScheme="teal" variant="link" fontSize="20px">
              ABOUT
            </Button>
          </HashLink>
          <HashLink to="/#resume" smooth>
            <Button colorScheme="teal" variant="link" fontSize="20px">
              RESUME
            </Button>
          </HashLink>
          <HashLink to="/#contact" smooth>
            <Button colorScheme="teal" variant="link" fontSize="20px">
              CONTACT
            </Button>
          </HashLink>
        </HStack>

        <HStack
          spacing={7}
          paddingRight={2}
          display={{ base: "flex", sm: "none" }}
        >
          <Button
            colorScheme="black"
            variant="link"
            fontSize="20px"
            onClick={onOpen}
          >
            <Icon as={RxHamburgerMenu} />
          </Button>
        </HStack>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            
          </DrawerHeader>
          <VStack spacing={5}>
          <HashLink to="/#about" smooth>
            <Button colorScheme="teal" variant="link" fontSize="20px">
              ABOUT
            </Button>
          </HashLink>
          <HashLink to="/#resume" smooth>
            <Button colorScheme="teal" variant="link" fontSize="20px">
              RESUME
            </Button>
          </HashLink>
          <HashLink to="/#contact" smooth>
            <Button colorScheme="teal" variant="link" fontSize="20px">
              CONTACT
            </Button>
          </HashLink>
          </VStack>

          <DrawerBody></DrawerBody>

          <DrawerFooter>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default NavBar;
