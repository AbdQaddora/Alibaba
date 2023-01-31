import React, { useState } from 'react'
import SlideChangeButton from './components/SlideChangeButton'
import ImageCard from './components/ImageCard'
import UserSection from './components/UserSection'
import DiscountSection from './components/DiscountSection'

// mock data
import { home_header_slides } from '../../../../mock'

// style
import Style from './style'
import { useIsMobile } from '../../../../context/IsMobile'
import CustomSwiper from '../../../../components/CustomSwiper'

const Header = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const isMobile = useIsMobile();
    if (isMobile) {
        return <CustomSwiper
            data={home_header_slides.map(el => el.imageCard)}
            renderSlide={(slide) => <ImageCard {...slide} />}
        />
    }

    return (
        <Style>
            <div>
                {home_header_slides.map((slide, index) => {
                    return <SlideChangeButton
                        key={index}
                        active={index === activeSlide}
                        onClick={() => { setActiveSlide(index) }}
                    >{slide.name}</SlideChangeButton>
                })}
            </div>
            <div>
                {<ImageCard {...home_header_slides.filter((slide, index) => index === activeSlide)[0].imageCard}></ImageCard>}
            </div>
            <div className='user_discount'>
                <UserSection />
                <DiscountSection>Get US $10 off with a new supplier</DiscountSection>
                <DiscountSection backgroundBlue>Send quotes with supplier preferences</DiscountSection>
            </div>
        </Style>
    )
}

export default Header