import React from 'react'
import Button from '../../../components/Button'
import CheckBox from '../../../components/CheckBox'
import { Input } from '../../../components/common'
import CustomLink from '../../../components/CustomeLink'
import PasswordInput from '../../../components/PasswordInput'
import PhoneInput from '../../../components/PhoneInput'
import { Body1 } from '../../../components/Typography'

const SignupForm = ({ data, setData, error, handelSubmit }) => {
    const handelChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: "" } }))
    }

    const handelPhoneCodeChange = (code) => {
        setData(prev => ({ ...prev, phone: { ...prev.phone, code: code, error: "" } }))
    }

    const handelPhoneNumberChange = (number) => {
        setData(prev => ({ ...prev, phone: { ...prev.phone, number: number, error: "" } }))
    }

    return (
        <form onSubmit={handelSubmit}>
            <div className='name_inputs'>
                <Input
                    label={"Name"}
                    name={"name"}
                    onChange={handelChange}
                    placeholder="Type here"
                    error={data.name.error}
                    value={data.name.value}
                />

                <Input
                    label={"Surname"}
                    name={"surname"}
                    onChange={handelChange}
                    placeholder="Type here"
                    error={data.surname.error}
                    value={data.surname.value}
                />
            </div>

            <Input
                className="email_input"
                label={"Your e-mail "}
                name={"email"}
                onChange={handelChange}
                placeholder="example@mail.com"
                error={data.email.error}
                value={data.email.value}
            />

            <PhoneInput
                onCodeChange={handelPhoneCodeChange}
                onPhoneChange={handelPhoneNumberChange}
                codeValue={data.phone.code}
                phoneValue={data.phone.number}
                error={data.phone.error}
            />

            <PasswordInput
                label={"Password"}
                name={"password1"}
                onChange={handelChange}
                placeholder="At least 6 characters."
                error={data.password1.error}
                value={data.password1.value}
            />

            <PasswordInput
                label={"Repeat password"}
                name={"password2"}
                onChange={handelChange}
                placeholder="Type here"
                error={data.password2.error}
                value={data.password2.value}
            />

            {error && <Body1 margin="0 0 5px" color="red">{error}</Body1>}
            <Button
                size="medium"
                fullWidth
                type="submit"
            >Register now</Button>

            <CheckBox
                label={<Body1>I agree with <CustomLink to="" color="blue">Terms and Conditions</CustomLink></Body1>}
                value={data.agree.value}
                error={data.agree.error}
                onChange={() => { setData(prev => ({ ...prev, agree: { value: !prev.agree.value, error: "" } })) }}
            />
        </form>
    )
}

export default SignupForm