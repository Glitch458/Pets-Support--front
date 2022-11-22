import { NewsItem } from 'components/NewsItem/NewsItem';
import { List } from 'components/NewsList/NewsList.styled';

const NewsList = ({ news }) => {
  return (
    <List>
      {news.map(({ title, url, description, date }) => (
        <NewsItem
          key={title}
          title={title}
          url={url}
          description={description}
          date={date}
        />
      ))}
    </List>
  );
};

export default NewsList;
