import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import authOperations from "redux/Auth/auth-operations";
import { toast } from "react-toastify";
import {
  FormContainer,
  FormInput,
  AuthButton,
  LoginHeader,
  RegisterLink,
  FormText,
  InputError,
} from "./LoginPage.styled";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email містить помилки")
    .required("Це поле не може бути порожнім"),
  password: Yup.string()
    .required("Це поле не може бути порожнім")
    .min(7, "Пароль містить мінімум 7 символів")
    .max(32, "Пароль містить максимум 32 символи"),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(
          authOperations.logIn({
            email: values.email,
            password: values.password,
          })
        );
      } catch (error) {
        toast.error("Невірна електронна пошта або пароль.");
      }
      formik.resetForm();
    },
  });

  return (
    <FormContainer>
      <LoginHeader>Login</LoginHeader>
      <form onSubmit={formik.handleSubmit}>
        <FormInput
          fullWidth
          id="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.values.email !== "" ||
        formik.errors.email ||
        formik.touched.email ? (
          <InputError>{formik.errors.email}</InputError>
        ) : null}
        <FormInput
          fullWidth
          id="password"
          name="password"
          type="password"
          autoComplete="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.values.password !== "" ||
        formik.errors.password ||
        formik.touched.password ? (
          <InputError>{formik.errors.password}</InputError>
        ) : null}
        <AuthButton variant="contained" fullWidth type="submit">
          LOGIN
        </AuthButton>
      </form>
      <FormText>
        Don't have an account?
        <RegisterLink to="/register">Register</RegisterLink>
      </FormText>
    </FormContainer>
  );
}
