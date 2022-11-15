import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const NavInnerContainer = styled.div`
  display: flex;
  height: 48px;
`;

export const NavLinkContainer = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.1;
  color: #181c27;
  align-items: center;
  letter-spacing: 0.04em;
  text-decoration: none;
  padding: 10px;

  &:not(:first-child) {
    margin-left: 80px;
  }

  &:hover {
    color: #f59256;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkExtends = styled(Link)`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 32px;
  line-height: 1.4;
  color: #181c27;
  align-items: center;
  letter-spacing: 0.04em;
  text-decoration: none;
  padding: 10px;

  &:hover {
    color: #f59256;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
  }

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const OpenLinksButton = styled.button`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  font-size: 40px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavExtendedContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 88px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fdf7f2;

  @media (min-width: 768px) {
    display: none;
  }
`;

// 480, 768, 1280
