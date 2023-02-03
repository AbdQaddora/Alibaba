import React from 'react'
import starActive from '../../assets/images/starActive.png'
import starNotActive from '../../assets/images/star.png'
import Style from './style'

const Rating = ({ rate }) => {
    return (
        <Style>
            {[...Array(rate)].map((el, index) => {
                return <img src={starActive} alt="active star" key={index} />
            })}
            {[...Array(5 - rate)].map((el, index) => {
                return <img src={starNotActive} alt="not active star" key={index} />
            })}
        </Style>
    )
}

export default Rating