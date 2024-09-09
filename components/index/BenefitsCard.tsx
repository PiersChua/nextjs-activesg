import { Icon, Stack, Text } from "@chakra-ui/react";
import { PiBarbell } from "react-icons/pi";
import { FaMedal } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";

export interface BenefitsCardProps {
  title: string;
  desc: string;
  icon: "Equipment" | "Trainer" | "Community" | "Classes";
}

const iconMap = {
  Equipment: PiBarbell,
  Trainer: FaMedal,
  Community: MdGroups,
  Classes: IoIosTimer,
};
const BenefitsCard = ({ title, desc, icon }: BenefitsCardProps) => {
  const iconComponent = iconMap[icon];
  return (
    <Stack alignItems="center" direction="column" gap={5}>
      <Icon boxSize="100px" as={iconComponent} color="var(--orange)" />
      <Text textStyle="h2">{title}</Text>
      <Text textStyle="p">{desc}</Text>
    </Stack>
  );
};

export default BenefitsCard;
