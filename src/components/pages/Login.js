import React, { useContext } from "react";
import { Formik, Form } from "formik";
import FormField from "../FormField";
import loginSchema from "../../schemas/loginSchema";
import ThemeContext from "../../context/theme/themeContext";

const Login = () => {
  const themeContext = useContext(ThemeContext);
  const { darkMode } = themeContext;

  return (
    <>
      <p>Please note that these forms do not function yet.</p>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={loginSchema}
        //onSubmit={values => }
      >
        {(formik) => (
          <div>
            <h1>Login</h1>
            <Form className='form'>
              <FormField label='Username' name='username' type='text' />
              <FormField label='Password' name='password' type='password' />
              <input
                type='submit'
                value='Submit'
                className={`btn btn-block ${
                  darkMode ? "btn-light" : "btn-dark"
                }`}
              />
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
