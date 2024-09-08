"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CgGym } from "react-icons/cg";
import { MdSportsSoccer } from "react-icons/md";
import { PiVolleyballLight } from "react-icons/pi";

export interface ActivitiesCardProps {
  title: string;
  desc: string;
  image: string;
  icon: "FITPASS" | "PLAYSPACE" | "PROACTIVE";
}
const iconMap = {
  FITPASS: CgGym,
  PLAYSPACE: MdSportsSoccer,
  PROACTIVE: PiVolleyballLight,
};

const ActivitiesCard = ({ title, desc, image, icon }: ActivitiesCardProps) => {
  const iconComponent = iconMap[icon];
  return (
    <Card
      bg="var(--beige)"
      boxShadow="0 5px 20px rgba(0,0,0,0.2)"
      rounded="xl"
      border={0}
    >
      <CardHeader>
        <Stack direction="row" alignItems="center">
          <Icon boxSize={10} as={iconComponent} />
          <Text textStyle="h2">{title}</Text>
        </Stack>
      </CardHeader>
      <CardBody>
        <Image objectFit="cover" borderRadius="lg" src={image} />
        <Text mt={5} textStyle="p">
          {desc}
        </Text>
      </CardBody>
    </Card>
  );
};

export default ActivitiesCard;
