import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ImgCover from 'images/pet-cover.jpg';
import { ButtonLink } from 'components/Button/Button';

import {
  NoticesCategoriesListContainer,
  NoticesCategoriesListCard,
  Img,
  Title,
  DetailsList,
  DetailsItem,
  ButtonContainer,
  CategoryName,
  ButtonLike,
} from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ category }) => {
  console.log(category);
  return (
    <NoticesCategoriesListContainer>
      <NoticesCategoriesListCard>
        <CategoryName>in good hands</CategoryName>
        <ButtonLike>
          <FavoriteBorderIcon
            sx={{
              width: 28,
              height: 28,
              color: '#F59256',
            }}
          />
        </ButtonLike>
        <Img src={ImgCover} alt="" />
        <Title>Cute dog looking for a home</Title>
        <DetailsList>
          <DetailsItem key="id1">
            <span>Breed:</span>
            Pomeranian
          </DetailsItem>
          <DetailsItem key="id2">
            <span>Place:</span>
            Lviv
          </DetailsItem>
          <DetailsItem key="id3">
            <span>Age:</span>
            one year
          </DetailsItem>
          <DetailsItem key="id4">
            <span>Price:</span>
            50$
          </DetailsItem>
        </DetailsList>
        <ButtonContainer>
          <ButtonLink>Learn more</ButtonLink>
        </ButtonContainer>
      </NoticesCategoriesListCard>
      <NoticesCategoriesListCard>
        <CategoryName>in good hands</CategoryName>
        <ButtonLike type="button">
          <FavoriteBorderIcon
            sx={{
              width: 28,
              height: 28,
              color: '#F59256',
            }}
          />
        </ButtonLike>
        <Img src={ImgCover} alt="" />
        <Title>Cute dog looking for a home</Title>
        <DetailsList>
          <DetailsItem key="id1">
            <span>Breed:</span>
            Pomeranian
          </DetailsItem>
          <DetailsItem key="id2">
            <span>Place:</span>
            Lviv
          </DetailsItem>
          <DetailsItem key="id3">
            <span>Age:</span>
            one year
          </DetailsItem>
          <DetailsItem key="id4">
            <span>Price:</span>
            50$
          </DetailsItem>
        </DetailsList>
        <ButtonContainer>
          <ButtonLink>Learn more</ButtonLink>
        </ButtonContainer>
      </NoticesCategoriesListCard>
      <NoticesCategoriesListCard>
        <CategoryName>in good hands</CategoryName>
        <ButtonLike type="button">
          <FavoriteBorderIcon
            sx={{
              width: 28,
              height: 28,
              color: '#F59256',
            }}
          />
        </ButtonLike>
        <Img src={ImgCover} alt="" />
        <Title>Cute dog looking for a homeCute dog looking for a home</Title>
        <DetailsList>
          <DetailsItem key="id1">
            <span>Breed:</span>
            Pomeranian
          </DetailsItem>
          <DetailsItem key="id2">
            <span>Place:</span>
            Lviv
          </DetailsItem>
          <DetailsItem key="id3">
            <span>Age:</span>
            one year
          </DetailsItem>
          <DetailsItem key="id4">
            <span>Price:</span>
            50$
          </DetailsItem>
        </DetailsList>
        <ButtonContainer>
          <ButtonLink>Learn more</ButtonLink>
        </ButtonContainer>
      </NoticesCategoriesListCard>
      <NoticesCategoriesListCard>
        <CategoryName>in good hands</CategoryName>
        <ButtonLike type="button">
          <FavoriteBorderIcon
            sx={{
              width: 28,
              height: 28,
              color: '#F59256',
            }}
          />
        </ButtonLike>
        <Img src={ImgCover} alt="" />
        <Title>Cute dog looking for a home</Title>
        <DetailsList>
          <DetailsItem key="id1">
            <span>Breed:</span>
            Pomeranian
          </DetailsItem>
          <DetailsItem key="id2">
            <span>Place:</span>
            Lviv
          </DetailsItem>
          <DetailsItem key="id3">
            <span>Age:</span>
            one year
          </DetailsItem>
          <DetailsItem key="id4">
            <span>Price:</span>
            50$
          </DetailsItem>
        </DetailsList>
        <ButtonContainer>
          <ButtonLink>Learn more</ButtonLink>
        </ButtonContainer>
      </NoticesCategoriesListCard>
      <NoticesCategoriesListCard>
        <CategoryName>in good hands</CategoryName>
        <ButtonLike type="button">
          <FavoriteBorderIcon
            sx={{
              width: 28,
              height: 28,
              color: '#F59256',
            }}
          />
        </ButtonLike>
        <Img src={ImgCover} alt="" />
        <Title>Cute dog looking for a home</Title>
        <DetailsList>
          <DetailsItem key="id1">
            <span>Breed:</span>
            Pomeranian
          </DetailsItem>
          <DetailsItem key="id2">
            <span>Place:</span>
            Lviv
          </DetailsItem>
          <DetailsItem key="id3">
            <span>Age:</span>
            one year
          </DetailsItem>
          <DetailsItem key="id4">
            <span>Price:</span>
            50$
          </DetailsItem>
        </DetailsList>
        <ButtonContainer>
          <ButtonLink>Learn more</ButtonLink>
        </ButtonContainer>
      </NoticesCategoriesListCard>
    </NoticesCategoriesListContainer>
  );
};
export default NoticesCategoriesList;
