import { useLocation } from 'react-router-dom';

import Container from 'components/Container/Container';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { useGetNoticesByCategoryQuery } from 'redux/Notices/noticesApi';
import { useGetCurrentUserQuery } from 'redux/User/userApi';
import { getFavorite } from 'redux/Notices/noticesSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NoticesPageMain, NoticePageContainer } from './NoticesPage.styled';

const NoticesPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);

  const { data: currentUser } = useGetCurrentUserQuery();

  const favoriteCondition = favoriteNotices.length !== 0 && !currentUser;
  const { data: dataFavoriteNotices = [], isSuccess } =
    useGetNoticesByCategoryQuery('favorite', {
      skip: favoriteCondition === true,
    });

  useEffect(() => {
    if (isSuccess && dataFavoriteNotices.length !== 0) {
      const favoriteIds = dataFavoriteNotices.map(item => {
        return item._id;
      });
      dispatch(getFavorite(favoriteIds));
    }
  }, [isSuccess, dataFavoriteNotices, dispatch]);

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
