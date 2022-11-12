import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const Container = lazy(() => import('./Container/Container'));
// const SharedLayout = lazy(() => import('./pages/SharedLayout/SharedLayout'));
// const Header = lazy(() => import('./pages/Header/Header'));
// const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const OurFriendsPage = lazy(() =>import('./pages/OurFriendsPage/OurFriendsPage'));
// const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
// const UserPage = lazy(() => import('./pages/UserPage/UserPage'));

const App = () => {
  return (
    <Container>
      {/* <SharedLayout path="/">
        <Header />
      </SharedLayout> */}
      <Routes>
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/friends" element={<OurFriendsPage />} /> */}
        {/* <Route path="/news" element={<NewsPage />} /> */}
        <Route path="/notices/:categoryName" element={<NoticesPage />} />
        {/* <Route path="/user" element={<UserPage />} /> */}
      </Routes>
    </Container>
  );
};

export default App;
