import { format } from 'date-fns';
import {
  NewsTitle,
  ReadMoreLink,
  NewsText,
  Wrapper,
  NewsCard,
  OverLine,
  Time,
} from './NewsItem.styled';

export const NewsItem = ({ title, date, description, url }) => {
  return (
    <NewsCard>
      <OverLine></OverLine>
      <NewsTitle>{title}</NewsTitle>
      <NewsText>{description}</NewsText>
      <Wrapper>
        {date ? <Time>{format(new Date(date), 'MM/dd/yyyy')}</Time>:<p></p>}
        <ReadMoreLink href={url} target="_blank">
          Read more
        </ReadMoreLink>
      </Wrapper>
    </NewsCard>
  );
};
