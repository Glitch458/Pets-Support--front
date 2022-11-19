import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ImgCover from "images/pet-cover.jpg";
import { ButtonLink } from "components/Button/Button";
// import { useState } from "react";
// import { ModalNotice } from "../ModalNotice/ModatNotice";

import {
  NoticesCategoriesContainerList,
  NoticesCategoriesItem,
  Img,
  Title,
  DetailsList,
  DetailsItem,
  ButtonContainer,
  CategoryName,
  ButtonLike,
} from "./NoticesCategoriesList.styled";

const NoticesCategoriesList = ({ data }) => {
  // console.log(category);
  // const [detailed, setDetailed] = useState(false);

  // const toggleModal = () => {
  //   setDetailed((prev) => {
  //     return !prev;
  //   });
  // };

  return (
    <NoticesCategoriesContainerList>
      {data.map((item) => (
        <NoticesCategoriesItem key={item._id}>
          <CategoryName>{item.category}</CategoryName>
          <ButtonLike type="button">
            <FavoriteBorderIcon
              sx={{
                width: 28,
                height: 28,
                color: "#F59256",
              }}
            />
          </ButtonLike>
          <Img src={ImgCover} alt="" />
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
            <DetailsItem key={data.birthday}>
              <span>Age:</span>
              {data.birthday}
            </DetailsItem>
            <DetailsItem key="id4">
              <span>Price:</span>
              50$
            </DetailsItem>
          </DetailsList>
          <ButtonContainer>
            <ButtonLink /*onClick={toggleModal}*/>Learn more</ButtonLink>
          </ButtonContainer>
        </NoticesCategoriesItem>
      ))}
    </NoticesCategoriesContainerList>
  );
};

export default NoticesCategoriesList;
