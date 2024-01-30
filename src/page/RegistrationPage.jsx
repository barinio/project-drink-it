import { Section } from 'components/Section/Section';
import SignUpForm from 'components/SignUpForm/SignUp';
import { SignupPage } from './RegistrationPage.styled';

const RegistrationPage = () => {
  return (
    <Section>
      {/* <SignupWrapper> */}
        <SignupPage>
          <SignUpForm />
        </SignupPage>
      {/* </SignupWrapper> */}
    </Section>
  );
};

export default RegistrationPage;
