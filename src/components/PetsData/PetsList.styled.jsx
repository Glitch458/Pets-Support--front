import styled from 'styled-components';

export const List = styled.li`
  margin: 0 auto;

  width: 280px;
  height: 100%;
  padding: 16px 20px;
  margin-top: 26px;
  margin-bottom: 20px;
  background: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[1]}px;
  border-radius: ${p => p.theme.radii.small};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
`;

export const Image = styled.img`
  margin-bottom: 20px;
  border-radius: ${p => p.theme.radii.small};
`;
