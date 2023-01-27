import React, { useEffect, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai';
import { Body1 } from '../Typography';
import { SelectContainer, SelectOption, SelectOptionsContainer, SelectTrigger } from './style'

const SelectInput = ({ value, onChange, options, width }) => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleSelect = () => {
        setShowOptions(prev => !prev);
    }

    const handelSelect = (value) => {
        if (onChange) {
            onChange(value);
        }
        setShowOptions(false)
    }
    console.log({options})
    useEffect(() => {
        if (!value) {
            if (onChange) {
                onChange(options[0].text);
            }
        }
    }, [onChange, options, value]);

    return (
        <SelectContainer width={width}>
            <SelectTrigger onClick={toggleSelect}>
                <Body1 color='dark'>{value ? value : options[0].text}</Body1>
                <Body1 color='gray/500'>
                    <AiOutlineDown />
                </Body1>
            </SelectTrigger>
            <SelectOptionsContainer showOptions={showOptions}>
                {options.map(option => <SelectOption key={option.value} onClick={() => {
                    handelSelect(option.value)
                }}>{option.text}</SelectOption>)}
            </SelectOptionsContainer>
        </SelectContainer>
    )
}

export default SelectInput