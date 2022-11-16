import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  margin: 47px 40px 0 26px;
  @media ${p => p.theme.media.tablet} {
    margin: 20px 32px 0 32px;
  }
  @media ${p => p.theme.media.desktop} {
    margin: 0 16px 0 32px;
  }
`;

export const HeadPetsData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media ${p => p.theme.media.tablet} {
    position: absolute;
    top: 155px;
    right: 0;
    margin-right: 32px;
  }
  @media ${p => p.theme.media.desktop} {
    position: static;
  }
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
