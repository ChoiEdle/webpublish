import React, { useContext, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';

export function ProtectedPageRoute({children}) {
    const {isLogin} = useContext(AuthContext);
    const isAlert = useRef(false);

    if(!isLogin) {
        if(!isAlert.current){
            alert("로그인을 해주세요");
            isAlert.current = true;
        }
        return <Navigate to="/login" />
    } else {
        isAlert.current = true;
        return children;
    }
}

