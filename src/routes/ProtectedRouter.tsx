import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import {getUsername} from "../features/login/loginSlice.ts";
import { useAppSelector } from "../app/hooks.ts";

type ProtectedRouteProps = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const userInfo:string = useAppSelector(getUsername);

    if (!userInfo) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
