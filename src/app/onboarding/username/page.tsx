import Layout from "@/app/components/Layout";
import { OnboardingUsernameForm } from "@/features/onboarding/components/onboarding-username-form";
import { PropsWithChildren } from "react";

type OnboardingUsernameProps = PropsWithChildren;

const OnboardingUsername = ({}: OnboardingUsernameProps) => {
  return (
    <Layout>
      <OnboardingUsernameForm />
    </Layout>
  );
};

export default OnboardingUsername;
