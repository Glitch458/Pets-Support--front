import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import { NewsList } from 'components/NewsList/NewsList';
import Container from 'components/Container/Container';
import { PageWrapper } from './NewsPage.styled';

const NewsPage = () => {
  return (
    <PageWrapper>
      <Container>
        <NoticesSearch>News</NoticesSearch>
        <NewsList />
      </Container>
    </PageWrapper>
  );
};

export default NewsPage;
