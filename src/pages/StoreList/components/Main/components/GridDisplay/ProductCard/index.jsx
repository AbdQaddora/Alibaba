import React from 'react'
import Button from '../../../../../../../components/Button'
import Rating from '../../../../../../../components/Rating'
import { Body1, Span } from '../../../../../../../components/Typography'

import Style from './style';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductCard = ({ image, name, price, priceBeforeDiscount, rate, id }) => {
    return (
        <Style>
            <div className='product__image'>
                <img src={image} alt={name} />
            </div>
            <div className='product__content'>
                <div className='product__content__info'>
                    <div>
                        <Body1>${price} <Span color="gray/500" className='price_before_discount'>${priceBeforeDiscount}</Span></Body1>
                        <div className="rate__container">
                            <Rating rate={rate} />
                            <Body1 color="orange" className='product__rate'>
                                {rate * 2}
                            </Body1>
                        </div>
                    </div>
                    <Button className="add_to_cart" varient={'secondary'}>
                        <AiOutlineShoppingCart />
                    </Button>
                </div>
                <Body1 color="gray/800">{name}</Body1>
            </div>
        </Style>
    )
}

export default ProductCard