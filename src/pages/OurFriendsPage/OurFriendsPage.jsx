import Container from 'components/Container/Container';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { PageWrapper } from 'pages/NewsPage/NewsPage.styled';


const OurFriendsPage = () => {
  return (
    <PageWrapper>
      <Container>
        <FriendsList />
      </Container>
    </PageWrapper>
  );
};

export default OurFriendsPage;
