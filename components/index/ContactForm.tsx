"use client";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
  Textarea,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useState, useTransition } from "react";
import * as z from "zod";
import FormButton from "@/components/auth/FormButton";
import FormMessage from "@/components/auth/FormMessage";
import { ContactSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    startTransition(async () => {
      setError(""); // clear error message
    });
  };
  return (
    <Stack spacing={5}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5}>
          <Stack direction="row">
            <FormControl isInvalid={!!errors?.name?.message}>
              <FormLabel>Full Name</FormLabel>
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
            <FormControl isInvalid={!!errors?.phone?.message}>
              <FormLabel>Contact Number</FormLabel>
              <InputGroup>
                <InputLeftAddon>+65</InputLeftAddon>
                <Input
                  disabled={isPending}
                  {...register("phone")}
                  placeholder="00000000"
                  type="tel"
                />
              </InputGroup>
              {errors?.phone?.message && (
                <FormErrorMessage>{errors.phone.message}</FormErrorMessage>
              )}
            </FormControl>
          </Stack>
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
          <FormControl isInvalid={!!errors?.message?.message}>
            <FormLabel>Message</FormLabel>
            <Textarea
              disabled={isPending}
              {...register("message")}
              placeholder="Type your message"
            />
            {errors?.message?.message && (
              <FormErrorMessage>{errors.message.message}</FormErrorMessage>
            )}
          </FormControl>
          {error && <FormMessage>{error}</FormMessage>}

          <FormButton isLoading={isPending} text="Submit" />
        </Stack>
      </form>
    </Stack>
  );
};

export default ContactForm;
