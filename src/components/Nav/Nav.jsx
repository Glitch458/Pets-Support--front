import React, { useState } from 'react';
import {
  NavContainer,
  NavLinkKontainer,
  NavLink,
  OpenLinksButton,
  NavInnerContainer,
  NavExtendedContainer,
  NavLinkExtends,
} from './Nav.styled';

export const Nav = () => {
  const [extendNav, setExtendNav] = useState(false);

  return (
    <NavContainer>
      <NavInnerContainer>
        <NavLinkKontainer>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/notices">Find pet</NavLink>
          <NavLink to="/friends">Our friends</NavLink>
          <OpenLinksButton
            onClick={() => {
              setExtendNav(curr => !curr);
            }}
          >
            {extendNav ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
        </NavLinkKontainer>
      </NavInnerContainer>
      {extendNav && (
        <NavExtendedContainer>
          <NavLinkExtends to="/news">News</NavLinkExtends>
          <NavLinkExtends to="/notices">Find pet</NavLinkExtends>
          <NavLinkExtends to="/friends">Our friends</NavLinkExtends>
        </NavExtendedContainer>
      )}
    </NavContainer>
  );
};
