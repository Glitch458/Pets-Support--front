import { useState } from 'react';

import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import { NewsList } from 'components/NewsList/NewsList';
import Container from 'components/Container/Container';
import { PageWrapper } from './NewsPage.styled';
import data from '../../data/news.json'

const NewsPage = () => {
  const [news, setNews] = useState([...data]);
  const [filter, setFilter] = useState('');

  const handleSubmit = value => {
    setFilter(value.toLowerCase());  
  }

  const getVisibleNews = () => {
   const filteredNews = news.filter(item =>{
   return item.title.toLowerCase().includes(filter)});
  setNews([...filteredNews])
  };

  return (
    <PageWrapper>
      <Container>
        <NoticesSearch onSubmit={handleSubmit}>
          News
        </NoticesSearch>
        <NewsList news={news} />
      </Container>
    </PageWrapper>
  );
};

export default NewsPage;
