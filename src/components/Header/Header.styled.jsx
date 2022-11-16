import styled from 'styled-components';
import { theme } from 'constants';

export const HeaderBox = styled.header`
  background-color: ${p => theme.colors.background};
  padding-top: 16px;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 20px;
  }
`;
