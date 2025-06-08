import Layout from "@/app/components/Layout";
import { OnboardingNameForm } from "@/features/onboarding/components/onboarding-name-form";

type OnboardingNameProps = {
  name: string;
}

const OnboardingName = ({}: OnboardingNameProps) => {
  return (
    <Layout>
      <OnboardingNameForm />
    </Layout>
  )
};

export default OnboardingName;