import React from 'react'
import { Body1, Body2 } from '../../../../../../components/Typography'
import Style from './style'

const Card = ({ image, name, source }) => {
    return (
        <Style>
            <div>
                <Body1 margin="0 0 9px">{name}</Body1>
                <Body2>From</Body2>
                <Body2>{source}</Body2>
            </div>
            <img src={image} alt={name} />
        </Style>
    )
}

export default Card