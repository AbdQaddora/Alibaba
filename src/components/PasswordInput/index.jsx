import React from 'react'
import { useState } from 'react';
import { InputError, InputGroup, InputLabel } from '../common'
import { PasswordInputContainer, PasswordInput as MyPasswordInput } from './style';

// icons 
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const PasswordInput = ({ name, label, placeholder, onChange, value, error, width }) => {
    const [isInputTypePassword, setIsInputTypePassword] = useState(true);

    const toggleInputType = () => {
        setIsInputTypePassword(prev => !prev);
    }

    return (
        <InputGroup>
            {label && <InputLabel htmlFor="name">{label}</InputLabel>}
            <PasswordInputContainer error={error} width={width}>
                <MyPasswordInput
                    name={name}
                    id={name}
                    placeholder={placeholder || ""}
                    onChange={onChange}
                    type={isInputTypePassword ? "password" : "text"}
                    value={value}
                />
                {isInputTypePassword ?
                    <AiFillEye onClick={toggleInputType} className='password_icon' />
                    : <AiFillEyeInvisible onClick={toggleInputType} className='password_icon' />}
            </PasswordInputContainer>
            {error && <InputError>{error}</InputError>}
        </InputGroup>
    )
}

export default PasswordInput