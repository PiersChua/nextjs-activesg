import { Box, Container, Flex, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Box py="5em" id="contact">
      <Container maxW="1400px">
        <Flex gap={10} direction="column">
          <Box maxW="700px">
            <Text
              mb="0.5em"
              fontWeight="semibold"
              fontSize={{ base: "40px", md: "60px" }}
            >
              Talk to us
            </Text>
            <Text fontSize={{ base: "16px", md: "20px" }}>
              We are more than happy to receive your feedback! Drop a message
              and we will get back to you in the next working day!
            </Text>
          </Box>
          <Box w="full" flex={1}>
            <ContactForm />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
