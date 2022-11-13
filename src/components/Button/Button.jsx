import { Btn } from './Button.styled';

export const Button = ({ icon = null, type = 'button', children }) => {
  return <Btn type={type}>{children}</Btn>;
};
