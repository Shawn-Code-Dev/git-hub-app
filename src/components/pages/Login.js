import React from 'react'
import { Formik, Form } from 'formik'
import FormField from '../FormField'
import loginSchema from '../../schemas/loginSchema'

const Login = () => {
  
  return (
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      validationSchema={loginSchema}
      //onSubmit={values => }
    >
      {formik => (
        <div>
          <h1>Login</h1>
          <Form className="form">
            <FormField label='Username' name='username' type='text' />
            <FormField label='Password' name='password' type='password' />
            <input type="submit" value="Submit" className="btn btn-dark btn-block" />
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Login