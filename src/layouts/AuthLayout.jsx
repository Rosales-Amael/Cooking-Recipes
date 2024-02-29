import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  const user = localStorage.getItem('USER_DATA');
  return user ? <Outlet /> : <Navigate to="/connexion" />;
};

export default AuthLayout;
