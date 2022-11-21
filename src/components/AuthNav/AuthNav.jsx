import { List, ListItem } from './AuthNav.styled';
import { ButtonLink } from '../Button/Button';

export const AuthNav = () => {
  return (
    <List>
      <ListItem>
        <ButtonLink type="button" href="/login">
          Login
        </ButtonLink>
      </ListItem>
      <ListItem>
        <ButtonLink type="button" href="/register">
          Registration
        </ButtonLink>
      </ListItem>
    </List>
  );
};
