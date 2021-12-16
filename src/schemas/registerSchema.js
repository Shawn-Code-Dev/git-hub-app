import * as Yup from "yup";

const registrationSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Required"),
  username: Yup.string()
    .max(16, "Must be 16 characters or less")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Must match Password")
    .required("Confirm password"),
});

export default registrationSchema;
