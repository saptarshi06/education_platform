// import React from "react";
// import { Icon, VStack } from '@chakra-ui/react';


// const Footer = () => {
//      return (
//           <Box bgcolor={"black"} minH={'50'} p='16' color={'white'}>
//                <Stack direction={['coloumn','row']}>
//                     <VStack>

//                     </VStack>
//                </Stack>
//           </Box>
//      );
// }
// export default Footer;

// footer.jsx
import React from "react";
import { Flex, Box, Text, Link, Icon } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      p="4"
      bg="gray.800"
      color="white"
      position='absolute'
     //  position="fixed"
      bottom='0'
      left="0"
      right="0"
    >
      {/* Courses Row (Left Side) */}
      <Box>
        <Text fontWeight="bold" mb="2">
          Courses
        </Text>
        <Link href="/course1" mr="4">
          Course 1
        </Link>
        <Link href="/course2" mr="4">
          Course 2
        </Link>
        <Link href="/course3">Course 3</Link>
      </Box>

      {/* Social Media Links (Right Side) */}
      <Box>
        <Text fontWeight="bold" mb="2">
          Connect with Us
        </Text>
        <Link href="https://twitter.com" isExternal mr="4">
          <Icon as={FaTwitter} boxSize={6} />
        </Link>
        <Link href="https://facebook.com" isExternal mr="4">
          <Icon as={FaFacebook} boxSize={6} />
        </Link>
        <Link href="https://instagram.com" isExternal>
          <Icon as={FaInstagram} boxSize={6} />
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
