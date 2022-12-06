import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authOperations from 'redux/Auth/auth-operations';
import PublicRoute from 'components/PublicRoute';
import PrivateRoutes from 'components/PrivateRoute';
import toastOptions from './helpers/toastOptions';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const Homepage = lazy(() => import('pages/Homepage/Homepage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" exact element={<Homepage />} />

          <Route path="/register" element={<PublicRoute />}>
            <Route index element={<RegisterPage />} />
          </Route>
          <Route path="/login" element={<PublicRoute />}>
            <Route index element={<LoginPage />} />
          </Route>
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices/:categoryName" element={<NoticesPage />} />

          <Route path="/user" element={<PrivateRoutes />}>
            <Route index element={<UserPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer {...toastOptions} />
    </>
  );
};

export default App;
