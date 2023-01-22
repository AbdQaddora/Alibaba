import React from 'react'
import { InputGroup } from '../common'
import { CheckboxDiv } from './style'

const CheckBox = ({ label, value, onChange, name }) => {
    return (
        <InputGroup>
            <CheckboxDiv>
                <input
                    className="custom-checkbox"
                    type="checkbox"
                    id={name}
                    name={name}
                    onChange={onChange}
                    value={value}
                />
                <label htmlFor={name}>{label ? label : ""}</label>
            </CheckboxDiv>
        </InputGroup>
    )
}

export default CheckBox