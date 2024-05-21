import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useCurrentUser();

  if (!user && !isLoading) return <Navigate to="/login" />;

  return children;
};
