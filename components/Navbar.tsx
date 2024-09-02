"use client";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  Link,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { disableNav } from "@/utils/disableNav";
import { logout } from "@/app/action/user";
import { signOut } from "@/auth";
// import Link from "next/link";

interface NavbarProps {
  isLoggedIn: boolean;
}
const Navbar = ({ isLoggedIn }: NavbarProps) => {
  const path = usePathname();
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      {!disableNav.includes(path) && (
        <Box
          position="sticky"
          top="0"
          py="5"
          fontSize="20px"
          fontWeight="medium"
          bg="var(--beige)"
          zIndex="100"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Flex display={{ base: "flex", md: "none" }}>
              <IconButton
                _hover={{ boxShadow: "outline" }}
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <Icon as={IoMdClose} w={8} h={8} />
                  ) : (
                    <Icon as={GiHamburgerMenu} w={8} h={8} />
                  )
                }
                variant="ghost"
                aria-label="Toggle Navigation"
              />
            </Flex>
            <Image
              width="150"
              height="150"
              src="fitsg-high-resolution-logo-transparent.svg"
              alt="FitSG"
            />
            <Flex
              alignItems="center"
              gap={4}
              display={{ base: "none", md: "flex" }}
            >
              <DesktopNav />
              {isLoggedIn ? (
                <form action={logout}>
                  <Button
                    type="submit"
                    color="#000000"
                    bg="#F4D35E"
                    _hover={{
                      bg: "#D9C287",
                    }}
                  >
                    Sign out
                  </Button>
                </form>
              ) : (
                <Button
                  as="a"
                  color="#000000"
                  bg="#F4D35E"
                  href="/signup"
                  _hover={{
                    bg: "#D9C287",
                  }}
                >
                  Sign up
                </Button>
              )}
            </Flex>
            <Flex display={{ base: "flex", md: "none" }}>
              {isLoggedIn ? (
                <form action={logout}>
                  <Button
                    type="submit"
                    color="#000000"
                    bg="#F4D35E"
                    _hover={{
                      bg: "#D9C287",
                    }}
                  >
                    Sign out
                  </Button>
                </form>
              ) : (
                <Button
                  as="a"
                  color="#000000"
                  bg="#F4D35E"
                  href="/signup"
                  _hover={{
                    bg: "#D9C287",
                  }}
                >
                  Sign up
                </Button>
              )}
            </Flex>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Box>
      )}
    </>
  );
};

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map((navItem) => (
        <Link
          _hover={{ color: "#f95738" }}
          key={navItem.label}
          href={navItem.href}
        >
          {navItem.label}
        </Link>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg="#FAF0CA"
      zIndex="999"
      direction="column"
      p={4}
      display={{ md: "none" }}
    >
      <Stack
        flexDirection="column"
        alignItems="center"
        spacing={4}
        gap={4}
        mt={4}
      >
        {navItems.map((navItem) => (
          <Link
            _hover={{ color: "#f95738" }}
            key={navItem.label}
            href={navItem.href}
          >
            {navItem.label}
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Activities",
    href: "/#activities",
  },
  {
    label: "Contact Us",
    href: "/#contact",
  },
];

export default Navbar;
