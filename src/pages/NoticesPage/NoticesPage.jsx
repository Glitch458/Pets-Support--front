import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';

import { NoticesPageMain } from './NoticesPage.styled';

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
    <>
      <NoticesSearch>Find your favorite pet</NoticesSearch>
      <NoticesCategoriesNav />
      <NoticesPageMain>
        <Outlet />
        <NoticesCategoriesList category={category} />
      </NoticesPageMain>
    </>
  );
};
export default NoticesPage;
