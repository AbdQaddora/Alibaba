import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import CheckBox from '../../components/CheckBox'
import CustomLink from '../../components/CustomeLink'
import Input from '../../components/Input'
import PasswordInput from '../../components/PasswordInput'
import PhoneInput from '../../components/PhoneInput'
import { Body1, H3 } from '../../components/Typography'
import AuthPages from '../../layout/AuthPages'
import auth from '../../services/auth.service'
import Style from './style'

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (auth.isAuth()) {
      navigate("/");
    }
  }, [navigate]);

  const handelChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: "" } }))
  }

  const handelSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <AuthPages>
      <Style>
        <H3 margin="0 0 17px">Register</H3>
        <form onSubmit={handelSubmit}>
          <div className='name_inputs'>
            <Input
              label={"Name"}
              name={"name"}
              onChange={handelChange}
              placeholder="Type here"
              error={data.username.error}
              value={data.username.value}
            />

            <Input
              label={"Surname"}
              name={"surname"}
              onChange={handelChange}
              placeholder="Type here"
              error={data.username.error}
              value={data.username.value}
            />
          </div>

          <Input
            className="email_input"
            label={"Your e-mail "}
            name={"email"}
            onChange={handelChange}
            placeholder="example@mail.com"
            error={data.username.error}
            value={data.username.value}
          />

          <PhoneInput />
          <PasswordInput
            label={"Password"}
            name={"password"}
            onChange={handelChange}
            placeholder="At least 6 characters."
            error={data.password.error}
            value={data.password.value}
          />

          <PasswordInput
            label={"Repeat password"}
            name={"password"}
            onChange={handelChange}
            placeholder="Type here"
            error={data.password.error}
            value={data.password.value}
          />

          <Button
            size="medium"
            fullWidth
            type="submit"
          >Register now</Button>

          <CheckBox
            label={<Body1>I agree with <CustomLink to="" color="blue">Terms and Conditions</CustomLink></Body1>}
            name="check"
            value={rememberMe}
            onChange={() => { setRememberMe(prev => !prev) }}
          />

        </form>
        <Body1 align="center" color="gray/800">Already have an accaunt?
          <CustomLink to="/login" color="blue">Log in</CustomLink></Body1>
      </Style>
    </AuthPages>
  )
}

export default Signup