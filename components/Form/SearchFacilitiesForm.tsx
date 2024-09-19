"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormHeader from "./FormHeader";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Select,
} from "@chakra-ui/react";
import { SearchFacilitySchema } from "@/schemas";
import FormMessage from "./FormMessage";
import FormButton from "./FormButton";
import { FacilityType, Sport } from "@prisma/client";

const SearchFacilitiesForm = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SearchFacilitySchema>>({
    resolver: zodResolver(SearchFacilitySchema),
  });

  const onSubmit = (values: z.infer<typeof SearchFacilitySchema>) => {
    startTransition(async () => {
      setError(""); // clear error message
      // await signUp(values).then((data) => setError(data.error as string));
    });
  };
  return (
    <Stack
      p={5}
      bg="var(--beige)"
      boxShadow="0 5px 20px rgba(0,0,0,0.2)"
      maxW="800px"
      w="full"
      spacing={5}
      rounded="xl"
    >
      <FormHeader text="Book a facility now" />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5}>
          <FormControl isInvalid={!!errors?.facilityType?.message}>
            <FormLabel>Facility Type</FormLabel>
            <Select
              border="1px solid var(--grey)"
              disabled={isPending}
              {...register("facilityType")}
            >
              <option selected hidden disabled value="">
                Eg. Court
              </option>
              {Object.values(FacilityType).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            {errors?.facilityType?.message && (
              <FormErrorMessage>{errors.facilityType.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors?.sport?.message}>
            <FormLabel>Sport</FormLabel>
            <Select disabled={isPending} {...register("sport")}>
              <option selected hidden disabled value="">
                Eg. Badminton
              </option>
              {Object.values(Sport).map((item) => (
                <option key={item} value={item}>
                  {item.replace("_", " ")}
                </option>
              ))}
            </Select>
            {errors?.sport?.message && (
              <FormErrorMessage>{errors.sport.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors?.date?.message}>
            <FormLabel>Date of birth</FormLabel>
            <Input
              type="date"
              disabled={isPending}
              {...register("date")}
              min={new Date().toISOString().split("T")[0]}
            />
            {errors?.date?.message && (
              <FormErrorMessage>{errors.date.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors?.time?.message}>
            <FormLabel>Time</FormLabel>
            <Select disabled={isPending} {...register("time")}>
              <option selected hidden disabled value="">
                Eg. Morning
              </option>
              {timeStamps.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            {errors?.time?.message && (
              <FormErrorMessage>{errors.time.message}</FormErrorMessage>
            )}
          </FormControl>
          {error && <FormMessage type="Error">{error}</FormMessage>}

          <FormButton isLoading={isPending} text="Search" />
        </Stack>
      </form>
    </Stack>
  );
};

const timeStamps = ["Morning", "Afternoon", "Evening", "All"];

export default SearchFacilitiesForm;
