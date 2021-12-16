import React, { useContext } from "react";
import { Formik, Form } from "formik";
import registrationSchema from "../../schemas/registerSchema";
import FormField from "../FormField";
import ThemeContext from "../../context/theme/themeContext";

const Registration = () => {
  const themeContext = useContext(ThemeContext);
  const { darkMode } = themeContext;

  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={registrationSchema}
      //onSubmit={values => }
    >
      {(formik) => (
        <div>
          <h1>Register</h1>
          <Form className='form'>
            <FormField label='Email' name='email' type='email' />
            <FormField label='Username' name='username' type='text' />
            <FormField label='Password' name='password' type='password' />
            <FormField
              label='Confirm Password'
              name='confirmPassword'
              type='password'
            />
            <input
              type='submit'
              value='Submit'
              className={`btn btn-block ${darkMode ? "btn-light" : "btn-dark"}`}
            />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Registration;
