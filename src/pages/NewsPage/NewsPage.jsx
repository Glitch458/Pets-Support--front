import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import { NewsList } from "components/NewsList/NewsList";
import { PageWrapper } from "./NewsPage.styled";

const NewsPage = () => {   
    return (
        <PageWrapper>
            <NoticesSearch>News</NoticesSearch> 
            <NewsList></NewsList>  
        </PageWrapper>
    )
};

export default NewsPage;
