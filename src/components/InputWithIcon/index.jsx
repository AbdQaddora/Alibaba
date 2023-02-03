import React from 'react'
import { Input } from '../common'
import TransparentButton from '../TransparentButton'
import Style from './style'

const InputWithIcon = ({ onChange, value, background, icon, onIconClick = () => { }, className = "", ...rest }) => {
    return (
        <Style className={className} background={background}>
            <TransparentButton className='icon' onClick={onIconClick}>
                <img src={icon} alt="icon" />
            </TransparentButton>
            <Input onChange={onChange} value={value} {...rest} />
        </Style>
    )
}

export default InputWithIcon