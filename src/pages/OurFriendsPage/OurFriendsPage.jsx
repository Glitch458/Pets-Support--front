
import Container from "components/Container/Container";
import { FriendsList } from "components/FriendsList/FriendsList";
import { PageWrapper } from "pages/NewsPage/NewsPage.styled";

const OurFriendsPage = () => {
    return (
        <Container>
            <PageWrapper>
            <FriendsList/>
            </PageWrapper>
        </Container>)
};

export default OurFriendsPage;