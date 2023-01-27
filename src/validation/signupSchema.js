import * as yup from 'yup';

const signupSchema = yup.object().shape({
    name: yup.string().min(4).max(100).required(),
    surname: yup.string().min(4).max(100).required(),
    email: yup.string().email().min(6).max(100).required(),
    phoneCode: yup.string().min(2).max(6).required("phone code is a required field"),
    phoneNumber: yup.string()
        .matches(`^[0-9]*$`, 'phone should contain numbers')
        .min(8, "phone must be at least 8 numbers").max(11, "phone must be at max 11 numbers")
        .required("phone is a required field"),
    password1: yup
        .string().min(8 , "password must be at least 8 characters")
        .matches(/[a-z]/, 'password should contain at least one small letter')
        .matches(/[A-Z]/, 'password should contain at least one capital letter')
        .matches(/\d/, 'password should contain at least one number')
        .matches((/[^A-Za-z0-9]/), 'password should contain at least one special characters')
        .required("password is a required field"),
    password2: yup.mixed().oneOf([yup.ref('password1')], "passwords don't match!").required(),
    agree: yup.mixed().oneOf([true], 'you must agree to terms & conditions').required()
});

export default signupSchema;