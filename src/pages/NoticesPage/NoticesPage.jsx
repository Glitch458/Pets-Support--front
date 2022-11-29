import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { useGetNoticesByCategoryQuery } from 'redux/Notices/noticesApi';
import { renewItems, getFavorite } from 'redux/Notices/noticesSlice';

import Container from 'components/Container/Container';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import Spinner from 'components/Spinner/Spinner';

import { NoticesPageMain, NoticePageContainer } from './NoticesPage.styled';

const NoticesPage = () => {
  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  //const favoriteNotices = useSelector(state => state.notices.favoriteNotices);
  const items = useSelector(state => state.notices.items);

  const { currentData = [], isSuccess } = useGetNoticesByCategoryQuery(
    'favorite',
    {
      skip: items.length !== 0 && token !== null,
    }
  );

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
    if (isSuccess && currentData.length !== 0) {
      const favoriteIds = currentData.map(item => {
        return item._id;
      });
      dispatch(getFavorite(favoriteIds));
    }

    if (!isFetching && data) {
      dispatch(renewItems(data));
    }

    //if (noticesItem.length !== 0) {
    setVisibilityItems(noticesItem);
    //}

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
