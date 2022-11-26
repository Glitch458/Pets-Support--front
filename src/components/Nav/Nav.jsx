import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import burger from 'images/icons/burger.svg';
import {
  NavContainer,
  NavList,
  NavItemLink,
  OpenLinksButton,
  NavExtendedContainer,
  NavLinkExtends,
  AuthNavExtendedContainer,
} from './Nav.styled';
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';

export const Nav = () => {
  const [extendNav, setExtendNav] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const { token } = useSelector(state => state.auth);

  const NavLinkExtendedArray = [
    { href: '/news', title: 'News' },
    { href: '/notices/sell', title: 'Find pet' },
    { href: '/friends', title: 'Our friend' },
  ];

  return (
    <>
      <NavContainer extendNav={extendNav}>
        <NavItemLink to="/news">News</NavItemLink>
        <NavItemLink to="/notices/sell">Find pet</NavItemLink>
        <NavItemLink to="/friends">Our friend</NavItemLink>
        <OpenLinksButton
          onClick={() => {
            setExtendNav(curr => !curr);
          }}
        >
          {extendNav ? (
            <img src={burger} alt="burger" />
          ) : (
            <img src={burger} alt="burger" />
          )}
        </OpenLinksButton>
        {extendNav && (
          <NavExtendedContainer>
            <AuthNavExtendedContainer>
              {isMobile && (
                <NavList>{token ? <UserNav /> : <AuthNav />}</NavList>
              )}
            </AuthNavExtendedContainer>
            {NavLinkExtendedArray.map(({ href, title }) => {
              return (
                <NavLinkExtends
                  onClick={() => setExtendNav(false)}
                  to={href}
                  key={href}
                >
                  {title}
                </NavLinkExtends>
              );
            })}
          </NavExtendedContainer>
        )}
      </NavContainer>
      {!extendNav && <NavList>{token ? <UserNav /> : <AuthNav />}</NavList>}
    </>
  );
};
