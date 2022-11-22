import styled from 'styled-components';
import { theme } from 'constants';

export const List = styled.ul`
  display: grid;
  list-style: none;
  margin-top: 40px;

  @media screen and ${p => theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
    margin-top: 60px;
  }
  @media screen and ${p => theme.media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
