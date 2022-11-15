import styled from 'styled-components';

export const LogoStyle = styled.span`
  display: inline-block;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  font-family: ${p => p.theme.fonts.logo};
  color: ${p => p.theme.colors.black};
  margin-top: 12px;
`;

export const LogoStyleLetter = styled(LogoStyle)`
  color: ${p => p.theme.colors.accent};
`;
