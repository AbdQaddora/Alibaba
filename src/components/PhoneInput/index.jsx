import React from 'react'
import { Input, InputError } from '../common'
import SelectInput from '../SelectInput'
import Style from './style'

const PhoneInput = ({ onCodeChange, codeValue, onPhoneChange, phoneValue, error }) => {
    return (
        <>
            <Style error={error}>
                <SelectInput options={[
                    { text: "+972", value: "+972" },
                    { text: "+971", value: "+971" },
                    { text: "+970", value: "+970" },
                ]}
                    onChange={onCodeChange}
                    value={codeValue}
                />

                <Input
                    label={"Phone "}
                    name={"email"}
                    onChange={(e) => { onPhoneChange(e.target.value) }}
                    placeholder="00-000-00-00"
                    value={phoneValue}
                />

            </Style>
            {error && <InputError>{error}</InputError>}
        </>
    )
}

export default PhoneInput