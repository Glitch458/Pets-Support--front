import styled from 'styled-components';

export const NoticesCategoriesContainerList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  @media screen and (min-width: 768px) {
    margin: -16px;
  }
  @media screen and (min-width: 1280px) {
    margin: -8px;
  }
`;
