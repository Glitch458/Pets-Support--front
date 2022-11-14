import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';

const NoticesPage = () => {
  return (
    <>
      <NoticesSearch>Find your favorite pet</NoticesSearch>
      <NoticesCategoriesNav />
      <main>
        <NoticesCategoriesList />
      </main>
    </>
  );
};
export default NoticesPage;
