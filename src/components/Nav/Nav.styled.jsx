import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  height: 48px;
  margin-left: 80px;
  flex-direction: column;
`;

export const NavInnerContainer = styled.div`
  display: flex;
  height: 48px;
`;

export const NavLinkKontainer = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.14;
  color: #181c27;
  align-items: center;
  letter-spacing: 0.04em;
  text-decoration: none;

  &:not(:first-child) {
    margin-left: 80px;
  }
`;

export const NavLinkExtends = styled.button(Link)`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 32px;
  line-height: 1.26px;
  color: #181c27;
  align-items: center;
  letter-spacing: 0.04em;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const OpenLinksButton = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

// 480, 768, 1280
