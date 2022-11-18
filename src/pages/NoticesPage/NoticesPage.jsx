import { useEffect /*, useState*/ } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

import Container from 'components/Container/Container';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';

import { NoticesPageMain, NoticePageContainer } from './NoticesPage.styled';

import { useGetNoticesByCategoryQuery } from 'redux/Notices/noticesApi';

const NoticesPage = () => {
  const { categoryName } = useParams();
  //const [category, setCategory] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const paramFilter = searchParams.get('filter');
  const location = useLocation();
  const {
    data = [],
    isFetching,
    isError,
  } = useGetNoticesByCategoryQuery(categoryName, {
    skip: categoryName === '',
  });

  useEffect(() => {
    //setCategory(categoryName);
    //console.log(data);
  }, [data]);

  const handleSearch = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  return (
    <NoticePageContainer>
      <Container>
        <NoticesSearch onSubmit={handleSearch} filter={paramFilter}>
          Find your favorite pet
        </NoticesSearch>
        <NoticesCategoriesNav location={location} />
        <NoticesPageMain>
          {isFetching && <h2>Loading ....</h2>}

          {!isFetching && data.length === 0 && (
            <h2>Category {categoryName} is empty </h2>
          )}

          {!isFetching && isError && (
            <h2>Sorry, an error occurred. Please try again later</h2>
          )}

          {data && !isFetching && !isError && (
            <NoticesCategoriesList data={data} />
          )}
        </NoticesPageMain>
      </Container>
    </NoticePageContainer>
  );
};
export default NoticesPage;
