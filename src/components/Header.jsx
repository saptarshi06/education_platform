import React from 'react';
import { Button, Box, HStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import image from '../assets/1.jpg';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
const Header = () => {
  return (
    <>
      <nav>
        <Box
          bgColor="orange.600"
          p={'2'}
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Image src={image} alt="l" h={'16'} w={'12'} />
          <HStack p={'1'} justifyContent={'flex-end'}>
            <Link to={'/'}>
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to={'/contact'}>
              <Button variant="ghost">Contact Us</Button>
            </Link>
            <Link to={'/'}>
              <Button variant="ghost">About</Button>
            </Link>
            <Link to={'/services'}>
              <Button variant="ghost">Services</Button>
            </Link>
            <ColorModeSwitcher />
          </HStack>
        </Box>
      </nav>
    </>
  );
};

export default Header;
