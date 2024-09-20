import React from "react";
import LoginForm from "@/components/Form/LoginForm";
import { Stack } from "@chakra-ui/react";

const LoginPage = async () => {
  return (
    <Stack alignItems="center">
      <LoginForm />
    </Stack>
  );
};

export default LoginPage;
