import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
	const { token } = useSelector(state => state.auth);

	return !token ? <Outlet /> : <Navigate to="/user" />;
};

export default PublicRoute;
