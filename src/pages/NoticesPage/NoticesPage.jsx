import { useLocation } from 'react-router-dom';

import Container from 'components/Container/Container';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';

import { NoticesPageMain, NoticePageContainer } from './NoticesPage.styled';

const NoticesPage = () => {
  const location = useLocation();

  return (
    <NoticePageContainer>
      <Container>
        <NoticesSearch>Find your favorite pet</NoticesSearch>
        <NoticesCategoriesNav location={location} />
        <NoticesPageMain>
          <NoticesCategoriesList />
        </NoticesPageMain>
      </Container>
    </NoticePageContainer>
  );
};
export default NoticesPage;
