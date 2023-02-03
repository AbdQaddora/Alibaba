import React, { useEffect, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai';
import { Body1 } from '../Typography';
import { SelectContainer, SelectOption, SelectOptionsContainer, SelectTrigger } from './style'

const SelectInput = ({ className = "", value, onChange, options, width, noBorder }) => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleSelect = () => {
        setShowOptions(prev => !prev);
    }

    const getOptionByValue = () => {
        if (value) {
            return options.filter(el => el.value === value)[0]?.text;
        }
        return options[0].text;
    }

    const handelSelect = (value) => {
        if (onChange) {
            onChange(value);
        }
        setShowOptions(false)
    }

    useEffect(() => {
        if (!value) {
            if (onChange) {
                onChange(options[0].value);
            }
        }
    }, [onChange, options, value]);

    return (
        <SelectContainer className={className} width={width} noBorder={noBorder}>
            <SelectTrigger onClick={toggleSelect}>
                <Body1 color='dark'>{getOptionByValue()}</Body1>
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