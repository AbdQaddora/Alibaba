import React from 'react'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'
import PcHeader from './components/PcHeader'
import PcNav from './components/PcNav'
import Container from '../../components/Container/style'
import MobileHeader from './components/MobileHeader'
import OnlyMobile from '../../components/OnlyMobile'
import NotMobile from '../../components/NotMobile'

const StorePages = ({ children }) => {
    return (
        <>
            <OnlyMobile>
                <MobileHeader />
            </OnlyMobile>
            <NotMobile>
                <PcHeader />
                <PcNav />
            </NotMobile>
            <Container>
                {children}
            </Container>
            <Subscribe />
            <Footer />
        </>
    )
}

export default StorePages