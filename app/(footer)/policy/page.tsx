import { Box, Container, Text } from "@chakra-ui/react";

const PolicyPage = () => {
  return (
    <Box py="5em">
      <Container maxW="1400px">
        <Text mb="0.5em" textStyle="h1">
          Privacy Policy
        </Text>
        <Box>
          {policy.map((item, index) => (
            <Box py={3} key={index}>
              <Text mb={2} textStyle="h2">{`${index + 1}. ${item.title}`}</Text>
              <Box>
                {item.content.map((content, index) => (
                  <Text key={index}>{`${index + 1}. ${content}`}</Text>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const policy = [
  {
    title: "Information We Collect",
    content: [
      "We may collect personal information such as your name, email address, phone number, billing information, and any other details required for membership registration, facility bookings, and programme enrollments.",
      "Non-personal information such as IP address, browser type, and usage data may also be collected to improve user experience and website functionality.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To process your membership registration, facility bookings, and programme enrollments.",
      "To provide customer support and communicate important information, including changes to your bookings, membership, or the programmes you are enrolled in.",
      "To improve our website, services, and user experience based on user feedback and analytics data.",
      "For marketing purposes, with your consent, to send newsletters, promotions, and offers relevant to your interests.",
    ],
  },
  {
    title: "How We Protect Your Information",
    content: [
      "We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.",
      "Sensitive payment information is encrypted and handled by secure third-party payment processors.",
      "While we strive to protect your personal information, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Sharing Your Information",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share your data with trusted service providers who assist us in operating our website, processing payments, or delivering services, provided they agree to keep your information confidential.",
      "We may disclose your personal information if required by law or to protect our legal rights or enforce our Terms and Conditions.",
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    content: [
      "We use cookies and similar tracking technologies to enhance your user experience, track website usage, and remember your preferences.",
      "You can disable cookies in your browser settings, but doing so may affect the functionality of certain features on our website.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us using the details provided below.",
      "You may opt out of receiving marketing communications at any time by following the unsubscribe instructions in our emails or contacting us directly.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.",
      "We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
      "Once your data is no longer needed, we will securely delete or anonymize it.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "We reserve the right to update this Privacy Policy at any time to reflect changes in our practices or legal requirements.",
      "Any changes will be posted on this page, and your continued use of the website following such changes signifies your acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions or concerns regarding this Privacy Policy or the protection of your personal data, please contact us at the email address provided on our website.",
    ],
  },
];

export default PolicyPage;
