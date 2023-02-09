import React from 'react'
import Button from '../../../../../../../components/Button'
import Rating from '../../../../../../../components/Rating'
import { Body1, Span } from '../../../../../../../components/Typography'

import Style from './style';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartContext } from '../../../../../../../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCartContext();
    return (
        <Style>
            <div className='product__image'>
                <img src={product.mainImage} alt={product.name} />
            </div>
            <div className='product__content'>
                <div className='product__content__info'>
                    <div>
                        <Body1>${product.price} <Span color="gray/500" className='price_before_discount'>${product.priceBeforeDiscount}</Span></Body1>
                        <div className="rate__container">
                            <Rating rate={product.rate} />
                            <Body1 color="orange" className='product__rate'>
                                {product.rate * 2}
                            </Body1>
                        </div>
                    </div>
                    <Button
                        className="add_to_cart"
                        varient={'secondary'}
                        onClick={() => { addToCart(product) }}
                    >
                        <AiOutlineShoppingCart />
                    </Button>
                </div>
                <Body1 color="gray/800">{product.name}</Body1>
            </div>
        </Style>
    )
}

export default ProductCard