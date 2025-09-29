import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext.js';

export function useAuth() {
    const {isLogin, setIsLogin} = useContext(AuthContext);

    const handleLogin = (id) => {
        setIsLogin(true);
        const loginInfo = {
            "userId": id,
            "token": "woenel1231214dl"
        }
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo));   //객체를 문자열로 저장
    }

    const handleLogout = () => {
        setIsLogin(false);
        alert("로그아웃 되었습니다.");
        localStorage.removeItem("loginInfo");
    }

    return {handleLogin, handleLogout};
}

