import { ListItem, ButtonUserLink } from './UserNav.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserNav = () => {
  return (
    <ListItem>
      <ButtonUserLink type="button" href="/user">
        <AccountCircleIcon /> Account
      </ButtonUserLink>
    </ListItem>
  );
};

export default UserNav;
