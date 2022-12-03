import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import NoticesCategoriesItem from 'components/NoticesCategoriesItem/NoticesCategoriesItem';
import { useGetNoticesByCategoryQuery } from 'redux/Notices/noticesApi';
import { getFavorite } from 'redux/Notices/noticesSlice';
//import { renewItems } from 'redux/Notices/noticesSlice';
import Spinner from 'components/Spinner/Spinner';
import { NoticesCategoriesContainerList } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = () => {
  const [searchParams /*setSearchParams*/] = useSearchParams();
  const { categoryName } = useParams();
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);
  //const noticesItem = useSelector(state => state.notices.items);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [visibilityItems, setVisibilityItems] = useState([]);

  //get serch params
  const params = searchParams.get('search') || '';

  // Get favotite Notices
  const favoriteCondition = favoriteNotices.length !== 0 || token === null;
  const { data: favoriteData = [], isSuccess } = useGetNoticesByCategoryQuery(
    'favorite',
    {
      skip: favoriteCondition === true,
    }
  );

  //Get notices for category
  const {
    data = [],
    isFetching,
    isError,
  } = useGetNoticesByCategoryQuery(categoryName, {
    skip: categoryName === '',
  });

  useEffect(() => {
    if (isSuccess && favoriteData.length !== 0) {
      const favoriteIds = favoriteData.map(item => {
        return item._id;
      });
      dispatch(getFavorite(favoriteIds));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isFetching && data) {
      setItems(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setVisibilityItems(items);

    if (params !== '') {
      const arrayOfParams = params.toLowerCase().split('+');
      const searchNoticesItem = items.filter(item => {
        const arr = arrayOfParams.filter(arrayOfParamsItem => {
          return item.title.toLowerCase().includes(arrayOfParamsItem);
        });
        return arr.length > 0 ? item : NaN;
      });
      setVisibilityItems(searchNoticesItem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, params]);

  return (
    <NoticesCategoriesContainerList>
      {/* {console.log('list')} */}
      {isFetching && visibilityItems.length === 0 && <Spinner />}

      {!isFetching && visibilityItems.length === 0 && (
        <h2>No data available</h2>
      )}

      {!isFetching && isError && (
        <h2>Sorry, there is no information on your request</h2>
      )}

      {visibilityItems &&
        !isFetching &&
        !isError &&
        visibilityItems.map(item => (
          <NoticesCategoriesItem key={item._id} item={item} />
        ))}
    </NoticesCategoriesContainerList>
  );
};

export default NoticesCategoriesList;
