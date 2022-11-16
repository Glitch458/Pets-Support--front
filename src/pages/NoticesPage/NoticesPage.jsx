import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import Container from 'components/Container/Container';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';

import { NoticesPageMain, NoticePageContainer } from './NoticesPage.styled';

const NoticesPage = () => {
  const { categoryName } = useParams();
  const [category, setCategory] = useState('');

  useEffect(() => {
    setCategory(categoryName);
  }, [categoryName]);

  if (!category) {
    setCategory('sell');
  }

  return (
    <NoticePageContainer>
      <Container>
        <NoticesSearch>Find your favorite pet</NoticesSearch>
        <NoticesCategoriesNav />
        <NoticesPageMain>
          <Outlet />
          <NoticesCategoriesList category={category} />
        </NoticesPageMain>
      </Container>
    </NoticePageContainer>
  );
};
export default NoticesPage;
