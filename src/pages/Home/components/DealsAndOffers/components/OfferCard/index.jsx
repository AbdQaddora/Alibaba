import React from 'react'
import { Body1 } from '../../../../../../components/Typography'
import Style, { Badge } from './style'

const OfferCard = ({ image, name, discount }) => {
  return (
    <Style>
      <img src={image} alt={name} />
      <Body1>{name}</Body1>
      <Badge>-{discount}%</Badge>
    </Style>
  )
}

export default OfferCard