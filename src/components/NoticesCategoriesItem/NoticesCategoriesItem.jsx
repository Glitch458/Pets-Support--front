// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImgCover from 'images/pet-cover.jpg';
import { ButtonLink } from 'components/Button/Button';
import { ModalNotice } from '../ModalNotice/ModatNotice';

import { useGetNoticesByCategoryQuery } from 'redux/Notices/noticesApi';
import { getFavorite } from 'redux/Notices/noticesSlice';

import {
  NoticesItem,
  Img,
  Title,
  DetailsList,
  DetailsItem,
  ButtonContainer,
  CategoryName,
  AddToFavorites,
} from './NoticesCategoriesItem.styled';

const NoticesCategoriesItem = ({ item }) => {
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);
  const token = useSelector(state => state.auth.token);
  const [detailed, setDetailed] = useState(false);
  const [noticesId, setNoticesId] = useState('');
  const dispatch = useDispatch();

  const favoriteCondition = favoriteNotices.length !== 0 && token !== null;
  const { data: dataFavoriteNotices = [], isSuccess } =
    useGetNoticesByCategoryQuery('favorite', {
      skip: favoriteCondition === true,
    });

  const toggleModal = () => {
    setDetailed(prev => {
      return !prev;
    });
  };
  const imgPath = url => {
    return url ? `https://pets-support.onrender.com/${url}` : ImgCover;
  };

  const isFavorite = item => {
    let res = false;
    if (favoriteNotices.length > 0) {
      res = favoriteNotices.find(elem => elem === item) ? true : false;
    }
    return res;
  };

  const age = (date = '') => {
    let dateArray = date.split('.');
    const normalizeDate = `${dateArray[1]}.${dateArray[0]}.${dateArray[2]}`;
    let today = new Date();
    let birthDate = new Date(normalizeDate);
    let age = today.getFullYear() - birthDate.getFullYear();

    let m = today.getMonth() - birthDate.getMonth();
    let d = today.getDay() - birthDate.getDay();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age === 0) {
      m = 12 + m;
      if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
        m--;
      }
    }

    let resultAge = '';

    if (age === 1) {
      resultAge = 'one year';
    }
    if (age > 1) {
      resultAge = `${age} years`;
    }
    if (age < 1) {
      const months = today.getMonth() - birthDate.getMonth();
      resultAge = `${months} months`;
    }
    return resultAge;
  };

  useEffect(() => {
    if (isSuccess && dataFavoriteNotices.length !== 0) {
      const favoriteIds = dataFavoriteNotices.map(item => {
        return item._id;
      });
      dispatch(getFavorite(favoriteIds));
    }
  }, [dataFavoriteNotices, dispatch, isSuccess]);

  return (
    <NoticesItem>
      <CategoryName>{item.category}</CategoryName>
      <AddToFavorites
        type="button"
        noticesId={item._id}
        className={isFavorite(item._id) ? 'active' : ''}
      >
        {/* <FavoriteBorderIcon
              sx={{
                width: 28,
                height: 28,
                color: "#F59256",
              }}
            /> */}
      </AddToFavorites>
      <Img
        src={imgPath(item.photoURL)}
        alt={item.breed}
        height={328}
        widht={328}
      />
      <Title>{item.title}</Title>
      <DetailsList>
        {item.breed && (
          <DetailsItem key={item.breed}>
            <span>Breed:</span>
            {item.breed}
          </DetailsItem>
        )}
        {item.place && (
          <DetailsItem key={item.place}>
            <span>Place:</span>
            {item.place}
          </DetailsItem>
        )}
        {item.birthday && (
          <DetailsItem key={item.birthday}>
            <span>Age:</span>
            {age(item.birthday)}
          </DetailsItem>
        )}
        {item.category === 'sell' && (
          <DetailsItem key={item.price}>
            <span>Price:</span>
            {item.price ? item.price : '0'}
          </DetailsItem>
        )}
      </DetailsList>
      <ButtonContainer>
        <ButtonLink
          onClick={() => {
            setNoticesId(item._id);
            toggleModal();
          }}
        >
          Learn more
        </ButtonLink>
      </ButtonContainer>
      {detailed && (
        <ModalNotice
          id={noticesId || ''}
          toggleModal={toggleModal}
        ></ModalNotice>
      )}
    </NoticesItem>
  );
};

export default NoticesCategoriesItem;
