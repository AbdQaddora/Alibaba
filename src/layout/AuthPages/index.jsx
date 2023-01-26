import React from 'react'
import Paper from '../../components/Paper'
import { AuthPagesCountiner } from './components/AuthPagesCountiner'

const AuthPages = ({ children }) => {
    return (
        <AuthPagesCountiner>
            <Paper>
                {children}
            </Paper>
        </AuthPagesCountiner>
    )
}

export default AuthPages