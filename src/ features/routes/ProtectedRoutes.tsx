import {ReactNode} from "react";
import {Navigate} from "react-router-dom";
import React from 'react';

type Props = {
    isAuth?: boolean,
    children?: ReactNode
}
//TODO не выкупаю как
const ProtectedRoutes = ( {isAuth, children } : Props) => {
    if (!isAuth) {
        return <Navigate to="/cat" replace />;
    }
    
};

export default ProtectedRoutes;