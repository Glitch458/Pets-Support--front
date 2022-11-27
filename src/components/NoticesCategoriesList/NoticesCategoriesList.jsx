// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ImgCover from 'images/pet-cover.jpg';
import { ButtonLink } from 'components/Button/Button';
import { ModalNotice } from '../ModalNotice/ModatNotice';

import {
  NoticesCategoriesContainerList,
  NoticesCategoriesItem,
  Img,
  Title,
  DetailsList,
  DetailsItem,
  ButtonContainer,
  CategoryName,
  AddToFavorites,
} from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ data }) => {
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);
  const [detailed, setDetailed] = useState(false);

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

  const age = date => {
    let today = new Date();
    let birthDate = new Date(date);
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

    return age ? age : m;
  };

  return (
    <NoticesCategoriesContainerList>
      {data.map(item => (
        <NoticesCategoriesItem key={item._id}>
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
            <DetailsItem key={item.breed}>
              <span>Breed:</span>
              {item.breed}
            </DetailsItem>
            <DetailsItem key={item.place}>
              <span>Place:</span>
              {item.place}
            </DetailsItem>
            <DetailsItem key={item.birthday}>
              <span>Age:</span>
              {age(item.birthday)}
            </DetailsItem>
            {item.category === 'sell' && (
              <DetailsItem key={item.price}>
                <span>Price:</span>
                {item.price ? item.price : '0'}
              </DetailsItem>
            )}
          </DetailsList>
          <ButtonContainer>
            <ButtonLink onClick={toggleModal}>Learn more</ButtonLink>
          </ButtonContainer>
        </NoticesCategoriesItem>
      ))}
      {detailed && <ModalNotice toggleModal={toggleModal}></ModalNotice>}
    </NoticesCategoriesContainerList>
  );
};

export default NoticesCategoriesList;
