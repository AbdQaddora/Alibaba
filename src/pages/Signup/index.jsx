import React, { useEffect, useState } from 'react';
// hooks
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
// components
import CustomLink from '../../components/CustomeLink';
import { Body1, H3 } from '../../components/Typography';
// yup
import signupSchema from '../../validation/signupSchema';
// layout
import AuthPages from '../../layout/AuthPages';
// style
import Style from './style'
import Loading from '../../components/Loading';
import SignupForm from './SignupForm';

const initialState = {
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
}

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(initialState);
  const { error, isLoading, user, signup } = useAuth();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

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
        // name, email, password, rememberMe
        await signup(data.name.value, data.email.value, data.password1.value, true);
        if (!error) {
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


  if (isLoading) {
    return <Loading />
  }

  return (
    <AuthPages>
      <Style>
        <H3 margin="0 0 17px">Register</H3>
        <SignupForm {...{ data, setData, error, handelSubmit }} />
        <Body1 align="center" color="gray/800">Already have an accaunt?
          <CustomLink to="/login" color="blue">Log in</CustomLink></Body1>
      </Style>
    </AuthPages>
  )
}

export default Signup