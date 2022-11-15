import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import { NewsList } from "components/NewsList/NewsList";
import { NewsListWrapper } from "./NewsPage.styled";

const NewsPage = () => {
    return (
        <NewsListWrapper>
            <NoticesSearch>News</NoticesSearch> 
            <NewsList></NewsList>  
        </NewsListWrapper>
    )
};

export default NewsPage;