import { useState, useEffect } from 'react';
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
import photo from 'images/avatar-placeholder.png';
import EditPhotoIcon from 'images/icons/editPhoto.svg';

const UserData = () => {
  const { data = [] } = useGetCurrentUserQuery();
  const [tempImg, setTempImg] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [changeData] = useUpdateUserInfoMutation();

  const { avatarURL } = data;

  const onImageChange = e => {
    const { files } = e.currentTarget;
    if (files) {
      setTempImg(URL.createObjectURL(files[0]));
      setAvatar(files[0]);
    }
  };

  useEffect(() => {
    if (avatar) {
      const update = new FormData();
      update.append('avatarURL', avatar);
      changeData(update);
    }
  }, [avatar, changeData]);

  return (
    <UserContainer>
      <Title>My information:</Title>
      <User>
        <UserPhoto>
          <Photo src={tempImg || avatarURL || photo} alt="avatarURL" />
          <form encType="multipart/form-data">
            <PhotoEditLabel>
              <img src={EditPhotoIcon} alt="Edit" />
              <PhotoEdit
                type="file"
                name="avatarURL"
                accept=".png, .jpg, .jpeg"
                onChange={onImageChange}
              />
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
