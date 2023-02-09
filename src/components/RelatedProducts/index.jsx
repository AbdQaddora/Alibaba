import React from 'react'
import Style from './style'

// images
import img1 from '../../assets/images/tech/1.png';
import img2 from '../../assets/images/tech/2.png';
import img3 from '../../assets/images/tech/3.png';
import img4 from '../../assets/images/tech/4.png';
import img5 from '../../assets/images/tech/5.png';
import { Body1, H4 } from '../Typography';

const RelatedProducts = ({ title }) => {
    return (
        <Style>
            <H4 margin="0 0 15px">{title}</H4>
            <div className="cards">
                <div className="card">
                    <div className="product__img">
                        <img src={img1} alt="product" />
                    </div>
                    <Body1 margin="14px 0 4px" color="gray/600">Xiaomi Redmi 8 Original</Body1>
                    <Body1 color="gray/500">$32.00-$40.00</Body1>
                </div>
                <div className="card">
                    <div className="product__img">
                        <img src={img2} alt="product" />
                    </div>
                    <Body1 margin="14px 0 4px" color="gray/600">Xiaomi Redmi 8 Original</Body1>
                    <Body1 color="gray/500">$32.00-$40.00</Body1>
                </div>
                <div className="card">
                    <div className="product__img">
                        <img src={img3} alt="product" />
                    </div>
                    <Body1 margin="14px 0 4px" color="gray/600">Xiaomi Redmi 8 Original</Body1>
                    <Body1 color="gray/500">$32.00-$40.00</Body1>
                </div>
                <div className="card">
                    <div className="product__img">
                        <img src={img4} alt="product" />
                    </div>
                    <Body1 margin="14px 0 4px" color="gray/600">Xiaomi Redmi 8 Original</Body1>
                    <Body1 color="gray/500">$32.00-$40.00</Body1>
                </div>
                <div className="card">
                    <div className="product__img">
                        <img src={img5} alt="product" />
                    </div>
                    <Body1 margin="14px 0 4px" color="gray/600">Xiaomi Redmi 8 Original</Body1>
                    <Body1 color="gray/500">$32.00-$40.00</Body1>
                </div>
            </div>
        </Style>
    )
}

export default RelatedProducts