import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* margin: 0 auto; */

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

export const PetsInfo = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: 22px;
  display: flex;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};
  margin-top: 12px;
`;
