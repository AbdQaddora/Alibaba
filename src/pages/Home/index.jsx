import React from 'react'

import StorePages from '../../layout/StorePages'
import DealsAndOffers from './components/DealsAndOffers'
import Header from './components/Header'
import ItemsSection from './components/ItemsSection'
import SendQuote from './components/SendQuote'

// images
import homeAndOutdoor from '../../assets/images/home/homeAndOutdoor.png';
import consumer_electronics_and_gadgets from '../../assets/images/home/consumer_electronics_and_gadgets.png';
// mock
import { HOME_AND_OUTDOOR_SECTION } from '../../mock'
import RecommendedItems from './components/RecommendedItems'
import ExtraServices from './components/ExtraServices'
import Suppliers from './components/Suppliers'

const Home = () => {

    return (
        <StorePages>
            <Header />
            <DealsAndOffers />
            <ItemsSection
                title="Home and outdoor"
                leftBackImage={homeAndOutdoor}
                cards={HOME_AND_OUTDOOR_SECTION} />
            <ItemsSection
                title="Consumer electronics and gadgets"
                leftBackImage={consumer_electronics_and_gadgets}
                cards={HOME_AND_OUTDOOR_SECTION} />
            <SendQuote />
            <RecommendedItems />
            <ExtraServices />
            <Suppliers />
        </StorePages>
    )
}

export default Home