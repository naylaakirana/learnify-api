import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // cek token valid (basic)
  if (!token || token === "undefined" || token === "null") {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }} // simpan halaman asal
      />
    );
  }

  return children;
};

export default ProtectedRoute;