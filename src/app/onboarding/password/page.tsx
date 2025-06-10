import Layout from "@/components/Layout";
import { OnboardingPasswordForm } from "@/features/onboarding/components/onboarding-password-form";

type OnboardingPasswordProps = {
  password: string;
}

const OnboardingPassword = ({}: OnboardingPasswordProps) => {
  return (
    <Layout>
      <OnboardingPasswordForm />
    </Layout>
  )
};

export default OnboardingPassword;