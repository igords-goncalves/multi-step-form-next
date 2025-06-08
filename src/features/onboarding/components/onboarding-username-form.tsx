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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const onboardingUsernameSchema = onboardingSchema.pick({
  username: true,
  terms: true,
});

type OnboardingUsernameSchema = z.infer<typeof onboardingUsernameSchema>;

export const OnboardingUsernameForm = () => {
  // const setData = useOnboardingStore((state) => state.setData);

  const router = useRouter();

  const firstName = useOnboardingStore((state) => state.firstname);
  const lastName = useOnboardingStore((state) => state.lastname);
  const password = useOnboardingStore((state) => state.password);

  const form = useForm<OnboardingUsernameSchema>({
    resolver: zodResolver(onboardingUsernameSchema),
    defaultValues: {
      username: "",
      terms: false,
    },
  });

  const onSubmit = (data: OnboardingUsernameSchema) => {
    console.log({
      ...data,
      firstName,
      lastName,
      password,
    });
  };

  useEffect(() => {
    if (!useOnboardingStore.persist.hasHydrated) return;

    if (!firstName || !lastName || !password) {
      router.push("/onboarding/password");
    }
  }, [firstName, lastName, password, router]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-lg">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="john_doe" {...field} />
              </FormControl>
              <FormDescription>This is your username.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Terms</FormLabel>
              <FormControl>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Link href="/onboarding/password">Back</Link>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
