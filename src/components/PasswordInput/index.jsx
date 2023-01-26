import React from 'react'
import { useState } from 'react';
import { InputError, InputGroup, InputLabel } from '../common'
import { PasswordInputContainer, PasswordInput as MyPasswordInput, LabelContainer } from './style';

// icons 
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import CustomLink from '../CustomeLink';

const PasswordInput = ({ name, label, placeholder, onChange, value, error, width, upperLink, upperLinkText }) => {
    const [isInputTypePassword, setIsInputTypePassword] = useState(true);
    const [isFocuse, setIsFocuse] = useState(false);

    const toggleInputType = () => {
        setIsInputTypePassword(prev => !prev);
    }

    return (
        <InputGroup>
            <LabelContainer>
                {label && <InputLabel htmlFor="name">{label}</InputLabel>}
                {(upperLink && upperLinkText) && <CustomLink to={upperLink} color="blue">{upperLinkText}</CustomLink>}
            </LabelContainer>
            <PasswordInputContainer error={error} width={width} isFocuse={isFocuse}
            >
                <MyPasswordInput
                    onFocus={() => { setIsFocuse(true) }}
                    onBlur={() => { setIsFocuse(false) }}
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