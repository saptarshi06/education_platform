import React from "react";
import { Image, position } from '@chakra-ui/react';
import { Stack} from "@chakra-ui/react";
import {Carousel} from 'react-responsive-carousel';
import { Box,Heading,Container,Text } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
       return (
        <Box>
        <Mycarousel/>
        <Container maxW={'50vh'} minH={'100vh'} p='16'>
        <Heading textTransform={'uppercase'} py="2" w={"fit-content"} borderBottom={'2px solid'} margin={'auto'}>Our Motto</Heading>
        
        <Stack
          h="full"
          padding={['4','10']}
          alignItems='center'
          directions={['coloumn','row']}   
          >
          <Image src="https://t4.ftcdn.net/jpg/02/98/89/07/360_F_298890723_gxZy7ljKF1pvZcGTpxxUEKPmVXoF2eCZ.jpg" alt="mjb" h={['40','180']} w={'150'} float={'left'} borderRadius={'30px'} filter={'hue-rotate(-130deg)'}/> 
          <Text letterSpacing={"widest"} lineHeight={'190%'} padding={['4','16']} textAlign='center'>fkj bfkvdfnkfbvsfbkvbskvbskvjbfkvjbFkvjbfvkjbfkjvbfkjvbfkjvbfkjvbsfkjvsfjvsfjvbfsjvbsfjvsfjvfjvkfsjhvukvfsbkfdvfjvbfk ffnvbsfvfskbvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsbvhbsdkv fkjbvs,fjvkjrbvsjbvksfbvkfbvkjsfbv</Text>
        </Stack>
        </Container>
        </Box>
       );
};


 
const Mycarousel = () => (
   
       <Carousel
       autoPlay={true}
       infiniteLoop={true}
       interval={1000}
       showStatus={false}
       showThumbs={false}
       showArrows={false}
       >
       <Box w='full' h={'70vh'} position="relative">
       <Image src='https://t4.ftcdn.net/jpg/02/98/89/07/360_F_298890723_gxZy7ljKF1pvZcGTpxxUEKPmVXoF2eCZ.jpg' alt=""/>
      
       </Box>
       <Box w='full' h={'70vh'} position="relative">
      <Image src='https://t4.ftcdn.net/jpg/02/98/89/07/360_F_298890723_gxZy7ljKF1pvZcGTpxxUEKPmVXoF2eCZ.jpg'/>
     
     </Box>
       </Carousel>
    
    
)
       


export default Home;