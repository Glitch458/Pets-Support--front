// import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
// import SharedLayout from './pages/SharedLayout/SharedLayout';
// import Header from './pages/Header/Header';
// import RegisterPage from './pages/RegisterPage/RegisterPage';
// import LoginPage from './pages/LoginPage/LoginPage';
// import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage';
// import NewsPage from './pages/NewsPage/NewsPage';
// import NoticesPage from './pages/NoticesPage/NoticesPage';
// import UserPage from './pages/UserPage/UserPage';

const App = () => {
  return (
    <Container>
      {/* <SharedLayout path="/">
        <Header />
      </SharedLayout> */}
      {/* <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes> */}
    </Container>
  );
};

export default App;
