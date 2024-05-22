import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { UserLogin } from "../User/UserLogin";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <UserLogin />;
};

export default ProtectedRoutes;
