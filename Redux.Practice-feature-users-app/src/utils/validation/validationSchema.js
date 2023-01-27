import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    login: Yup.string('Email').email('Please, enter valid data').required('Required'),
    password: Yup.string().min(8, 'Min 8 characters').required('Required'),
});