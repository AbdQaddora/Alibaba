import React from 'react'
import { Input as MyInput, InputError, InputGroup, InputLabel } from '../common'

const Input = ({ name, label, placeholder, type, onChange, value, error, width }) => {
    return (
        <InputGroup>
            {label && <InputLabel htmlFor="name">{label}</InputLabel>}
            <MyInput
                name={name}
                id={name}
                placeholder={placeholder || ""}
                onChange={onChange}
                type={type}
                value={value}
                error={error}
                width={width}
            />
            {error && <InputError>{error}</InputError>}
        </InputGroup>
    )
}

export default Input