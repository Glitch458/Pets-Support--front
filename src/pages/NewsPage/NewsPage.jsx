import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NewsList from 'components/NewsList/NewsList';
import Container from 'components/Container/Container';
import Spinner from 'components/Spinner/Spinner';

import { PageWrapper, NewsListContainer } from './NewsPage.styled';

import { useGetNewsQuery } from 'redux/News/newsApi';
import { renewItems } from 'redux/News/newsSlice';

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { data = [], isFetching, isError } = useGetNewsQuery();

  const newsItem = useSelector(state => state.news.items);
  const params = searchParams.get('search') || '';

  const [visibileItems, setVisibleItems] = useState([]);
  const [normalizeSearchParams, setNormalizeSearchParams] = useState('');

  useEffect(() => {
    if (!isFetching && data) {
      dispatch(renewItems(data));
    }

    setVisibleItems(newsItem);

    if (params !== '') {
      setNormalizeSearchParams(params.replace('-', ' '));

      const arrayOfParams = params.toLowerCase().split('-');

      const searchNoticesItem = newsItem.filter(item => {
        const arr = arrayOfParams.filter(arrayOfParamsItem => {
          return item.title.toLowerCase().includes(arrayOfParamsItem);
        });
        return arr.length > 0 ? item : NaN;
      });
      setVisibleItems(searchNoticesItem);
    }
  }, [newsItem, isFetching, data, dispatch, params]);

  const handleSearch = value => {
    const normalizeValue = value.trim().replace(' ', '-');
    setSearchParams(value !== '' ? { search: normalizeValue } : {});
  };

  return (
    <PageWrapper>
      <Container>
        <NoticesSearch onSubmit={handleSearch} search={normalizeSearchParams}>
          News
        </NoticesSearch>
        <NewsListContainer>
          {isFetching && visibileItems.length === 0 && <Spinner />}
          {!isFetching && visibileItems.length === 0 && (
            <h2>Sorry, there is no information on your request</h2>
          )}
          {!isFetching && isError && (
            <h2>Server error. Please, try again later.</h2>
          )}
          {visibileItems && !isFetching && !isError && (
            <NewsList news={visibileItems} />
          )}
        </NewsListContainer>
      </Container>
    </PageWrapper>
  );
};

export default NewsPage;
