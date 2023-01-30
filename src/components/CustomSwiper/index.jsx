import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Style } from './style';

const CustomSwiper = ({
    spaceBetween,
    slidesPerView = 1,
    autoplay,
    autoplayDelay,
    infinite,
    data,
    renderSlide,
    breakPoints
}) => {
    const [numberOfSlides, setNumberOfSlides] = useState(null);

    useEffect(() => {
        if (breakPoints) {
            const breakPointsSorted = breakPoints.sort((a, b) => {
                return a.breakPoint > b.breakPoint ? a : b
            })

            const changeNumberOfSlidesBasedOnBreakPoints = () => {
                breakPointsSorted.forEach(point => {
                    if (window.innerWidth < point.breakPoint) {
                        setNumberOfSlides(point.slidesPerView + 0.1)
                    }
                })

                if (window.innerWidth > breakPointsSorted[0].breakPoint &&
                    numberOfSlides !== breakPointsSorted[0].slidesPerView) {
                    setNumberOfSlides(breakPointsSorted[0].slidesPerView);
                }
            }

            changeNumberOfSlidesBasedOnBreakPoints();
            window.addEventListener("resize", changeNumberOfSlidesBasedOnBreakPoints);
        } else {
            if (!numberOfSlides) {
                setNumberOfSlides(slidesPerView);
            }
        }
    }, [numberOfSlides , breakPoints , slidesPerView])

    if (!numberOfSlides) {
        return <></>
    }

    SwiperCore.use([Autoplay])

    return (
        <Style>
            <Swiper
                loop={infinite}
                spaceBetween={spaceBetween || 16}
                slidesPerView={numberOfSlides || slidesPerView}
                autoplay={autoplay ? { delay: autoplayDelay || 3000 } : {}}

                className="mySwiper"
            >
                {data.map((slide, index) => {
                    return <SwiperSlide key={index}>
                        {renderSlide(slide)}
                    </SwiperSlide>
                })}
            </Swiper >
        </Style >
    )
}

export default CustomSwiper