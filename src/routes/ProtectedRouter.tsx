import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import {StorageService} from "../services/apiService.ts";
import type {UserInfo} from "../features/login/loginSlice.ts";

type ProtectedRouteProps = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const userInfo:UserInfo = StorageService.getItem('userInfo');
    console.log(userInfo);
    if (!userInfo) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
