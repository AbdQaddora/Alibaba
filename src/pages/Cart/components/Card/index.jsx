import React from 'react'
import Button from '../../../../components/Button';
import NumberSliderInput from '../../../../components/NumberSliderInput';
import { Body1, Body2, Span } from '../../../../components/Typography';
import { useCartContext } from '../../../../context/CartContext';
import Style from './style'

const Card = ({ id, quantity, price, name, mainImage, info }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCartContext();

  return (
    <Style>
      <div className="image">
        <img src={mainImage} alt={name} />
      </div>
      <div className="content">
        <Body1 className="title" weight={500}>{name}</Body1>
        <Body1 className='info'>
          {Object.keys(info).map(key => <Span color="gray/500" key={key}>{key}: {info[key]}, </Span>)}
        </Body1>
        <Button

          varient="secondary"
          onClick={() => { removeFromCart(id) }}>
          <Body2 color="red">Remove</Body2>
        </Button>
      </div>
      <div className="quantity__change">
        <Body1>${price * quantity}</Body1>

        <NumberSliderInput
          value={quantity}
          onNext={() => increaseQuantity(id)} 
          onPrev={() => decreaseQuantity(id)}/>
      </div>
    </Style>
  )
}

export default Card