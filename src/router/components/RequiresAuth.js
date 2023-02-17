import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import Auth from '../../services/auth.service'

const RequiresAuth = ({ children }) => {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to="/login" />
    }

    return (
        <>{children}</>
    )
}

export default RequiresAuth