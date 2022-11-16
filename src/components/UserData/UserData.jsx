import { useState } from 'react';
import {
  User,
  Title,
  UserPhoto,
  Photo,
  InfoItems,
  InfoItem,
  Values,
  Property,
  PhotoEditLabel,
  PhotoEdit,
  EditInputBtn,
  EditInput,
} from './UserData.styled';
import EditValue from './icons/editValue';
// временное фото для стилизации
import photo from './Ellipse 45.jpg';
import EditIcon from './icons/editValue.svg';
import EditPhotoIcon from './icons/editPhoto.svg';

export default function UserData() {
  const [isEdit, setIsEdit] = useState(false);
  const [userName] = useState('Anna');
  return (
    <div>
      <Title>My information:</Title>
      <User>
        <UserPhoto>
          <Photo src={photo} alt="User" />
          <form method="post">
            <PhotoEditLabel>
              <img src={EditPhotoIcon} alt="Edit" />
              <PhotoEdit type="file" placeholder="asdasd" />
              Edit photo
            </PhotoEditLabel>
          </form>
        </UserPhoto>
        <div>
          <InfoItems>
            <InfoItem>
              <Property>Name:</Property>
              {isEdit ? (
                <EditInput value={userName}></EditInput>
              ) : (
                <Values>{userName}</Values>
              )}
              <EditInputBtn
                onClick={() => {
                  setIsEdit(!isEdit);
                }}
              >
                {isEdit ? (
                  <EditValue id="svgEnter" />
                ) : (
                  <EditValue id="svgEdit" />
                )}
              </EditInputBtn>
            </InfoItem>
            <InfoItem>
              <Property>Email:</Property>
              <Values>anna00@gmail.com|</Values>
              <EditInputBtn>
                <EditValue id="svgEdit" />
              </EditInputBtn>
            </InfoItem>
            <InfoItem>
              <Property>Birthday:</Property>
              <Values>00.00.0000</Values>
              <EditInputBtn>
                <EditValue id="svgEdit" />
              </EditInputBtn>
            </InfoItem>
            <InfoItem>
              <Property>Email:</Property>
              <Values>anna00@gmail.com|</Values>
              <EditInputBtn>
                <EditValue id="svgEdit" />
              </EditInputBtn>
            </InfoItem>
            <InfoItem>
              <Property>Phone:</Property>
              <Values>+38000000000</Values>
              <EditInputBtn>
                <EditValue id="svgEdit" />
              </EditInputBtn>
            </InfoItem>
            <InfoItem>
              <Property>City:</Property>
              <Values>Kiev</Values>
              <EditInputBtn>
                <EditValue id="svgEdit" />
              </EditInputBtn>
            </InfoItem>
          </InfoItems>
        </div>
      </User>
    </div>
  );
}
