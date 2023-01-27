import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {SignupSchema} from "../../../utils/validation/validationSchema.js";
import {Button} from "@mui/material";
import './styles.css';
import {fetchLogin} from "../../../features/login/loginSlice.js";
import {useDispatch, useSelector} from "react-redux";
import Message from "./Message.jsx";

const Login = () => {
    const { status } = useSelector((store) => store.login);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState(false);

    const activeMessage = async () => {
        setMessage(true);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchLogin());
        }
    }, [status, dispatch]);

  return (
      <div className="login_block">
            <Formik
                initialValues={{
                    login: "",
                    password: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, formikHelpers) => {
                    formikHelpers.resetForm();
                    const login = {
                        login: values.login,
                    }
                    const password = {
                        password: values.password,
                    }
                    setLogin(login);
                    setPassword(password);
                    activeMessage();
                }}
            >
                {({handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <label>
                            <Field
                                type="text"
                                name="login"
                                placeholder="Login"
                            />
                        </label>
                        <ErrorMessage name="login" />
                        <label>
                            <Field
                                type="text"
                                name="password"
                                placeholder="Password"
                            />
                        </label>
                        <ErrorMessage name="password" />
                        <Button type="submit" className="submit-button">
                            Login
                        </Button>
                    </Form>
                    )}
            </Formik>

          {message &&
              <Message
                  messageActive={message}
                  status={status}
              />}
      </div>
  )
};

export default Login;
