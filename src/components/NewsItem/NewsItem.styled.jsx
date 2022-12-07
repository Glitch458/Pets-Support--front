import styled from 'styled-components';
import { theme } from 'constants';

export const NewsTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 33px;
  text-align: left;
  vertical-align: top;
  letter-spacing: -1%;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const NewsText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media screen and ${p => p.theme.media.tablet} {
    margin-bottom: 40px;
    -webkit-line-clamp: 6;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NewsCard = styled.li`
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const OverLine = styled.div`
  width: 80%;
  height: 4px;
  margin-bottom: 4px;
  border-radius: 40px;
  background: ${p => theme.colors.gradient};
  @media screen and ${p => p.theme.media.tablet} {
    width: 280px;
    height: 8px;
  }
  @media screen and ${p => p.theme.media.desktop} {
    width: 340px;
  }
`;

export const ReadMoreLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  text-decoration-line: none;
  color: ${p => theme.colors.secondaryText};
  :hover,
  :focus {
    color: ${p => theme.colors.buttonAccent};
    text-decoration: underline;
  }
`;

export const Time = styled.p`
  color: ${p => theme.colors.gray};
`;
