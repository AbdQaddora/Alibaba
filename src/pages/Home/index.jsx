import React from 'react'
import StorePages from '../../layout/StorePages'
import DealsAndOffers from './components/DealsAndOffers'
import Header from './components/Header'

const Home = () => {

    return (
        <StorePages>
            <Header />
            <DealsAndOffers />
        </StorePages>
    )
}

export default Home