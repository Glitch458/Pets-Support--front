import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useGetFriendsQuery } from 'redux/Friends/friendsApi';
import { newItems } from 'redux/Friends/friendsSlice';

import Container from 'components/Container/Container';
import FriendsList from 'components/FriendsList/FriendsList';
import Spinner from 'components/Spinner/Spinner';
import { PageWrapper } from 'pages/NewsPage/NewsPage.styled';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const { data = [], isFetching, isError } = useGetFriendsQuery();

  const newsItem = useSelector(state => state.news.items);

  useEffect(() => {
    if (!isFetching && data) {
      dispatch(newItems(data));
    }
  }, [newsItem, isFetching, data, dispatch]);

  return (
    <PageWrapper>
      <Container>
        {isFetching && <Spinner />}
        {!isFetching && isError && (
          <h2>Server error. Please, try again later.</h2>
        )}
        {!isFetching && !isError && <FriendsList friends={data} />}
      </Container>
    </PageWrapper>
  );
};

export default OurFriendsPage;
