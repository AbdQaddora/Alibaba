import React from 'react'

import { Routes, Route } from 'react-router-dom';
import RequiresAuth from './components/RequiresAuth';

// pages
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';

const Router = () => {
    return (
        <Routes>
            {/* public routes */}
            <Route path='/Login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            <Route path='/' element={
                <RequiresAuth>
                    <Home />
                </RequiresAuth>
            } />
        </Routes>
    )
}

export default Router