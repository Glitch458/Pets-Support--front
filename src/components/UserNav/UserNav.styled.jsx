import { LinkBasic } from 'components/Button/Button.styled';
import styled from 'styled-components';

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

export const ButtonUserLink = styled(LinkBasic)`
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
