import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Container from 'components/Container/Container';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import Spinner from 'components/Spinner/Spinner';

import { NoticesPageMain, NoticePageContainer } from './NoticesPage.styled';

import { useGetNoticesByCategoryQuery } from 'redux/Notices/noticesApi';
import { renewItems } from 'redux/Notices/noticesSlice';

const NoticesPage = () => {
  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const {
    data = [],
    isFetching,
    isError,
  } = useGetNoticesByCategoryQuery(categoryName, {
    skip: categoryName === '',
  });
  const noticesItem = useSelector(state => state.notices.items);
  const params = searchParams.get('search') || '';

  const [visibilityItems, setVisibilityItems] = useState([]);
  const [normalozeSearchParams, setNormalozeSearchParams] = useState('');

  useEffect(() => {
    if (!isFetching && data) {
      dispatch(renewItems(data));
    }

    setVisibilityItems(noticesItem);

    if (params !== '') {
      setNormalozeSearchParams(params.replace('-', ' '));

      const arrayOfParams = params.toLowerCase().split('-');

      const searchNoticesItem = noticesItem.filter(item => {
        const arr = arrayOfParams.filter(arrayOfParamsItem => {
          return item.title.toLowerCase().includes(arrayOfParamsItem);
        });
        return arr.length > 0 ? item : NaN;
      });
      setVisibilityItems(searchNoticesItem);
    }
  }, [noticesItem, isFetching, data, dispatch, params]);

  const handleSearch = value => {
    const normalizeValue = value.trim().replace(' ', '-');
    setSearchParams(value !== '' ? { search: normalizeValue } : {});
  };

  return (
    <NoticePageContainer>
      <Container>
        <NoticesSearch onSubmit={handleSearch} search={normalozeSearchParams}>
          Find your favorite pet
        </NoticesSearch>
        <NoticesCategoriesNav location={location} />
        <NoticesPageMain>
          {isFetching && visibilityItems.length === 0 && <Spinner />}

          {!isFetching && visibilityItems.length === 0 && (
            <h2>Category {categoryName} is empty </h2>
          )}

          {!isFetching && isError && (
            <h2>Sorry, there is no information on your request</h2>
          )}

          {visibilityItems && !isFetching && !isError && (
            <NoticesCategoriesList data={visibilityItems} />
          )}
        </NoticesPageMain>
      </Container>
    </NoticePageContainer>
  );
};
export default NoticesPage;
