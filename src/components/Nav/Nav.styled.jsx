import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  order: 3;

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const NavLink = styled(Link)`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: 20px;
    line-height: 1.1;
    color: #181c27;
    align-items: center;
    letter-spacing: 0.04em;
    text-decoration: none;

    &:not(:first-child) {
      margin-left: 80px;
    }

    &:hover,
    &:focus {
      color: #f59256;
      text-decoration-line: underline;
      text-decoration-thickness: 1px;
    }
  }
`;

export const AuthNavExtendedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fdf7f2;
  margin-bottom: 60px;
  padding-top: 18px;
`;

export const NavExtendedContainer = styled.div`
  position: fixed;
  height: 100%;
  left: 0;
  top: 58px;
  width: 100%;
  z-index: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #fdf7f2;

  @media screen and (min-width: 768px) {
    top: 67px;
  }

  @media screen and (min-width: 1280px) {
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
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  &:hover,
  &:focus {
    color: #f59256;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-family: ${p => p.theme.fonts.body};
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0.04em;
    line-height: 44px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const OpenLinksButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 20px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
