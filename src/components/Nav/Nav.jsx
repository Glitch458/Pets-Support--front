import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import burger from 'images/icons/burger.svg';
import {
  NavContainer,
  NavLink,
  OpenLinksButton,
  NavExtendedContainer,
  NavLinkExtends,
  AuthNavExtendedContainer,
} from './Nav.styled';
import { AuthNav } from '../AuthNav/AuthNav';

export const Nav = () => {
  const [extendNav, setExtendNav] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
              {isMobile && <AuthNav />}
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
      {!extendNav && <AuthNav />}
    </>
  );
};
