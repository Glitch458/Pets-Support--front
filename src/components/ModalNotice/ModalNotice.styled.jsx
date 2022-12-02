import styled from 'styled-components';
//import { HeartBtn } from 'components/Button/Button.styled';
import { ReactComponent as IconHeart } from '../../../src/images/icons/smallHeart.svg';

import { TrashButton } from 'components/Button/TrashButton/TrashButton';
import { CloseBtnn } from 'components/Button/CloseButton/CloseButton';
import { ModalBtn } from 'components/Button/ModalBtn/ModalBtn.styled';

export const Container = styled.div`
  position: relative;
  margin-top: 161px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 40px;
  padding: 60px 20px 40px 20px;
  margin-bottom: 50px;
  background-color: ${p => p.theme.colors.white};
  @media (max-width: 767px) {
    max-width: 500px;
  }
  @media ${p => p.theme.media.tablet} {
    // margin-top: 262px;
    padding: 32px 20px;
    width: 704px;
  }
  @media ${p => p.theme.media.desktop} {
    // margin-top: 400px;
    padding: 32px 20px;
    width: 704px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
  margin: 0 auto 16px auto;
  @media ${p => p.theme.media.tablet} {
    width: 288px;
    height: 328px;
    margin: 0 20px 0 0;
  }
  @media ${p => p.theme.media.desktop} {
    width: 288px;
    height: 328px;
    margin: 0 20px 0 0;
  }
`;

const CategoryLabel = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 158px;
  padding: 6px 20px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  border-radius: 0 20px 20px 0;
`;

export const ImageThumb = ({ src, alt = '', category }) => (
  <ImageWrapper>
    <img src={src} alt={alt} />
    {category && <CategoryLabel>{category}</CategoryLabel>}
  </ImageWrapper>
);

export const Title = styled.h3`
  width: 190px;
  font-size: 24px;
  line-height: 1.4;
  margin-bottom: 16px;
  @media ${p => p.theme.media.tablet} {
    width: 228px;
    font-size: 28px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 228px;
    font-size: 28px;
  }
`;

export const InfoWrapper = styled.div`
  @media ${p => p.theme.media.tablet} {
    display: flex;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
  }
`;

const Info = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Label = styled.span`
  font-size: 14px;
  line-height: 1.4;
  font-weight: 600;
  @media ${p => p.theme.media.tablet} {
    font-size: 16px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 16px;
  }
`;

const Data = styled.span`
  width: 50%;
  font-size: 14px;
  @media ${p => p.theme.media.tablet} {
    font-size: 16px;
    font-weight: 1.4;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 16px;
    font-weight: 1.4;
  }
`;

export const InfoItem = ({ label, data }) => (
  <Info>
    <Label>{label}</Label>
    <Data>{data}</Data>
  </Info>
);

const DescriptionText = styled.p`
  margin: 28px 0 40px 0;
  text-align: left;
  font-size: 14px;
  line-height: 1.4;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 32px;
    font-size: 16px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-bottom: 32px;
    font-size: 16px;
  }
`;

const DescriptionLabel = styled.span`
  font-weight: 600;
`;

export const Description = ({ text }) => (
  <DescriptionText>
    <DescriptionLabel>Comments: </DescriptionLabel>
    {text}
  </DescriptionText>
);

export const ModalButton = styled(ModalBtn)`
  color: ${({ authorized, primary }) => {
    if (!authorized && !primary) return 'rgba(17, 17, 17, 0.1)';
    if (primary) return 'white';
    return '#f59256';
  }};
  @media ${props => props.theme.media.tabletDesktop} {
    width: 160px;
  }
`;

export const AddToFavorites = ({ authorized, onClick, favoriteId }) => (
  <ModalButton authorized={authorized} onClick={onClick} type={'button'}>
    {!favoriteId ? 'Add to' : 'Delete'}
    <IconHeart />
  </ModalButton>
);

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  @media ${props => props.theme.media.tabletDesktop} {
    width: 332px;
    flex-direction: row;
    gap: 8px;
    margin-left: auto;
  }
`;

export const DeleteButton = styled(TrashButton)`
  position: absolute;
  top: 68px;
  right: 20px;
`;

export const Close = styled(CloseBtnn)`
  position: absolute;
  top: 12px;
  right: 20px;
`;
