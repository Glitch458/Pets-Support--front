import { WelcomeSection, WelcomeText } from './Homepage.styled';
import Container from 'components/Container/Container';

const Homepage = () => {
  return (
    <WelcomeSection>
      <Container>
        <WelcomeText>Take good care of your small pets</WelcomeText>
      </Container>
    </WelcomeSection>
  );
};

export default Homepage;
