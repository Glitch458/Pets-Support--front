import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
} from 'redux/Notices/noticesApi';
import { addFavorite, deleteFavorite } from 'redux/Notices/noticesSlice';

import { HeartBtn } from './HeartBtn.styled';
import { ReactComponent as IconHeart } from 'images/icons/heart.svg';
import { notifySuccess } from 'helpers/toastNotify';

export const HeartButton = ({
  //onClick,
  //className,
  children = '',
  text = '',
  noticesId,
}) => {
  const token = useSelector(state => state.auth.token);
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);

  const isFavorite = item => {
    let res = false;
    if (favoriteNotices.length > 0) {
      res = favoriteNotices.find(elem => elem === item) ? true : false;
    }
    return res;
  };

  const [addNotices, { isError: errorAdd, isLoading: loadingAdd }] =
    useAddFavoriteNoticeMutation();
  const [deleteNotices, { isError: errorDelete, isLoading: loadingDelete }] =
    useDeleteFavoriteNoticeMutation();

  useEffect(() => {
    if (!errorAdd && loadingAdd) {
      dispatch(addFavorite(noticesId));
      notifySuccess('Notices have add to favorite!');
    }
    if (!errorDelete && loadingDelete) {
      dispatch(deleteFavorite(noticesId));
      notifySuccess('Notices have delete from favorite!');
    }
  }, [errorAdd, loadingAdd, errorDelete, loadingDelete, noticesId, dispatch]);

  const handleClick = e => {
    e.preventDefault();

    if (token && token !== null) {
      const favoriteId = favoriteNotices.find(elem => elem === noticesId);
      if (!favoriteId) {
        addNotices(noticesId);
      }
      if (favoriteId) {
        deleteNotices(noticesId);
      }
    }
    if (!token || token === null) {
      navigete('/login');
    }
  };
  return (
    <HeartBtn
      onClick={handleClick}
      className={isFavorite(noticesId) ? 'active' : ''}
    >
      <IconHeart />
      {children}
      {text}
    </HeartBtn>
  );
};
