import React from 'react'
import Button from '../../components/Button'
import CheckBox from '../../components/CheckBox'
import Input from '../../components/Input'
import Paper from '../../components/Paper'
import PasswordInput from '../../components/PasswordInput'

const Home = () => {

    return (
        <Paper>
            <Input
                label={"Username"}
                name={"username"}
                onChange={(e) => { console.log(e.target.value) }}
                placeholder="Email or phone"
                type="text"
            // error={"Lorem, ipsum dolor."}
            />
            <PasswordInput
                label={"Password"}
                name={"password"}
                onChange={(e) => { console.log(e.target.value) }}
                placeholder="Type here"
            // error={"Lorem, ipsum dolor."}
            />
            <CheckBox
                label="Remember me"
                name="check"
            />

            <Button size="medium" fullWidth>Log In</Button>

        </Paper>
    )
}

export default Home