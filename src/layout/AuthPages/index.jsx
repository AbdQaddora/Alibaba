import React from 'react'
import Paper from '../../components/Paper'
import { AuthPagesCountiner } from './components/AuthPagesCountiner'
import Footer from './components/Footer'

const AuthPages = ({ children }) => {
    return (
        <>
            <AuthPagesCountiner>
                <Paper>
                    {children}
                </Paper>
            </AuthPagesCountiner>
            <Footer />
        </>
    )
}

export default AuthPages