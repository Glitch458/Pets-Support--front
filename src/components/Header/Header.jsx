import { HeaderBox } from './Header.styled';

const Header = ({ children }) => {
  return (
    <>
      <HeaderBox>{children}</HeaderBox>
    </>
  );
};

export default Header;
