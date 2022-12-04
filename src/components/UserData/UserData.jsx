import {
  useGetCurrentUserQuery,
  useUpdateUserInfoMutation,
} from 'redux/User/userApi';

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
import photo from './avatar-placeholder.png';
// import EditIcon from './icons/editValue.svg';
import EditPhotoIcon from './icons/editPhoto.svg';

const UserData = () => {
  const { data = [] } = useGetCurrentUserQuery();
  const [changeData] = useUpdateUserInfoMutation();

  return (
    <UserContainer>
      <Title>My information:</Title>
      <User>
        <UserPhoto>
          <Photo src={data.avatarURL || photo} alt="User" />
          <form method="post">
            <PhotoEditLabel>
              <img src={EditPhotoIcon} alt="Edit" />
              <PhotoEdit type="file" placeholder="asdasd" />
              Edit photo
            </PhotoEditLabel>
          </form>
        </UserPhoto>
        <UserDataItem data={data} changeData={changeData} />
      </User>
    </UserContainer>
  );
};

export default UserData;
