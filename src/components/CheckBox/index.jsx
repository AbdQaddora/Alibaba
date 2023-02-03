import React, { useEffect, useState } from 'react'
import { InputGroup } from '../common'
import { CheckboxDiv } from './style'

const CheckBox = ({ label, value = false, onChange = () => { }, name, error }) => {
    const [checked, setChecked] = useState(value);

    useEffect(() => {
        setChecked(value);
    }, [value])

    const toggleChecked = () => {
        setChecked(prev => !prev);
        onChange();
    }

    return (
        <InputGroup>
            <CheckboxDiv error={error}>
                <input
                    className="custom-checkbox"
                    type="checkbox"
                    id={name}
                    name={name}
                    onChange={() => { }}
                    onClick={toggleChecked}
                    checked={checked}
                />
                <label onClick={toggleChecked} htmlFor={name}>{label ? label : ""}</label>
            </CheckboxDiv>
        </InputGroup>
    )
}

export default CheckBox