import React from 'react'
import { Navigate } from 'react-router-dom'
import Auth from '../../services/auth.service'

const RequiresAuth = ({ children }) => {
    if (!Auth.isAuth()) {
        return <Navigate to="/login" />
    }

    return (
        <>{children}</>
    )
}

export default RequiresAuth