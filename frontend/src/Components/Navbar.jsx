import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import logo from "../Assets/logo.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

 

  return (
    <>
      <Box
        bg={useColorModeValue("gray.900")}
        px={4}
        w="90%"
        m="auto"
        rounded="xl"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <HStack spacing={8} alignItems={"center"}>
            <Box cursor="pointer"  >
              <Image
                rounded="xl"
                src={logo}
                w='50%'
              />
            </Box>
            {/* <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Text
                color="white"
                fontWeight="500"
                fontStyle="italic"
                cursor="pointer"
                _hover={{ color: "red" }}
                fontSize ='xl'
                fontFamily='cursive'
              
              >
                Headphones
              </Text>
              <Text
                color="white"
                fontWeight="500"
                fontStyle="italic"
                cursor="pointer"
                _hover={{ color: "red" }}
                fontSize ='xl'
                fontFamily='cursive'
                // onClick={()=> navigate('/earphones')}
              >
               Earphones

              </Text>
              <Text
                color="white"
                fontWeight="500"
                fontStyle="italic"
                cursor="pointer"
                _hover={{ color: "red" }}
                fontSize ='xl'
                fontFamily='cursive'
               
              >
                Speakers
              </Text>
            </HStack> */}
          </HStack>
{/* 
          {!isLogin && (
            <Button bg="red" color="white" _hover={{ color: "black" }} >
              Login
            </Button>
          )} */}

    

           
            <Flex alignItems={"center"}  justifyContent='space-around' w={{base:'30%' , md:'15%', lg:'10%'}}>
                {/* <Text color='white'>feiu  dhbuh</Text> */}
                {/* <BsFillCartFill size='20%' color='white' /> */}
                {/* <Image color='white' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Cart-1.png?v=1663762989https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Cart-1.png?v=1663762989' h='30%' w='30%' mr='4' /> */}
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Sign Out</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
         
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Text
                color="white"
                fontWeight="500"
                fontStyle="italic"
                cursor="pointer"
                _hover={{ color: "red.400" }}
              >
                Headphones
              </Text>
              <Text
                color="white"
                fontWeight="500"
                fontStyle="italic"
                cursor="pointer"
                _hover={{ color: "red.400" }}
              >
                Headphones
              </Text>
              <Text
                color="white"
                fontWeight="500"
                fontStyle="italic"
                cursor="pointer"
                _hover={{ color: "red.400" }}
              >
                Headphones
              </Text>
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </>
  );
};

export default Navbar;