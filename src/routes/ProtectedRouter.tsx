import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type ProtectedRouteProps = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const isLoggedInStr = localStorage.getItem("isLoggedIn");
    const isLogged: boolean = isLoggedInStr === "true";

    if (!isLogged) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
