import { List } from './AuthNav.styled';
import { ButtonLink } from '../Button/Button';

export const AuthNav = () => {
  return (
    <List>
      <ButtonLink to="/login">Login</ButtonLink>
      <ButtonLink to="/register">Registration</ButtonLink>
    </List>
  );
};
