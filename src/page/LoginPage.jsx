import LogInForm from 'components/LogInForm/LogIn';
import { Section } from 'components/Section/Section';
import { LoginSection, LoginContainer } from './LoginPage.styled';

const LogInPage = () => {
  return (
    // <LoginSection>
    <Section>
      <LoginContainer>
        <LogInForm />
      </LoginContainer>
    </Section>
    // </LoginSection>
  );
};

export default LogInPage;
