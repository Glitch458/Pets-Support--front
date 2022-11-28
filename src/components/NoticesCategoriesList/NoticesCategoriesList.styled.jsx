import styled from 'styled-components';
import { HeartButton } from 'components/Button/HeartButton/HeartButton';

export const NoticesCategoriesContainerList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  @media screen and (min-width: 768px) {
    margin: -16px;
  }
  @media screen and (min-width: 1280px) {
    margin: -8px;
  }
`;
export const NoticesCategoriesItem = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 30px 0;
  padding: 0;
  list-style-type: none;
  border-radius: 0 0 20px 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  background-color: #ffffff;
  @media screen and (max-width: 767px) {
    :last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 32px) / 2);
    margin: 16px;
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 4 * 16px) / 4);
    margin: 8px;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
`;
export const Title = styled.p`
  width: 100%;
  margin: 0 20px 20px 20px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 28px;
  line-height: 1.35;
  letter-spacing: -1%;
`;
export const DetailsList = styled.ul`
  margin: 0 0 20px 0;
  padding: 0 20px;
`;
export const DetailsItem = styled.li`
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-family: ${p => p.theme.fonts.body};
  font-size: 16px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.38;
  span {
    display: inline-block;
    min-width: 90px;
  }
`;
export const ButtonContainer = styled.div`
  flex-grow: 1;
  align-self: flex-end;
  padding: 0 15px 30px 15px;
  color: ${p => p.theme.colors.accent};
  @media screen and (min-width: 768px) {
    padding: 0 45px 30px 45px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 20px 30px 20px;
  }
`;
export const CategoryName = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  min-width: 155px;
  padding: 5px 20px;
  border-radius: 0 40px 40px 0;
  background-color: rgba(255, 255, 255, 0.6);
  color: ${p => p.theme.colors.primaryText};
  backdrop-filter: blur(2px);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.04em;
`;
export const AddToFavorites = styled(HeartButton)`
  position: absolute;
  top: 12px;
  right: 12px;
`;
