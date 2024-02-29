import { Navigate, Outlet } from 'react-router-dom';

const GuestLayout = () => {
  const user = localStorage.getItem('USER_DATA');
  return !user ? <Outlet /> : <Navigate to="/" />;
};

export default GuestLayout;
