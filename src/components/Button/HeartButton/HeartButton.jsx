import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
  useGetNoticeByIdQuery,
} from 'redux/Notices/noticesApi';
import { addFavorite, deleteFavorite } from 'redux/Notices/noticesSlice';

import { HeartBtn } from './HeartBtn.styled';
import { ReactComponent as IconHeart } from 'images/icons/heart.svg';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

export const HeartButton = ({
  //onClick,
  //className,
  children = '',
  text = '',
  noticesId,
}) => {
  const { token } = useSelector(state => state.auth);
  const { favoriteNotices } = useSelector(state => state.notices);
  const navigete = useNavigate();
  const dispatch = useDispatch();

  const isFavorite = item => {
    let res = false;
    if (favoriteNotices.length > 0) {
      res = favoriteNotices.find(elem => elem._id === item) ? true : false;
    }
    return res;
  };
  const { data, isSuccess: isSuccessGetData } =
    useGetNoticeByIdQuery(noticesId);

  const [addFavoriteNotices, { isError: errorAdd, isSuccess: isSuccessAdd }] =
    useAddFavoriteNoticeMutation();
  const [
    deleteFavoriteNotices,
    { isError: errorDelete, isSuccess: isSuccessDelete },
  ] = useDeleteFavoriteNoticeMutation();

  useEffect(() => {
    if (!isSuccessGetData) return;

    if (isSuccessAdd) {
      dispatch(addFavorite(data));
      notifySuccess('Notices have add to favorite!');
    }

    if (isSuccessDelete) {
      dispatch(deleteFavorite(data));
      notifySuccess('Notices have delete from favorite!');
    }

    if ((errorAdd && !isSuccessAdd) || (errorDelete && !isSuccessDelete)) {
      notifyError('Sorry, there was an error!');
    }
  }, [
    errorAdd,
    errorDelete,
    isSuccessGetData,
    data,
    isSuccessAdd,
    isSuccessDelete,
    dispatch,
  ]);

  const handleClick = e => {
    e.preventDefault();

    if (token && token !== null) {
      const isFavorite = favoriteNotices.find(elem => elem._id === noticesId);

      if (!isFavorite) {
        addFavoriteNotices(noticesId);
      }
      if (isFavorite) {
        deleteFavoriteNotices(noticesId);
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
