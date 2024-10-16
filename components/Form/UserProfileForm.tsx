"use client";
import { updateUser } from "@/app/action/user";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState, useTransition } from "react";
import * as z from "zod";
import FormButton from "@/components/Form/FormButton";
import FormHeader from "@/components/Form/FormHeader";
import FormMessage from "@/components/Form/FormMessage";
import { ProfileSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import FormRedirect from "./FormRedirect";

interface UserProfileProps {
  user: User | null;
}
const UserProfileForm = ({ user }: UserProfileProps) => {
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  const onSubmit = (values: z.infer<typeof ProfileSchema>) => {
    startTransition(async () => {
      setError(""); // clear error message
      await updateUser(values).then((data) => setError(data.error as string));
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
      my={10}
      spacing={5}
    >
      <FormHeader text="My Profile" />
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
              defaultValue={
                user?.dateOfBirth
                  ? new Date(user.dateOfBirth).toISOString().split("T")[0]
                  : ""
              }
              type="date"
              disabled={isPending}
              {...register("dateOfBirth")}
              max={new Date().toISOString().split("T")[0]}
            />
            {errors?.dateOfBirth?.message && (
              <FormErrorMessage>{errors.dateOfBirth.message}</FormErrorMessage>
            )}
          </FormControl>
          {/* <FormControl>
            <FormLabel>Profile Picture</FormLabel>
            <Input type="file" />
          </FormControl>
          {errors?.dateOfBirth?.message && (
            <FormErrorMessage>{errors.dateOfBirth.message}</FormErrorMessage>
          )} */}

          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input variant="cream" {...register("email")} disabled />
          </FormControl>
          {error && <FormMessage type="Error">{error}</FormMessage>}

          <FormButton isLoading={isPending} text="Update" />
        </Stack>
      </form>
      {user?.password && (
        <FormRedirect
          href="/reset-password"
          hrefText="Reset"
          text="Forgot your password?"
        />
      )}
    </Stack>
  );
};

export default UserProfileForm;
