import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'
import CheckBox from '../../components/CheckBox'
import Input from '../../components/Input'
import OrLine from '../../components/OrLine'
import PasswordInput from '../../components/PasswordInput'
import { Body1, H3, H4 } from '../../components/Typography'
import AuthPages from '../../layout/AuthPages'
import CustomLink from '../../components/CustomeLink'
import loginSchema from '../../validation/loginSchema'

// auth service
import auth from '../../services/auth.service'


// icons
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if(auth.isAuth()){
      navigate("/");
    }
  }, []);

  const handelChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: "" } }))
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    loginSchema.validate({
      username: data.username.value,
      password: data.password.value
    }, { abortEarly: false })
      .then(async () => {
        const result = await auth.login(rememberMe);
        if (result) {
          navigate("/");
        }
      })
      .catch((err) => {
        const tempData = { ...data };
        err.inner.forEach(({ message, params }) => {
          tempData[params.path].error = message;
        });
        setData({ ...tempData });
      });
  }

  return (
    <AuthPages>
      <H3 margin="0 0 17px">Sign in</H3>
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
          name="check"
          value={rememberMe}
          onChange={() => { setRememberMe(prev => !prev) }}
        />

        <Button
          size="medium"
          fullWidth
          type="submit"
        >Log In</Button>

        <OrLine>OR</OrLine>
      </form>

      <Button
        size="medium"
        varient="secondary"
        fullWidth
        icon={<H4 className='center'><FcGoogle /></H4>}
      >
        <Body1 color="gray/800">Continue with Google</Body1>
      </Button>

      <Button
        size="medium"
        background="#4267B2"
        fullWidth
        margin="10px 0 30px"
        icon={<H4 color="white" className='center'><AiFillFacebook /></H4>}
      >
        <Body1 color="white">Continue with Facebook</Body1>
      </Button>

      <Body1 align="center" color="gray/800">Don’t have an account? <CustomLink to="/signup" color="blue">Register now</CustomLink></Body1>
    </AuthPages>
  )
}

export default Login