"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Image,
  Box,
  Link,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
interface CardProps {
  title: string;
  image: string;
  href: string;
  index: number;
}
const FacilitiesCard = ({ title, image, href, index }: CardProps) => {
  const rotation = index % 2 === 0 ? "3deg" : "-3deg";
  const path = usePathname();
  return (
    <Card
      bg="var(--beige)"
      boxShadow="0 5px 20px rgba(0,0,0,0.2)"
      rounded="xl"
      border={0}
    >
      <CardHeader textAlign="center">
        <Text textStyle="h2">{title}</Text>
      </CardHeader>
      <CardBody>
        <Box h="full" borderRadius="lg" overflow="hidden">
          <Link href={`${path}/${href}`}>
            <Image
              _hover={{ transform: `scale(1.1) rotate(${rotation})` }}
              transition="transform 0.3s ease"
              objectFit="cover"
              src={image}
              w="full"
              h="full"
            />
          </Link>
        </Box>
      </CardBody>
    </Card>
  );
};

export default FacilitiesCard;
