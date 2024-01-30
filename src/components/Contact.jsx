import React,{useState} from "react";
import {Box,Flex,Heading,FormControl,FormLabel,Input,Textarea,Button} from "@chakra-ui/react";

import Footer from "./Footer";

       const Contact = () => {
              const [formData, setFormData] = useState({
                name: "",
                email: "",
                message: "",
              });
            
              const handleChange = (e) => {
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                });
              };
            
              const handleSubmit = (e) => {
                e.preventDefault();
                console.log("Form Data:", formData);
              };
            
              return (
                <Flex align="center" justify="center" h="80vh">
                  <Box>
                    <Heading mb="8" textAlign="center">
                      Contact Us
                    </Heading>
                    <form onSubmit={handleSubmit}>
                      <FormControl mb="4">
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                        />
                      </FormControl>
            
                      <FormControl mb="4">
                        <FormLabel>Email</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                        />
                      </FormControl>
            
                      <FormControl mb="4">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your Message"
                          size="md"
                        />
                      </FormControl>
            
                      <Button type="submit" colorScheme="teal" mt="4">
                        Submit
                      </Button>
                    </form>
                  </Box>
                </Flex>
              );
            };
            
            export default Contact;