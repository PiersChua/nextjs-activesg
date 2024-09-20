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
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Image,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { disableNav } from "@/utils/disableNav";
import { logout } from "@/app/action/user";

interface NavbarProps {
  isLoggedIn: boolean;
  image: string | undefined;
  name: string | undefined;
}
const Navbar = ({ isLoggedIn, image, name }: NavbarProps) => {
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
            <Link title="Home" href="/">
              <Image
                width="150px"
                height="auto"
                src="/fitsg-high-resolution-logo-transparent.svg"
                alt="FitSG"
              />
            </Link>
            <Flex
              alignItems="center"
              gap={4}
              display={{ base: "none", md: "flex" }}
            >
              <DesktopNav />
              {isLoggedIn ? (
                <Profile name={name} image={image} />
              ) : (
                <SignUpButton />
              )}
            </Flex>
            <Flex display={{ base: "flex", md: "none" }}>
              {isLoggedIn ? (
                <Profile name={name} image={image} />
              ) : (
                <SignUpButton />
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
        <DesktopSubNav key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, children }: NavItem) => {
  const path = usePathname();
  return (
    <Box key={label}>
      <Popover
        openDelay={50}
        closeDelay={50}
        trigger={"hover"}
        placement={"bottom-end"}
      >
        <PopoverTrigger>
          <Text
            cursor="pointer"
            p={2}
            fontSize="20px"
            fontWeight="semibold"
            _hover={{
              color: "var(--orange)",
            }}
            color={path.includes(label.toLowerCase()) ? "var(--orange)" : ""}
          >
            {label}
          </Text>
        </PopoverTrigger>

        <PopoverContent
          border={0}
          boxShadow="0 5px 20px rgba(0,0,0,0.2)"
          bg="var(--beige)"
          p={4}
          rounded={"xl"}
        >
          <Stack>
            {children.map((child) => (
              <Box
                key={child.label}
                role="group"
                as="a"
                href={child.href}
                display={"block"}
                p={2}
                rounded={"md"}
                _hover={{ bg: "var(--beige-1)" }}
              >
                <Stack
                  role="group"
                  _hover={{
                    color: "var(--orange)",
                  }}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  transition={"all .3s"}
                >
                  <Text fontSize="20px">{child.label}</Text>
                  <Icon
                    transition={"all .3s"}
                    transform={"translateX(-20px)"}
                    opacity={0}
                    _groupHover={{
                      opacity: "100%",
                      transform: "translateX(-10px)",
                    }}
                    color="var(--orange)"
                    as={FaArrowRightLong}
                  />
                </Stack>
              </Box>
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack direction="column" p={4} display={{ md: "none" }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const path = usePathname();
  return (
    <Stack spacing={4}>
      <Box py={2}>
        <Stack
          _hover={{ color: "var(--orange)", transition: "0.3s color" }}
          cursor="pointer"
          onClick={onToggle}
          direction="row"
          alignItems="center"
        >
          <Icon
            as={FaChevronDown}
            transition={"transform .25s ease-in-out"}
            transform={isOpen ? "rotate(-180deg)" : ""}
          />
          <Text
            color={path.includes(label.toLowerCase()) ? "var(--orange)" : ""}
            fontSize="20px"
            fontWeight="semibold"
          >
            {label}
          </Text>
        </Stack>
      </Box>

      <Collapse in={isOpen} animateOpacity>
        <Stack my={2} pl={4} borderLeft={1} borderStyle={"solid"}>
          {children.map((child) => (
            <Stack
              key={child.label}
              role="group"
              _hover={{
                color: "var(--orange)",
              }}
              direction="row"
              align="center"
              spacing={2}
              transition={"all .3s"}
            >
              <Text as="a" fontSize="20px" py={2} href={child.href}>
                {child.label}
              </Text>
              <Icon
                transition={"all .3s"}
                transform={"translateX(0px)"}
                opacity={0}
                _groupHover={{
                  opacity: "100%",
                  transform: "translateX(10px)",
                }}
                color="var(--orange)"
                as={FaArrowRightLong}
              />
            </Stack>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface ProfileProps {
  image: string | undefined;
  name: string | undefined;
}
const Profile = ({ image, name }: ProfileProps) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar bg="var(--orange)" name={name} size={"sm"} src={image} />
      </MenuButton>
      <MenuList
        boxShadow="0 5px 20px rgba(0,0,0,0.2)"
        border={0}
        bg="var(--beige)"
      >
        <form action={logout}>
          <MenuItem
            _hover={{ bg: "var(--beige-1)" }}
            bg="var(--beige)"
            as="button"
            type="submit"
          >
            Sign out
          </MenuItem>
        </form>
        {profileItems.map((item, index) => (
          <MenuItem
            key={index}
            _hover={{ bg: "var(--beige-1)" }}
            bg="var(--beige)"
            as="a"
            href={item.href}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

const SignUpButton = () => {
  return (
    <Button as="a" variant="yellowBlack" href="/signup">
      Sign up
    </Button>
  );
};

interface NavItem {
  label: string;
  children: { label: string; href: string }[];
}
3;
const navItems: NavItem[] = [
  {
    label: "Programmes",
    children: [
      {
        label: "Personal Training",
        href: "/programmes/personal-training",
      },
      {
        label: "Fitness Classes",
        href: "/programmes/fitness-classes",
      },
    ],
  },
  {
    label: "Facilities",
    children: [
      {
        label: "Book a facility",
        href: "/facilities/book",
      },
      {
        label: "Our Locations",
        href: "/facilities/locations",
      },
    ],
  },
  {
    label: "Membership",
    children: [
      {
        label: "Gym",
        href: "/membership/GYM",
      },
      {
        label: "Swim",
        href: "/membership/SWIM",
      },
    ],
  },
];

const profileItems = [
  {
    label: "Profile",
    href: "/user-profile",
  },
  {
    label: "Cart",
    href: "/user-cart",
  },
];

export default Navbar;
