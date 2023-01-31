import React from 'react'
import { Body1, H4, H5 } from '../../../../components/Typography'
import { useIsMobile } from '../../../../context/IsMobile'
import OfferCard from './components/OfferCard'
import TimerSection from './components/TimerSection'
import Style from './style'

// images
import watches from '../../../../assets/images/tech/9.png';
import laptops from '../../../../assets/images/tech/8.png';
import GoPro from '../../../../assets/images/tech/5.png';
import Headphones from '../../../../assets/images/tech/4.png';
import Canon from '../../../../assets/images/tech/3.png';
const DealsAndOffers = () => {
  const isMobile = useIsMobile();
  return (
    <Style>
      <div className='info__section'>
        <div className='info__section__text'>
          {!isMobile && <H4>Deals and offers</H4>}
          {isMobile && <H5>Deals and offers</H5>}
          <Body1 margin="0 0 18px" color="gray/500">Hygiene equipments</Body1>
        </div>
        <TimerSection />
      </div>
      <div className='cards'>
        <OfferCard image={watches} discount={25} name="Smart watches" />
        <OfferCard image={laptops} discount={15} name="Laptops" />
        <OfferCard image={GoPro} discount={50} name="GoPro cameras" />
        <OfferCard image={Headphones} discount={40} name="Headphones" />
        <OfferCard image={Canon} discount={30} name="Canon camreras" />
      </div>
    </Style>
  )
}

export default DealsAndOffers