import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/Auth/auth-operations';
// import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import {
  FormContainer,
  RegisterHeader,
  FormInput,
  AuthButton,
  BackButton,
  RegisterLink,
  FormText,
  NameError,
  CityError,
  PhoneError,
} from './RegisterStep2.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Це поле не може бути порожнім')
    .matches(/^[а-яА-ЯїЇіІЁёa-zA-Z]+$/, 'Тільки літери'),
  city: Yup.string()
    .required('Це поле не може бути порожнім')
    .matches(/[A-Z][a-z]+, [A-Z][a-z]*/, 'Введіть в форматі: місто, область'),
  phone: Yup.string()
    .required('Це поле не може бути порожнім')
    .matches(/^\+380\d{9}$/, 'Неправильний номер телефону'),
});

export default function SignUpStep1({ data, onSubmit }) {
  const { email, password } = data;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        await dispatch(
          authOperations.register({
            email,
            password,
            name: values.name,
            city: values.city,
            phone: values.phone,
          })
        );
      } catch (error) {
        toast.error(
          'Щось пішло не так. Можливо користувач з такою електронною поштою вже існує.'
        );
      }
      formik.resetForm();
    },
  });

  return (
    <FormContainer>
      <RegisterHeader>Registration</RegisterHeader>
      <form onSubmit={formik.handleSubmit}>
        <FormInput
          id="name"
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.values.name !== '' || formik.errors.name ? (
          <NameError>{formik.errors.name}</NameError>
        ) : null}
        <FormInput
          id="city"
          name="city"
          placeholder="City, region"
          value={formik.values.city}
          onChange={formik.handleChange}
        />
        {formik.values.city !== '' || formik.errors.city ? (
          <CityError>{formik.errors.city}</CityError>
        ) : null}
        <FormInput
          id="phone"
          name="phone"
          type="phone"
          autoComplete="phone"
          placeholder="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.values.phone !== '' || formik.errors.phone ? (
          <PhoneError>{formik.errors.phone}</PhoneError>
        ) : null}
        <AuthButton color="primary" variant="contained" fullWidth type="submit">
          Register
        </AuthButton>
        <BackButton
          color="primary"
          variant="contained"
          fullWidth
          type="button"
          onClick={onSubmit}
        >
          Back
        </BackButton>
      </form>
      <FormText>
        Already have an account?
        <RegisterLink to="/login">Login</RegisterLink>
      </FormText>
    </FormContainer>
  );
}
