import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: inline-flex;
  position: absolute;
  top: 25px;
  right: 25px;

  @media screen and (min-width: 768px) {
    top: 32px;
    right: 37px;
  }
  @media screen and (min-width: 1280px) {
    position: static;
  }
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

  &:hover,
  &:focus {
    color: #f59256;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
  }

  @media screen and (max-width: 1279px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 80px;
    padding: 0px;
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
  margin-top: 40px;
  padding: 10px;

  @media screen and (min-width: 1280px) {
    display: none;
  }

  &:hover,
  &:focus {
    color: #f59256;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 48px;
  }
`;

export const OpenLinksButton = styled.button`
  background: none;
  border: none;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const NavExtendedContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 54px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fdf7f2;

  @media screen and (min-width: 768px) {
    top: 62px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

// 480, 768, 1280
