import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react'

const AuthContext = createContext({});
export const useAuth = () => { return useContext(AuthContext) };

const AuthContextProvider = ({ children }) => {
    
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider