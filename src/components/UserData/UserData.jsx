import {
  User,
  Title,
  UserPhoto,
  Photo,
  InfoItems,
  InfoItemTitle,
  InfoItemEdit,
  PhotoEditLabel,
  PhotoEdit,
  EditInput,
} from './UserData.styled';
// временное фото для стилизации
import photo from './Ellipse 45.jpg';
import EditIcon from './icons/editValue.svg';
import EditPhotoIcon from './icons/editPhoto.svg';

export default function UserData() {
  return (
    <div>
      <Title>My information:</Title>
      <User>
        <UserPhoto>
          <Photo src={photo} alt="User" />
          <form method="post">
            <PhotoEditLabel>
              <img src={EditPhotoIcon} alt="Edit photo" />
              <PhotoEdit type="file" placeholder="asdasd" />
              Edit photo
            </PhotoEditLabel>
          </form>
        </UserPhoto>

        <div>
          <InfoItems>
            <tr>
              <InfoItemTitle>Name:</InfoItemTitle>
              <EditInput type="text" />
              <td>
                <InfoItemEdit>
                  <img src={EditIcon} alt="edit" />
                </InfoItemEdit>
              </td>
            </tr>
            <tr>
              <InfoItemTitle>Email:</InfoItemTitle>
              <td>anna00@gmail.com|</td>
              <td>
                <InfoItemEdit>
                  <img src={EditIcon} alt="edit" />
                </InfoItemEdit>
              </td>
            </tr>
            <tr>
              <InfoItemTitle>Birthday:</InfoItemTitle>
              <td>00.00.0000</td>
              <td>
                <InfoItemEdit>
                  <img src={EditIcon} alt="edit" />
                </InfoItemEdit>
              </td>
            </tr>
            <tr>
              <InfoItemTitle>Phone:</InfoItemTitle>
              <td>+38000000000</td>
              <td>
                <InfoItemEdit>
                  <img src={EditIcon} alt="edit" />
                </InfoItemEdit>
              </td>
            </tr>
            <tr>
              <td>City:</td>
              <td>Kiev</td>
              <td>
                <InfoItemEdit>
                  <img src={EditIcon} alt="edit" />
                </InfoItemEdit>
              </td>
            </tr>
          </InfoItems>
        </div>
      </User>
    </div>
  );
}
