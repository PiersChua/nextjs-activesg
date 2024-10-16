"use client";
import { Box, Flex, Text, Icon, IconButton, Image } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { disableNav } from "@/utils/disableNav";

const Footer = () => {
  const path = usePathname();
  const footerColumns = sliceArrays(footerItems);
  return (
    <>
      {!disableNav.includes(path) && (
        <Box mt="auto" p={5} bg="#D6BFAF">
          <Flex alignItems="center" wrap="wrap" gap={5}>
            <Flex flex="1 1 200px">
              <Image
                src="/fitsg-high-resolution-logo-transparent.svg"
                width="200"
                height="auto"
                alt="Fit SG"
              />
            </Flex>
            {footerColumns.map((column, index) => (
              <Flex key={index} direction="column" gap={3} flex="1 1 200px">
                {column.map((item, index) => (
                  <Text
                    key={index}
                    as="a"
                    href={item.href}
                    _hover={{
                      color: "var(--orange)",
                      transition: "0.3s color",
                    }}
                  >
                    {item.label}
                  </Text>
                ))}
              </Flex>
            ))}
            <Flex gap={3} alignItems="center" flex="1 1 200px">
              {socialItems.map((item, index) => (
                <Link target="_blank" href={item.href} key={index}>
                  <Icon
                    title={item.tooltip}
                    _hover={{
                      color: "var(--orange)",
                      transition: "0.3s color",
                    }}
                    boxSize={6}
                    as={item.icon}
                  />
                </Link>
              ))}
            </Flex>
          </Flex>
          <Text mt={5} textAlign="center">
            &copy; {new Date().getFullYear()} FitSG. All rights reserved.
          </Text>
        </Box>
      )}
    </>
  );
};

const footerItems = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Personal Trainers", href: "/personal-trainers" },
  { label: "Find a gym", href: "/gym-locations" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/policy" },
];

const socialItems = [
  { icon: FaInstagram, href: "/instagram", tooltip: "Check out our instagram" },
  { icon: FaFacebookF, href: "/facebook", tooltip: "Check out our facebook" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/piers-chua/",
    tooltip: "Check out our linkedin",
  },
  {
    icon: FaGithub,
    href: "https://github.com/PiersChua",
    tooltip: "Check out our github",
  },
];

const sliceArrays = (array: typeof footerItems, size = 4) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export default Footer;
