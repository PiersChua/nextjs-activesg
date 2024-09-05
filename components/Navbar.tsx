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
  Container,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { disableNav } from "@/utils/disableNav";
import { logout } from "@/app/action/user";

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
          boxShadow="0 5px 20px rgba(0,0,0,0.2)"
          bg="#faf0cacb"
          backdropFilter="blur(10px)"
          position="sticky"
          top="0"
          p={5}
          fontSize="20px"
          fontWeight="medium"
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
              {isLoggedIn ? <Profile /> : <SignUpButton />}
            </Flex>
            <Flex display={{ base: "flex", md: "none" }}>
              {isLoggedIn ? <Profile /> : <SignUpButton />}
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
          _hover={{ color: "#f95738", transition: "0.3s color" }}
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
    <Stack direction="column" p={4} display={{ md: "none" }}>
      <Stack
        flexDirection="column"
        alignItems="center"
        spacing={4}
        gap={4}
        mt={4}
      >
        {navItems.map((navItem) => (
          <Link
            _hover={{ color: "#f95738", transition: "0.3s color" }}
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

const Profile = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          size={"sm"}
          src={
            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          }
        />
      </MenuButton>
      <MenuList>
        <form action={logout}>
          <MenuItem as="button" type="submit">
            Sign out
          </MenuItem>
        </form>
        <MenuItem as="a" href="/user-profile">
          Profile
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const SignUpButton = () => {
  return (
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
