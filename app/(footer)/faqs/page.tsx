import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
  Box,
  Text,
} from "@chakra-ui/react";

const FaqsPage = () => {
  return (
    <Box py="5em">
      <Container maxW="1400px">
        <Text mb="0.5em" textStyle="h1">
          Frequently asked questions
        </Text>
        <Accordion borderColor="var(--grey)" allowToggle>
          {FAQs.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box p={3} as="span" flex="1" textAlign="left">
                  <Text textStyle="p" fontWeight="medium">
                    {item.title}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>{item.content}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

const FAQs = [
  {
    title: "What type of membership passes are there?",
    content:
      "There are two types of membership passes: Gym and Swim. Day pass offers a single day access, Non-peak pass allows access on Mon-Fri, Peak pass allows full access including weekends.",
  },
  {
    title: " Can I book facilities in advance?",
    content:
      "Yes! With our platform, you can book facilities like the courts in advance. Simply log in to your account, choose the facility, and pick a date and time.",
  },
  {
    title: "Do you offer student or senior discounts?",
    content:
      "Yes, we provide subsidised rates for students and seniors below 65. Seniors above the age of 65 are entitled to free entry. ",
  },
  {
    title: "Can i cancel my membership",
    content:
      "Unfortunately, we currently do not provide any refund for membership cancellation. Check our terms and conditions for more information.",
  },
];

export default FaqsPage;
