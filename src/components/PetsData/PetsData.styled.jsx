import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  margin: 40px 0 26px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.h4`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes[6]}px;
  }
`;

export const Text = styled.div`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
`;
