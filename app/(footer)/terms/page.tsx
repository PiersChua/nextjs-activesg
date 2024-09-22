import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";

const TermsPage = () => {
  return (
    <Box py="5em">
      <Container maxW="1400px">
        <Text mb="0.5em" textStyle="h1">
          Terms and Conditions
        </Text>
        <Box>
          {terms.map((item, index) => (
            <Flex direction="column" gap={2} py={3} key={index}>
              <Text mb={2} textStyle="h2">{`${index + 1}. ${item.title}`}</Text>
              <Divider borderColor="var(--black)" />
              <Box>
                {item.content.map((content, index) => (
                  <Text key={index}>{`${index + 1}. ${content}`}</Text>
                ))}
              </Box>
            </Flex>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
const terms = [
  {
    title: "General Usage",
    content: [
      "By using our website, you confirm that you are at least 10 years of age, or if under 10, using the platform with the guidance of a legal guardian.",
      "Access to certain services may require account registration. You agree to provide accurate and up-to-date information during registration and to keep your account secure.",
      "Any unauthorized use of your account is your responsibility, and we shall not be liable for any loss or damage arising from it.",
    ],
  },
  {
    title: "Memberships",
    content: [
      "We offer various membership options for gym and swim access.",
      "Membership fees must be paid in full before access is granted. Failure to make timely payments may result in suspension or termination of your membership.",
      "Cancellations and refunds for memberships are subject to the policy outlined in section 6.",
    ],
  },
  {
    title: "Booking of Facilities",
    content: [
      "Our website allows you to book various facilities such as courts and pools.",
      "Bookings are subject to availability and can be canceled or rescheduled at our discretion.",
      "Facility bookings should be made in advance. Any cancellations must be made at least 24 hours before the booking time to qualify for a refund or rescheduling.",
    ],
  },
  {
    title: "Programmes and Classes",
    content: [
      "You may sign up for different programmes and classes through our website, which are scheduled at specific times.",
      "Schedules and availability of programmes may change, and users will be notified of significant changes as early as possible.",
      "Programme fees are non-refundable unless the programme is canceled or rescheduled by us.",
    ],
  },
  {
    title: "Payments",
    content: [
      "All payments for memberships, bookings, and programmes must be made securely through the payment options available on the website.",
      "If a payment fails, you are required to resolve the issue promptly to maintain access to our services.",
      "We reserve the right to change our fees at any time, with proper notice to users.",
    ],
  },
  {
    title: "Cancellations and Refunds",
    content: [
      "Membership cancellations must be requested at least 7 days before the renewal date to avoid being charged for the next cycle.",
      "Refunds for facility bookings and programme enrollments are only available if cancellations are made 24 hours prior to the scheduled time.",
      "Refunds will be processed within 5-10 business days and may incur an administrative fee.",
    ],
  },
  {
    title: "User Conduct",
    content: [
      "Users are prohibited from posting harmful or inappropriate content, or engaging in activities that harm our services or other users.",
      "Violation of these rules may result in immediate account suspension or termination.",
    ],
  },
  {
    title: "Privacy",
    content: [
      "We respect your privacy and are committed to protecting your personal data in accordance with our Privacy Policy.",
      "Please refer to the Privacy Policy for information on how we collect, use, and store your data.",
    ],
  },
  {
    title: "Changes to Terms",
    content: [
      "We reserve the right to modify these Terms and Conditions at any time.",
      "Changes will be effective once posted on the website, and continued use of the site signifies acceptance of the updated terms.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "For any questions or concerns regarding these Terms and Conditions, please contact us via the support email provided on the website.",
    ],
  },
];

export default TermsPage;
