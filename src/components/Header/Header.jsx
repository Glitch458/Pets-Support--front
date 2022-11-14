import { HeaderBox } from './Header.styled';
import Logo from '../Logo/Logo';
import { Nav } from '../Nav/Nav';

const Header = ({ children }) => {
  return (
    <>
      <HeaderBox>
        {children}
        <Logo></Logo>
        <Nav></Nav>
      </HeaderBox>
    </>
  );
};

export default Header;
