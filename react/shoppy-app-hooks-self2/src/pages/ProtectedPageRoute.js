import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext.js';
import { Navigate } from 'react-router-dom';

export function ProtectedPageRoute({children}) {
    const {isLogin} = useContext(AuthContext);
    if(!isLogin) {
        return <Navigate to="/login" />
    } else {
        return children;
    }

}

