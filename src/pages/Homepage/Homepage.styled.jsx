import styled from 'styled-components';
import { theme } from 'constants';
import bgImgGrlS from 'images/Homepage/girl-with-dog-mobile.png';
import bgImgGrlL from 'images/Homepage/girl-with-dog-desktop.png';
import bgImgAbs from 'images/Homepage/homepage-abstract-mobile.png';
import bgImgAbsBig from 'images/Homepage/homepage-abstract-large-desktop.png';
import bgImgAbsSmall from 'images/Homepage/homepage-abstract-small-desktop.png';

export const WelcomeSection = styled.div`
  width: 100%;
  height: calc(100vh - 62px);
  background-color: ${p => theme.colors.background};
  background-image: url(${bgImgGrlS}), url(${bgImgAbs});
  background-repeat: no-repeat;
  background-size: contain, cover;
  background-position: bottom, center;

  @media screen and (min-width: 768px) {
    background-size: auto 80%, cover;
    background-position: right bottom, center;
  }

  @media screen and (min-width: 1280px) {
    background-size: initial;
    background-position: bottom right;
    background-image: url(${bgImgGrlL}), url(${bgImgAbsSmall}),
      url(${bgImgAbsBig});
  }
`;
export const WelcomeText = styled.p`
  padding-top: 60px;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;

  @media screen and (min-width: 768px) and (min-height: 480px) {
    padding-top: 92px;
    font-size: 68px;
    line-height: 100px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 588px;
  }
`;
