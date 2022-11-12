import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import SharedLayout from './SharedLayout/SharedLayout';
import Header from './Header/Header';
import RegisterPage from './RegisterPage/RegisterPage';
import LoginPage from './LoginPage/LoginPage';
import OurFriendsPage from './OurFriendsPage/OurFriendsPage';
import NewsPage from './NewsPage/NewsPage';
import NoticesPage from './NoticesPage/NoticesPage';
import UserPage from './UserPage/UserPage';

const App = () => {
  return (
    <Container>
      <SharedLayout path="/">
        <Header />
      </SharedLayout>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Container>
  );
};

export default App;
