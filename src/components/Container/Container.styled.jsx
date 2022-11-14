import { theme } from 'constants';
import styled from 'styled-components';

export const ContainerDiv = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${p => theme.colors.background};
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
