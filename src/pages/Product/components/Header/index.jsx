import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { MdOutlineLocalShipping, MdOutlineMessage } from 'react-icons/md'
import Button from '../../../../components/Button'
import Dot from '../../../../components/Dot'
import Rating from '../../../../components/Rating'
import { Body1, Body2, H4, H5, Span } from '../../../../components/Typography'
import { useCartContext } from '../../../../context/CartContext'
import ImageSlider from '../ImageSlider'
import SupplierCard from '../SupplierCard'
import Style from './style'

const Header = ({ product }) => {
    const { addToCart } = useCartContext();
    if (!product) {
        return <></>
    }

    return (
        <Style>
            <div className="images">
                <ImageSlider
                    images={product?.images ? [product.mainImage, ...product.images] : []}
                    alt={product.name} />
            </div>
            <div className="info">
                <Body1 color='green' margin="0 0 4px"><AiOutlineCheck /> In stock</Body1>
                <H4 margin="0 0 9px">{product.name}</H4>
                <div className="info__line">
                    <div>
                        <Rating rate={product.rate} />
                        <Span color="orange">{product.rate * 2}</Span>
                    </div>
                    <Dot />
                    <div>
                        <Body1 color='gray/500'><MdOutlineMessage className='icon' /> {product.reviews} reviews</Body1>
                    </div>
                    <Dot />
                    <div>
                        <Body1 color='gray/500'><MdOutlineLocalShipping className='icon' /> {product.sold} sold</Body1>
                    </div>
                </div>
                <div className='pricing'>
                    <div>
                        <H5 color='red'>${product.price}</H5>
                        <Body2 margin="4px 0 0">50-100 pcs</Body2>
                    </div>
                    <div>
                        <H5>${product.price * 2}</H5>
                        <Body2 margin="4px 0 0">100-700 pcs</Body2>
                    </div>
                    <div>
                        <H5>${product.price * 5}</H5>
                        <Body2 margin="4px 0 0">+700 pcs</Body2>
                    </div>
                </div>

                <div className="info__table">
                    {Object.keys(product.info).map((key, index) => {
                        return <div
                            className={`info__row ${((index + 3) % 3) === 0 ? "underline" : ""}`}
                            key={key}>
                            <Body1 color='gray/500'>{key}:</Body1>
                            <Body1 color='gray/600'>{product.info[key]}</Body1>
                        </div>
                    })}
                </div>
            </div >
            <div className="buy">
                <SupplierCard supplier={product.supplier} />
                <Button
                    varient="secondary"
                    fullWidth
                    size='medium'
                    onClick={() => { addToCart(product) }}
                ><BsFillCartPlusFill /> Add to cart</Button>
            </div>
        </Style >
    )
}

export default Header