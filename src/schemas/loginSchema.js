import * as Yup from 'yup'

const loginSchema = Yup.object({
  username: Yup.string()
    .max(16, 'Must be 16 characters or less')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Required'),
})

export default loginSchema