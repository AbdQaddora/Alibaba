import React from 'react'
import { Body1 } from '../../../../../../components/Typography'
import Style from './style'

const Card = ({ text1, text2, headerImage, icon }) => {
    return (
        <Style headerImage={headerImage}>
            <div className='card__image'>
                <div className='card__icon'>
                    {icon}
                </div>
            </div>
            <div className="card__content">
                <Body1>{text1}</Body1>
                <Body1>{text2}</Body1>
            </div>
        </Style>
    )
}

export default Card