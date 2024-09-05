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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
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
    <Stack mt={10} spacing={5}>
      <FormHeader text="Sign Up" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5}>
          <FormControl isInvalid={!!errors?.name?.message}>
            <FormLabel>Name</FormLabel>
            <Input
              disabled={isPending}
              {...register("name")}
              placeholder="Piers Chua"
              type="text"
            />
            {errors?.name?.message && (
              <FormErrorMessage>{errors.name.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors?.age?.message}>
            <FormLabel>Age</FormLabel>
            <NumberInput>
              <NumberInputField
                disabled={isPending}
                {...register("age")}
                placeholder="19"
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            {errors?.age?.message && (
              <FormErrorMessage>{errors.age.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors?.email?.message}>
            <FormLabel>Email address</FormLabel>
            <Input
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
          {error && <FormMessage>{error}</FormMessage>}

          <FormButton isLoading={isPending} text="Sign Up" />
        </Stack>
      </form>
      <FormRedirect href="/login" hrefText="Login" text="Already a user?" />
    </Stack>
  );
};

export default SignUpForm;
