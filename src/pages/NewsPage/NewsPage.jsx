import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import { NewsList } from "components/NewsList/NewsList";
import Container from "components/Container/Container";

const NewsPage = () => {   
    return (
        <Container>
                <NoticesSearch>News</NoticesSearch> 
                <NewsList/> 
        </Container>
    )
};

export default NewsPage;
