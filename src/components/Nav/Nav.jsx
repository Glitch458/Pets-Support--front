import React, { useState } from 'react';
import {
  NavContainer,
  NavLinkContainer,
  NavLink,
  OpenLinksButton,
  NavInnerContainer,
  NavExtendedContainer,
  NavLinkExtends,
} from './Nav.styled';
import Logo from '../Logo/Logo';

export const Nav = () => {
  const [extendNav, setExtendNav] = useState(false);

  return (
    <NavContainer extendNav={extendNav}>
      <Logo></Logo>
      <NavInnerContainer>
        <NavLinkContainer>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/notices/sell">Find pet</NavLink>
          <NavLink to="/friends">Our friend</NavLink>

          <OpenLinksButton
            onClick={() => {
              setExtendNav(curr => !curr);
            }}
          >
            {extendNav ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
        </NavLinkContainer>
        {extendNav && (
          <NavExtendedContainer>
            <NavLinkExtends to="/news">News</NavLinkExtends>
            <NavLinkExtends to="/notices/sell">Find pet</NavLinkExtends>
            <NavLinkExtends to="/friends">Our friends</NavLinkExtends>
          </NavExtendedContainer>
        )}
      </NavInnerContainer>
    </NavContainer>
  );
};
