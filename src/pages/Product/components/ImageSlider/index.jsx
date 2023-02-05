import React, { useState } from 'react'
import Style from './style'

const ImageSlider = ({ images, alt }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    return (
        <Style>
            <div className='active__image'>
                <img src={images[activeImageIndex]} alt={alt} />
            </div>
            <div className='images__pagentaion'>
                {images.map((image, index) => <div
                    className={`images__pagentaion__image ${activeImageIndex === index ? "active" : ""}`}
                    key={index}>
                    <img
                        src={image}
                        onClick={() => { setActiveImageIndex(index) }}
                        alt={`${alt}--${index}`}
                    />
                </div>)}
            </div>
        </Style>
    )
}

export default ImageSlider