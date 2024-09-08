import { Box, Container, Flex, Text } from "@chakra-ui/react";
import ContactForm from "@/components/Form/ContactForm";

const ContactPage = () => {
  return (
    <Box py="5em">
      <Container maxW="1400px">
        <Flex gap={10} direction="column">
          <Box>
            <Text mb="0.5em" textStyle="h1">
              Talk to us
            </Text>
            <Text textStyle="p">
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

export default ContactPage;
