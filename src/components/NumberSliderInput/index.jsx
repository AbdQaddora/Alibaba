import React from 'react'
import Style from './style'
import { GrNext, GrPrevious } from 'react-icons/gr';

const NumberSliderInput = ({value, onNext, onPrev}) => {
    return (
        <Style>
            <button onClick={onPrev}><GrPrevious className='icon'/></button>
            <div>{value}</div>
            <button onClick={onNext}><GrNext className='icon'/></button>
        </Style>
    )
}

export default NumberSliderInput