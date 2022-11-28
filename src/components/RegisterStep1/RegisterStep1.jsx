import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


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
            confirmPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (values.password === values.confirmPassword) {
                onSubmit({
                    email: values.email,
                    password: values.password
                })
                formik.resetForm();
            } else {
                alert('No password')
            }
        },
    });

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    autoComplete='password'
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Next
                </Button>
            </form>
        </div>
    );
}