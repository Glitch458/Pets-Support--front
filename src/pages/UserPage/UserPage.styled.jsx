import styled from 'styled-components';
import { theme } from 'constants';

export const UserPageContainer = styled.div`
  background-color: ${p => theme.colors.background};
`;

export const UserPageMain = styled.main`
  /* margin-top: 30px; */
  padding: 61 0 100px 0;
  @media ${p => p.theme.media.tablet} {
    padding-top: 86px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
    padding-top: 60px;
    padding-bottom: 200px;
  }
`;
