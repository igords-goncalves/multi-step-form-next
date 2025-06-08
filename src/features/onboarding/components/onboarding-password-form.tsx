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
import { useOnboardingStore } from "../store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const onboardingPasswordSchema = onboardingSchema.pick({
  password: true,
  repeatPassword: true,
});

type OnboardingPasswordSchema = z.infer<typeof onboardingPasswordSchema>;

export const OnboardingPasswordForm = () => {
  const router = useRouter();

  const firstName = useOnboardingStore((state) => state.firstname);
  const lastName = useOnboardingStore((state) => state.lastname);

  const setData = useOnboardingStore((state) => state.setData);
  const form = useForm<OnboardingPasswordSchema>({
    resolver: zodResolver(onboardingPasswordSchema),
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = (data: OnboardingPasswordSchema) => {
    setData(data);
    router.push("/onboarding/username");
  };

  useEffect(() => {
    if (!useOnboardingStore.persist.hasHydrated) return;

    if (!firstName || !lastName) {
      router.push("/onboarding/name");
    }
  }, [firstName, lastName, router]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-lg">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repeat Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Repeat yor password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormDescription>Repeat your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Link href="/onboarding/name">Back</Link>

        <Button type="submit" variant={"outline"}>
          Next
        </Button>
      </form>
    </Form>
  );
};
