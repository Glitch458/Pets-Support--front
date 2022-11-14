import styled from 'styled-components';

export const LogoStyle = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: 0.07em;
  font-family: ${p => p.theme.fonts.logo};
  color: ${p => p.theme.colors.black};
  margin: 16px, 0, 0, 20px;
`;

export const LogoStyleLetter = styled(LogoStyle)`
  color: ${p => p.theme.colors.accent};
`;
