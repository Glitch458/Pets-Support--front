import styled from 'styled-components';

export const NavInnerContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  order: 2;

  @media screen and (max-width: 767px) {
    & > ul {
      display: none;
    }
  }
`;
