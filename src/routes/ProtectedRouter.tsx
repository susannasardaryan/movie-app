import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import {getUsername} from "../features/login/loginSlice.ts";
import {useSelector} from "react-redux";

type ProtectedRouteProps = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const userInfo:string = useSelector(getUsername);

    if (!userInfo) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
