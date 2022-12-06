import { ListItem, ButtonAuthLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <ListItem>
        <ButtonAuthLink type="button" href="/login">
          Login
        </ButtonAuthLink>
      </ListItem>
      <ListItem>
        <ButtonAuthLink type="button" href="/register">
          Registration
        </ButtonAuthLink>
      </ListItem>
    </>
  );
};

export default AuthNav;
