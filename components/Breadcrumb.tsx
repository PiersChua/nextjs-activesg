"use client";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { usePathname } from "next/navigation";
interface BreadcrumbProps {
  separator?: string;
}
const BreadcrumbComponent = ({ separator = "/" }: BreadcrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <Breadcrumb textStyle="p" fontWeight="medium" py={10} separator={separator}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <Icon mt={1} boxSize={{ base: 5, md: 7 }} as={MdHome} />
        </BreadcrumbLink>
      </BreadcrumbItem>
      {pathNames.map((path, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink
            href={
              pathNames.length === index + 1
                ? "#"
                : `/${pathNames.slice(0, index + 1).join("/")}`
            }
          >
            {capitalizeFirstLetter(path)}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
