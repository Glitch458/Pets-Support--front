import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    display: flex;
    order: 2;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    margin-left: 25%;
    order: 3;
  }
`;

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-left: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    height: 44px;
    width: 180px;
  }
`;
