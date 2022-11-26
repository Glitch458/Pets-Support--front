import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import burger from 'images/icons/burger.svg';
import {
  NavContainer,
  NavList,
  NavLink,
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
        <NavLink to="/news">News</NavLink>
        <NavLink to="/notices/sell">Find pet</NavLink>
        <NavLink to="/friends">Our friend</NavLink>
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
            {NavLinkExtendedArray.map(({ href, title, isActive }) => {
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
