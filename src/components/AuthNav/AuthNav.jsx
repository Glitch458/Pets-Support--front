import { List, ListItem, ButtonAuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <List>
      <ListItem>
        <ButtonAuthLink type="button" href="/login" primary>
          Login
        </ButtonAuthLink>
      </ListItem>
      <ListItem>
        <ButtonAuthLink type="button" href="/register">
          Registration
        </ButtonAuthLink>
      </ListItem>
    </List>
  );
};
