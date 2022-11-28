import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  FormInput,
  AuthButton,
  RegisterHeader,
  RegisterLink,
  FormText,
  EmailError,
  PasswordError,
  ConfirmPasswordError,
} from './RegisterStep1.styled';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Неправильний поштовий адрес')
    .required('Це поле не може бути порожнім'),
  password: Yup.string()
    .trim()
    .required('Це поле не може бути порожнім')
    .min(7, 'Пароль містить мінімум 7 символів')
    .max(32, 'Пароль містить максимум 32 символи'),
  confirmPassword: Yup.string()
    .required('Це поле не може бути порожнім')
    .oneOf([Yup.ref('password'), null], 'Пароль не співпадає'),
});

export default function SignUpStep1({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      if (values.password === values.confirmPassword) {
        onSubmit({
          email: values.email,
          password: values.password,
        });
        // formik.resetForm();
      } else {
        alert('No password');
      }
    },
  });

  return (
    <FormContainer>
      <RegisterHeader>Registration</RegisterHeader>
      <form onSubmit={formik.handleSubmit}>
        <FormInput
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
        />
        {formik.values.email !== '' || formik.errors.email ? (
          <EmailError>{formik.errors.email}</EmailError>
        ) : null}
        <FormInput
          id="password"
          name="password"
          type="password"
          autoComplete="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Password"
        />
        {formik.values.password !== '' ||
        formik.errors.password ||
        formik.touched.password ? (
          <PasswordError>{formik.errors.password}</PasswordError>
        ) : null}
        <FormInput
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          autoComplete="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          placeholder="Confirm Password"
        />
        {formik.values.confirmPassword !== '' ||
        formik.errors.confirmPassword ||
        formik.touched.confirmPassword ? (
          <ConfirmPasswordError>
            {formik.errors.confirmPassword}
          </ConfirmPasswordError>
        ) : null}
        <AuthButton variant="contained" fullWidth type="submit">
          Next
        </AuthButton>
      </form>
      <FormText>
        Already have an account?
        <RegisterLink to="/login">Login</RegisterLink>
      </FormText>
    </FormContainer>
  );
}
