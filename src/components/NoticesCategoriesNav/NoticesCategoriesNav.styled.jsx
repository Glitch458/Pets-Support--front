import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ButtonStyles } from '../Button/Button.styled';

export const NoticesCategoriesNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;
export const CategoriesButonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

export const AddButton = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 50%;
    right: 20px;
    z-index: 999;
  }
  @media screen and (min-width: 768px) {
    display: flex;

    flex-shrink: 0;
    align-self: flex-start;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  margin-right: 15px;
  margin-bottom: 15px;

  ${ButtonStyles};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-family: ${p => p.theme.fonts.body};
  background-color: ${p => p.theme.colors.white};

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
