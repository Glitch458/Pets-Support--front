import { useState } from 'react';
import ImgCover from 'images/pet-cover.jpg';
import { ButtonLink } from 'components/Button/Button';
import { ModalNotice } from '../ModalNotice/ModalNotice';

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
  const [noticesId, setNoticesId] = useState('');

  const [expanded, setExpanded] = useState(false);
  const handleModalToggle = () => {
    setExpanded(prev => {
      return !prev;
    });
  };

  const imgPath = url => {
    return url ? `${url}` : ImgCover;
  };

  // const isFavorite = item => {
  //   let res = false;
  //   if (favoriteNotices.length > 0) {
  //     res = favoriteNotices.find(elem => elem === item) ? true : false;
  //   }
  //   return res;
  // };

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

  return (
    <NoticesItem>
      <CategoryName>{item.category}</CategoryName>
      <AddToFavorites
        type="button"
        noticesId={item._id}
        //className={isFavorite(item._id) ? 'active' : ''}
      ></AddToFavorites>
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
        {item.location && (
          <DetailsItem key={item.location}>
            <span>Place:</span>
            {item.location}
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
          onClick={e => {
            e.preventDefault();
            setNoticesId(item._id);
            handleModalToggle();
          }}
        >
          Learn more
        </ButtonLink>
      </ButtonContainer>
      {expanded && (
        <ModalNotice
          id={noticesId || ''}
          handleModalToggle={handleModalToggle}
        ></ModalNotice>
      )}
    </NoticesItem>
  );
};

export default NoticesCategoriesItem;
