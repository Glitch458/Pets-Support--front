import styled from 'styled-components';
import { theme } from 'constants';

export const NoticePageContainer = styled.div`
  background-color: ${p => theme.colors.background};
`;

export const NoticesPageMain = styled.main`
position: relative;
  margin-top: 30px;
  padding: 0 0 100px 0;
  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 200px;
  }
`;
