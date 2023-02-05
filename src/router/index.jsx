import React from 'react'

import { Routes, Route } from 'react-router-dom';
import RequiresAuth from './components/RequiresAuth';

// pages
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import StoreList from '../pages/StoreList';
import Product from '../pages/Product';
import Cart from '../pages/Cart';

export const PATHS = {
    HOME: "/",
    LOGIN: "/Login",
    SIGNUP: "/signup",
    STORE_LIST: "/store-list",
    PRODUCT: "/product/",
    CART: "/cart",
}

const Router = () => {
    return (
        <Routes>
            {/* public routes */}
            <Route path={PATHS.LOGIN} element={<Login />} />
            <Route path={PATHS.SIGNUP} element={<Signup />} />

            <Route path={PATHS.HOME} element={
                <RequiresAuth>
                    <Home />
                </RequiresAuth>
            } />

            <Route path={PATHS.STORE_LIST} element={
                <RequiresAuth>
                    <StoreList />
                </RequiresAuth>
            } />

            <Route path={`${PATHS.PRODUCT}:id`} element={
                <RequiresAuth>
                    <Product />
                </RequiresAuth>
            } />

            <Route path={`${PATHS.CART}`} element={
                <RequiresAuth>
                    <Cart />
                </RequiresAuth>
            } />
        </Routes>
    )
}

export default Router