import React, { useState, useEffect } from 'react';
// hooks
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

// components
import Button from '../../components/Button';
import { Body1, H3, H4 } from '../../components/Typography';
import CustomLink from '../../components/CustomeLink';

// layout
import AuthPages from '../../layout/AuthPages';

// yup
import loginSchema from '../../validation/loginSchema';

// icons
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import Loading from '../../components/Loading';
import LoginForm from './LoginForm';
const Login = () => {
  const navigate = useNavigate();
  const { login, user, error, isLoading } = useAuth();
  const [data, setData] = useState({
    username: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

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
        await login(data.username.value, data.password.value, rememberMe);
        if (!error) {
          navigate("/")
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

  if (isLoading) {
    return <Loading />
  }

  return (
    <AuthPages>
      <H3 margin="0 0 17px">Sign in</H3>
      <LoginForm {...{ data, rememberMe, error, handelChange, handelSubmit, setRememberMe }} />

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