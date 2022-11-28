import {
  User,
  Title,
  UserPhoto,
  Photo,
  PhotoEditLabel,
  PhotoEdit,
  UserContainer,
} from './UserData.styled';
import UserDataItem from './UserDataItem';
// временное фото для стилизации
import photo from './Ellipse 45.jpg';
// import EditIcon from './icons/editValue.svg';
import EditPhotoIcon from './icons/editPhoto.svg';

const UserData = () => {
  return (
    <UserContainer>
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
        <UserDataItem />
      </User>
    </UserContainer>
  );
};

export default UserData;
