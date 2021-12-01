import React from 'react'
import { ErrorMessage, useField } from 'formik'

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={field.name} className='label'>{label} </label>
      <ErrorMessage name={field.name} component='div' className='error' />
      <input
      {...field} {...props}
      /> 
    </div>
  )
}

export default FormField
