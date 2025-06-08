"use client";
import { z } from "zod";
import { onboardingSchema } from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useOnboardingStore } from '../store';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const onboardingNameSchema = onboardingSchema.pick({
  firstname: true,
  lastname: true,
});

type OnboardingNameSchema = z.infer<typeof onboardingNameSchema>;

export const OnboardingNameForm = () => {
  const router = useRouter();


  const setData = useOnboardingStore((state) => state.setData);
  const form = useForm<OnboardingNameSchema>({
    resolver: zodResolver(onboardingNameSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
    },
  });


  const onSubmit = (data: OnboardingNameSchema) => {
    setData(data);
    router.push("/onboarding/password");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-lg">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Jonh" {...field} />
              </FormControl>
              <FormDescription>This is the first name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormDescription>This is the last name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button type="submit" variant={"outline"}>
          Next
        </Button>
      </form>
    </Form>
  );
};
