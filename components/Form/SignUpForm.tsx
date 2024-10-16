"use client";
import { signUp } from "@/app/action/user";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState, useTransition } from "react";
import * as z from "zod";
import FormRedirect from "@/components/Form/FormRedirect";
import FormButton from "@/components/Form/FormButton";
import FormHeader from "@/components/Form/FormHeader";
import FormMessage from "@/components/Form/FormMessage";
import { SignUpSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    startTransition(async () => {
      setError(""); // clear error message
      await signUp(values).then((data) => setError(data.error as string));
    });
  };
  return (
    <Stack
      bg="var(--beige)"
      boxShadow="0 5px 20px rgba(0,0,0,0.2)"
      maxW="800px"
      w="full"
      p={5}
      rounded="xl"
      mt={10}
      spacing={5}
    >
      <FormHeader text="Sign Up" />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5}>
          <FormControl isInvalid={!!errors?.name?.message}>
            <FormLabel>Name</FormLabel>
            <Input
              variant="cream"
              disabled={isPending}
              {...register("name")}
              placeholder="Piers Chua"
              type="text"
            />
            {errors?.name?.message && (
              <FormErrorMessage>{errors.name.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors?.dateOfBirth?.message}>
            <FormLabel>Date of birth</FormLabel>
            <Input
              variant="cream"
              type="date"
              disabled={isPending}
              {...register("dateOfBirth")}
              max={new Date().toISOString().split("T")[0]}
            />
            {errors?.dateOfBirth?.message && (
              <FormErrorMessage>{errors.dateOfBirth.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors?.email?.message}>
            <FormLabel>Email address</FormLabel>
            <Input
              variant="cream"
              disabled={isPending}
              {...register("email")}
              placeholder="piers@example.com"
            />
            {errors?.email?.message && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors?.password?.message}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                variant="cream"
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

          <FormButton isLoading={isPending} text="Sign Up" />
        </Stack>
      </form>
      <FormRedirect href="/login" hrefText="Login" text="Already a user?" />
    </Stack>
  );
};

export default SignUpForm;
