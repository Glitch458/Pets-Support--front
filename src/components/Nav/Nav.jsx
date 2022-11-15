import React, { useState } from 'react';
import burger from 'images/icons/burgerIcon.png';
import {
  NavContainer,
  NavLink,
  OpenLinksButton,
  NavExtendedContainer,
  NavLinkExtends,
} from './Nav.styled';

export const Nav = () => {
  const [extendNav, setExtendNav] = useState(false);

  return (
    <NavContainer extendNav={extendNav}>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/notices/sell">Find pet</NavLink>
      <NavLink to="/friends">Our friend</NavLink>

      <OpenLinksButton
        onClick={() => {
          setExtendNav(curr => !curr);
        }}
      >
        {extendNav ? <img src={burger} alt="" /> : <img src={burger} alt="" />}
      </OpenLinksButton>
      {extendNav && (
        <NavExtendedContainer>
          <NavLinkExtends to="/news">News</NavLinkExtends>
          <NavLinkExtends to="/notices/sell">Find pet</NavLinkExtends>
          <NavLinkExtends to="/friends">Our friends</NavLinkExtends>
        </NavExtendedContainer>
      )}
    </NavContainer>
  );
};
