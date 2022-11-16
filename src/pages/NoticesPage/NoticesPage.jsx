import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

import Container from 'components/Container/Container';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';

import { NoticesPageMain, NoticePageContainer } from './NoticesPage.styled';

const NoticesPage = () => {
  const { categoryName } = useParams();
  const [category, setCategory] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const paramFilter = searchParams.get('filter');
  const location = useLocation();

  useEffect(() => {
    setCategory(categoryName);
  }, [categoryName]);

  if (!category) {
    setCategory('sell');
  }

  const handleSearch = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  return (
    <NoticePageContainer>
      <Container>
        <NoticesSearch onSubmit={handleSearch} filter={paramFilter}>
          Find your favorite pet
        </NoticesSearch>
        <NoticesCategoriesNav location={location} />
        <NoticesPageMain>
          <NoticesCategoriesList category={category} />
        </NoticesPageMain>
      </Container>
    </NoticePageContainer>
  );
};
export default NoticesPage;
