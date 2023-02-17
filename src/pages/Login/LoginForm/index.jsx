import React from 'react'
import Button from '../../../components/Button';
import CheckBox from '../../../components/CheckBox';
import Input from '../../../components/Input';
import OrLine from '../../../components/OrLine';
import PasswordInput from '../../../components/PasswordInput';
import { Body1 } from '../../../components/Typography';

const LoginForm = ({ handelSubmit, handelChange, data, rememberMe, setRememberMe , error }) => {
    return (
        <form onSubmit={handelSubmit}>
            <Input
                label={"Username"}
                name={"username"}
                onChange={handelChange}
                placeholder="Email or phone"
                error={data.username.error}
                value={data.username.value}
            />

            <PasswordInput
                label={"Password"}
                name={"password"}
                onChange={handelChange}
                placeholder="Type here"
                upperLink={"/reset-password"}
                upperLinkText={"Forgot Password"}
                error={data.password.error}
                value={data.password.value}
            />

            <CheckBox
                label="Remember me"
                value={rememberMe}
                onChange={() => {
                    setRememberMe(prev => !prev)
                }}
            />

            {error && <Body1 margin="0 0 5px" color="red">{error}</Body1>}
            <Button
                size="medium"
                fullWidth
                type="submit"
            >Log In</Button>

            <OrLine>OR</OrLine>
        </form>
    )
}

export default LoginForm