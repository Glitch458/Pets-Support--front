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

const data = {
  name: 'anna',
  email: 'anna00@gmail.com',
  birthday: '00.00.0000',
  phone: '+38000000000',
  city: 'Kiev',
};
export default function UserData() {
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
        <UserDataItem data={data} />{' '}
      </User>
    </UserContainer>
  );
}
