import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const Homepage = lazy(() => import('pages/Homepage/Homepage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));

const App = () => {
  return (
    <>
      {/* <SharedLayout path="/"></SharedLayout> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/homepage" element={<Homepage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices/:categoryName" element={<NoticesPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
