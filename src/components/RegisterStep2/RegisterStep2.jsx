import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/Auth/auth-operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';


const validationSchema = Yup.object({
    name: Yup.string()
        .required('Це поле не може бути порожнім')
        .matches(/^[а-яА-ЯїЇіІЁёa-zA-Z]+$/, 'Тільки літери'),
    city: Yup.string()
        .required('Це поле не може бути порожнім')
        .matches(
            /[A-Z][a-z]+, [A-Z][a-z]*/,
            'Введіть в форматі: місто, область'
        ),
    phone: Yup.string()
        .required('Це поле не може бути порожнім')
        .matches(/^\+380\d{9}$/, 'Неправильний номер телефону')
});

export default function SignUpStep1({ data, onSubmit }) {

    const { email, password } = data;
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            city: '',
            phone: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
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
                toast.error('Щось пішло не так. Можливо користувач з такою електронною поштою вже існує.');
            }
            formik.resetForm();
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    fullWidth
                    id="city"
                    name="city"
                    label="City, region"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                />
                <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone"
                    type="phone"
                    autoComplete='phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Register
                </Button>
                <Button color="primary" variant="contained" fullWidth type="button" onClick={onSubmit}>
                    Back
                </Button>
            </form>
        </div>
    );
}