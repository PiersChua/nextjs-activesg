"use client";
import { login, loginWithGoogle } from "@/app/action/user";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  Divider,
  Icon,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import FormRedirect from "@/components/Form/FormRedirect";
import FormButton from "@/components/Form/FormButton";
import FormHeader from "@/components/Form/FormHeader";
import FormMessage from "./FormMessage";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      setError(""); // clear error message
      await login(values).then((data) => setError(data?.error as string));
    });
  };

  return (
    <Stack mt={10} spacing={5}>
      <FormHeader text="Login" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5}>
          <FormControl isInvalid={!!errors?.email?.message}>
            <FormLabel>Email address</FormLabel>
            <Input
              disabled={isPending}
              {...register("email")}
              placeholder="john@example.com"
            />
            {errors?.email?.message && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors?.password?.message}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                disabled={isPending}
                {...register("password")}
                type={show ? "text" : "password"}
                placeholder="At least 8 characters"
              />
              <InputRightElement width="4.5rem">
                <Button onClick={() => setShow(!show)}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors?.password?.message && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>
          {error && <FormMessage type="Error">{error}</FormMessage>}
          <FormButton isLoading={isPending} text="Login" />
        </Stack>
      </form>
      <FormRedirect
        href="/signup"
        hrefText="Sign Up"
        text="Don't have an account?"
      />
      <Divider borderColor="#000000" />
      <form action={loginWithGoogle}>
        <Button
          w="full"
          type="submit"
          aria-label="Google"
          leftIcon={<Icon as={FaGoogle} />}
        >
          Google
        </Button>
      </form>
    </Stack>
  );
};

export default LoginForm;
