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
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 50%;
    right: 0;
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
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
