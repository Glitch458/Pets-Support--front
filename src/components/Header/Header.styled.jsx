import styled from 'styled-components';
import { theme } from 'constants';

export const HeaderBox = styled.header`
  position: fixed;
  width 100vw;
  top: 0;
  z-index: 5;
  background-color: ${p => theme.colors.background};
  padding-top: 16px;
  padding-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 20px;
  }
`;
