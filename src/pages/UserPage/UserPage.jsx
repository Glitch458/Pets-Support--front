import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import { UserPageContainer, UserPageMain } from './UserPage.styled';

const UserPage = () => {
  return (
    <UserPageContainer>
      <UserPageMain>
        <UserData />
        <PetsData />
      </UserPageMain>
    </UserPageContainer>
  );
};

export default UserPage;
