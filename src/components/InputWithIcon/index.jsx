import React from 'react'
import { Input } from '../common'
import Style from './style'

const InputWithIcon = ({ onChange, value, icon, className = "", ...rest }) => {
    return (
        <Style className={className}>
            <div className='icon'>
                <img src={icon} alt="icon" />
            </div>
            <Input onChange={onChange} value={value} {...rest} />
        </Style>
    )
}

export default InputWithIcon