import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { token } = useSelector(state => state.auth);

  return token ? <Outlet /> : <Navigate to="/register" />;
};

export default PrivateRoute;
