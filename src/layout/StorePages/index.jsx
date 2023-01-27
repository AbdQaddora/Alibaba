import React from 'react'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'
import PcHeader from './components/PcHeader'
import PcNav from './components/PcNav'
import Container from '../../components/Container/style'
import MobileHeader from './components/MobileHeader'

const StorePages = ({ children }) => {
    return (
        <>
            <MobileHeader />
            <PcNav />
            <Container>
                {children}
            </Container>
            <Subscribe />
            <Footer />
        </>
    )
}

export default StorePages