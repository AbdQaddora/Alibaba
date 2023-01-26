import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup.string().min(6).max(100).required(),
    password: yup.string().min(6).max(100).required(),
});

export const emailSchema = yup.object().shape({
    email: yup.string().email().required(),
});

export default loginSchema;