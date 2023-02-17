import React, { useState } from 'react'
import { useContext } from 'react';
import { createContext } from 'react'

import { LOCAL_STORAGE_KEY, loginService, logoutService, signupService } from '../services/auth.service';

const AuthContext = createContext({});

export const useAuth = () => { return useContext(AuthContext) };

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem(LOCAL_STORAGE_KEY) || null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const login = async (email, password, rememberMe = false) => {
        setIsLoading(true);
        const data = await loginService(email, password, rememberMe);
        if (data.error) {
            setError(data.error);
        } else {
            setUser(data)
        }
        setIsLoading(false);
    }

    const signup = async (name, email, password, rememberMe = false) => {
        setIsLoading(true);
        const data = await signupService(name, email, password, rememberMe);
        if (data.error) {
            setError(data.error);
        } else {
            setUser(data)
        }
        setIsLoading(false);
    }

    const logout = () => {
        setUser(null);
        logoutService();
    }

    return (
        <AuthContext.Provider value={{
            user,
            isLoading,
            error,
            login,
            signup,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider