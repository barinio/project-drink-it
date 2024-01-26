import LogInForm from 'components/LogInForm/LogIn';
import { Section } from 'components/Section/Section';
import { LoginSection } from './LoginPage.styled';

const LogInPage = () => {
  return (
    <>
      <Section>
        <LoginSection>
          <LogInForm />
        </LoginSection>
      </Section>
    </>
  );
};

export default LogInPage;
