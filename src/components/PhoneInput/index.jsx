import React from 'react'
import { Input } from '../common'
import SelectInput from '../SelectInput'
import Style from './style'

const PhoneInput = () => {
    const handelChange = () => {

    }
    
    return (
        <Style>
            <SelectInput options={[
                { text: "+972", value: "1" },
                { text: "+971", value: "2" },
                { text: "+970", value: "3" },
            ]} />

            <Input
                label={"Phone "}
                name={"email"}
                onChange={handelChange}
                placeholder="00-000-00-00"
            // error={data.username.error}
            // value={data.username.value}
            />
        </Style>
    )
}

export default PhoneInput