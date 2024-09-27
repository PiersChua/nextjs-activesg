"use client";
import { activatePass } from "@/app/action/passes";
import { Button } from "@chakra-ui/react";
import React from "react";
interface ButtonProps {
  passId: string;
}
const ActivatePassButton = ({passId}:ButtonProps) => {
  return (
    <Button onClick={() => activatePass(passId)} variant="orangeWhite">
      Activate
    </Button>
  );
};

export default ActivatePassButton;
