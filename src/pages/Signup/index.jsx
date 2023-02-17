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
import signupSchema from '../../validation/signupSchema'
import Style from './style'

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: { value: "", error: "" },
    surname: { value: "", error: "" },
    email: { value: "", error: "" },
    phone: {
      code: "",
      number: "",
      error: ""
    },
    password1: { value: "", error: "" },
    password2: { value: "", error: "" },
    agree: { value: false, error: "" },
  });

  useEffect(() => {
    if (auth.isAuth()) {
      navigate("/");
    }
  }, [navigate]);

  const handelChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: "" } }))
  }

  const handelPhoneCodeChange = (code) => {
    setData(prev => ({ ...prev, phone: { ...prev.phone, code: code, error: "" } }))
  }

  const handelPhoneNumberChange = (number) => {
    setData(prev => ({ ...prev, phone: { ...prev.phone, number: number, error: "" } }))
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    signupSchema.validate({
      name: data.name.value,
      surname: data.surname.value,
      email: data.email.value,
      phoneCode: data.phone.code,
      phoneNumber: data.phone.number,
      password1: data.password1.value,
      password2: data.password2.value,
      agree: data.agree.value,
    }, { abortEarly: false })
      .then(async () => {
        const result = await auth.signup(data);
        if (result) {
          navigate("/");
        }
      })
      .catch((err) => {
        const tempData = { ...data };
        err.inner.forEach(({ message, params }) => {
          if (params.path !== "phoneCode" && params.path !== "phoneNumber") {
            tempData[params.path].error = message;
          } else {
            tempData.phone.error = message
          }
        });
        setData({ ...tempData });
      });
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
        <Body1 align="center" color="gray/800">Already have an accaunt?
          <CustomLink to="/login" color="blue">Log in</CustomLink></Body1>
      </Style>
    </AuthPages>
  )
}

export default Signup