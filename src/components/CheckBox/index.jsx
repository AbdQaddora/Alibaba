import React from 'react'
import { InputGroup } from '../common'
import { CheckboxDiv } from './style'

const CheckBox = ({ label, value, onChange, name, error }) => {
    return (
        <InputGroup>
            <CheckboxDiv error={error}>
                <input
                    className="custom-checkbox"
                    type="checkbox"
                    id={name}
                    name={name}
                    onChange={onChange}
                    checked={value}
                />
                <label htmlFor={name}>{label ? label : ""}</label>
            </CheckboxDiv>
        </InputGroup>
    )
}

export default CheckBox