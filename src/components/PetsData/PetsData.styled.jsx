import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  padding: 0 20px 80px 20px;
  @media ${p => p.theme.media.tablet} {
    padding: 0 32px 32px 32px;
  }
  @media ${p => p.theme.media.desktop} {
  }
`;

export const HeadPetsData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px 25px 20px;
  @media ${p => p.theme.media.tablet} {
    padding: 20px 0 24px 0;
  }
  @media ${p => p.theme.media.desktop} {
    padding: 0 0 28px 0;
  }
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  & a {
    width: 40px;
    height: 40px;
    & svg {
      width: 30px;
      height: 30px;
    }
  }
  @media ${p => p.theme.media.tablet} {
    position: absolute;
    top: 175px;
    right: 0;
    margin-right: 32px;
  }
  @media ${p => p.theme.media.desktop} {
    position: absolute;
    top: 115px;
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
