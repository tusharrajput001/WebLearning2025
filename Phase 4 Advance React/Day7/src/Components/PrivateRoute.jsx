import { Children } from "react";
import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({Children}) => {
    const {token} = useAuth();
    return token ? Children : <Navigate to="/login"/>;
}

export default PrivateRoute;