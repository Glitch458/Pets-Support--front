import styled from 'styled-components';

export const List = styled.ul`
  width: auto;
  height: 100%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* margin: 0 auto; */

  width: auto;
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

  @media ${p => p.theme.media.tablet} {
    flex-direction: row;
    padding: 20px 28px 20px 20px;
    /* justify-content: center; */
  }
`;

export const InfoContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  align-self: center;
  width: 240px;
  margin-bottom: 20px;
  border-radius: ${p => p.theme.radii.small};
  @media ${p => p.theme.media.tablet} {
    width: 161px;
    margin-right: 32px;
  }
`;

export const PetsInfo = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: 22px;
  display: flex;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};
  margin-top: 12px;
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
`;

export const TitlePetsInfo = styled.span`
  /* font-family: ${p => p.theme.fonts.body};
  font-style: normal; */
  font-weight: ${p => p.theme.fontWeights.medium};
  display: contents;
  /* line-height: 22px; */
`;

export const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
