import React from 'react'
import CustomLink from '../../../../../../../components/CustomeLink'
import Rating from '../../../../../../../components/Rating'
import { Body1,  Span } from '../../../../../../../components/Typography'
import Style from './style'

const ProductCard = ({ image, name, price, priceBeforeDiscount, rate, id, orders, shipping, description }) => {
    return (
        <Style>
            <div className='product__image'>
                <img src={image} alt={name} />
            </div>
            <div className='product__content'>
                <Body1 weight={500} margin="0 0 16px">{name}</Body1>
                <Body1 weight={600} margin="0 0 4px">${price}{" "}
                    <Span color='gray/500' className='price_before_discount'>${priceBeforeDiscount}</Span>
                </Body1>
                <div className='product__info'>
                    <div className="product__rate">
                        <Rating rate={rate} />
                        <Body1 color='orange'>{rate * 2}</Body1>
                    </div>
                    <div className='dot' />
                    <Body1 color="gray/500">{orders} orders</Body1>
                    <div className='dot' />
                    <Body1 color="green">{shipping === "FREE" ? "Free" : "$" + shipping} Shipping</Body1>
                </div>
                <Body1 color="gray/600">{description.split(" ").splice(0 , 30).join(" ")}...</Body1>
                <CustomLink color="blue" to={`/product/${id}`}>View details</CustomLink>
            </div>
        </Style>
    )
}

export default ProductCard