import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import NoticesCategoriesItem from 'components/NoticesCategoriesItem/NoticesCategoriesItem';
import { useGetNoticesByCategoryQuery } from 'redux/Notices/noticesApi';
import Spinner from 'components/Spinner/Spinner';
import { NoticesCategoriesContainerList } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = () => {
  const [searchParams /*setSearchParams*/] = useSearchParams();
  const { categoryName } = useParams();
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);
  //const notices = useSelector(state => state.notices.items);

  const [items, setItems] = useState([]);
  const [visibilityItems, setVisibilityItems] = useState([]);

  //get serch params
  const params = searchParams.get('search') || '';

  //Get notices for category
  const {
    data = [],
    isFetching,
    isError,
  } = useGetNoticesByCategoryQuery(categoryName, {
    //skip: categoryName === '',
  });

  useEffect(() => {
    if (!isFetching && data) {
      setItems(data);
    }
  }, [isFetching, data]);

  useEffect(() => {
    if (categoryName !== 'favorite') {
      setVisibilityItems(items);
    }

    if (categoryName === 'favorite' && favoriteNotices) {
      setVisibilityItems(favoriteNotices);
    }

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
  }, [items, params, favoriteNotices, categoryName]);

  return (
    <NoticesCategoriesContainerList>
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
