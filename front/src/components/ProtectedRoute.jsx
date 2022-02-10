import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.js';
import { UserContext } from '../contexts/UserContext.js';

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  return isAuthenticated && user.role === 1 && <Outlet />;
};
export default ProtectedRoute;
