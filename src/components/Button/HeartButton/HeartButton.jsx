import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
} from 'redux/Notices/noticesApi';
import { addFavorite, deleteFavorite } from 'redux/Notices/noticesSlice';

import { HeartBtn } from './HeartBtn.styled';
import { ReactComponent as IconHeart } from 'images/icons/heart.svg';

export const HeartButton = ({
  //onClick,
  className,
  children = '',
  text = '',
  noticesId,
}) => {
  const token = useSelector(state => state.auth.token);
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);

  const [addNotices] = useAddFavoriteNoticeMutation();
  const [deleteNotices] = useDeleteFavoriteNoticeMutation();

  const handleClick = e => {
    e.preventDefault();

    if (token && token !== null) {
      const favoriteId = favoriteNotices.find(elem => elem === noticesId);
      if (!favoriteId) {
        addNotices(noticesId);
        dispatch(addFavorite(noticesId));
      }
      if (favoriteId) {
        deleteNotices(noticesId);
        dispatch(deleteFavorite(noticesId));
      }
    }
    if (!token || token === null) {
      navigete('/login');
    }
  };
  return (
    <HeartBtn onClick={handleClick} className={className}>
      <IconHeart />
      {children}
      {text}
    </HeartBtn>
  );
};
