import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import Container from 'components/Container/Container';
import { NewsList } from 'components/NewsList/NewsList';
import { NewsListWrapper } from './NewsPage.styled';

const NewsPage = () => {
  return (
    <NewsListWrapper>
      <Container>
        <NoticesSearch>News</NoticesSearch>
        <NewsList></NewsList>
      </Container>
    </NewsListWrapper>
  );
};

export default NewsPage;
