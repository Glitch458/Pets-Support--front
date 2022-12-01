import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { toast } from 'react-toastify';

import { handleBackdropClick, handleEscClick } from 'helpers/modalHelpers';
import { useAddNoticeMutation } from 'redux/Notices/noticesApi';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import {
  Container,
  Title,
  InputCont,
  TextLabel,
  TextInput,
  ActionButtons,
  CloseButton,
  RadioGroup,
  RadioLabel,
  RadioInput,
  RadioButton,
} from './AddModalNotice.styled';

const validationSchema = Yup.object().shape({
  category: Yup.string().required('Оберіть категорію'),
  title: Yup.string()
    .required('Введіть заголовок')
    .min(2, 'Мінімум 2 символи')
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Заголовок містить лише літери і пробіли'
    )
    .trim()
    .max(48, 'Максимум 48 символів'),
  name: Yup.string()
    .trim()
    .min(2, 'Мінімум 2 символи')
    .required("Введіть ім'я тварини")
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Ім’я містить лише літери і пробіли'
    )
    .max(16, 'Максимум 16 символів'),
  birthday: Yup.date()
    .required('Оберіть дату народження')
    .max(new Date(), 'Дата має бути в минулому'),
  breed: Yup.string()
    .required('Введіть породу')
    .min(2, 'Мінімум 2 символи')
    .matches(/^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/, 'only letters')
    .trim()
    .max(24, 'Максимум 24 символи'),
  location: Yup.string().required('Введіть місце знаходження'),
  sex: Yup.string().required('Оберіть стать'),
  price: Yup.string().when('category', {
    is: category => category === 'sell',
    then: Yup.string()
      .required('Введіть ціну')
      .matches(/^[0-9][0-9]*$/, 'Тільки цифри'),
  }),
  comments: Yup.string()
    .trim()
    .required('Введіть опис')
    .min(8, 'Мінімум 8 символів')
    .max(120, 'Максимум 120 символів'),
});

const AddModalNotice = ({ handleModalToggle }) => {
  const [isFirstRegisterStep, setIsFirstRegisterStep] = useState(true);
  const { pathname } = useLocation();
  const [imagePreview, setImagePreview] = useState(null);
  const [addNotices] = useAddNoticeMutation();

  const moveNextRegistration = () => {
    isFirstRegisterStep
      ? setIsFirstRegisterStep(false)
      : setIsFirstRegisterStep(true);
  };

  const onImageChange = e => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
      formik.setFieldValue('image', e.currentTarget.files[0]);
    }
  };

  const categorySetByDefault = () => {
    const enterPoint = pathname.split('/').pop();
    return enterPoint === 'notices' ? 'sell' : enterPoint;
  };

  const formik = useFormik({
    initialValues: {
      category: categorySetByDefault(),
      title: '',
      name: '',
      birthday: `${new Date().toISOString().split('T')[0]}`,
      breed: '',
      sex: 'male',
      location: '',
      price: 1,
      image: '',
      comments: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      addNotices(values);
      handleModalToggle();
    },
  });

  // const handleFormSubmit = e => {
  //   e.preventDefault();
  //   if (isFirstRegisterStep) {
  //     moveNextRegistration();
  //     return;
  //   }
  //   await addNotices(formik.values);
  // };

  useEffect(() => {
    const ecsClose = handleEscClick(handleModalToggle);
    return () => ecsClose();
  }, [handleModalToggle]);

  return (
    <Modal onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <Container>
        <Title>Add pet</Title>
        <form
          onSubmit={e => {
            e.preventDefault();
            formik.handleSubmit();
            console.log(formik.handleSubmit);
          }}
        >
          {isFirstRegisterStep && (
            <>
              <RadioGroup>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="category"
                    value="lost/found"
                    id="lost/found"
                  />
                  <RadioButton>lost/found</RadioButton>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="category"
                    value="in good hands"
                    id="in good hands"
                  />
                  <RadioButton>in good hands</RadioButton>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="category"
                    value="sell"
                    id="sell"
                  />
                  <RadioButton>sell</RadioButton>
                </RadioLabel>
              </RadioGroup>
              <InputCont>
                <TextLabel>
                  Title of ad
                  <TextInput
                    onChange={formik.handleChange}
                    name="title"
                    placeholder="Type name"
                    required
                    minLength="2"
                    maxLength="48"
                    title="Length of title should be 2-16 letters"
                  />
                </TextLabel>
              </InputCont>
              <InputCont>
                <TextLabel>
                  Name pet
                  <TextInput
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    placeholder="Type name pet"
                    required
                    minLength="2"
                    maxLength="48"
                    title="Length of title should be 2-16 letters"
                  />
                </TextLabel>
              </InputCont>
              <InputCont>
                <TextLabel>
                  Date of birth
                  <TextInput
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
                    name="birthday"
                    placeholder="Type date of birth"
                    required
                    pattern="^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$"
                    title="Birthday should be in format dd.mm.yyyy"
                  />
                </TextLabel>
              </InputCont>
              <InputCont>
                <TextLabel>
                  Breed
                  <TextInput
                    value={formik.values.breed}
                    onChange={formik.handleChange}
                    name="breed"
                    placeholder="Type breed"
                    required
                    minLength="2"
                    maxLength="24"
                  />
                </TextLabel>
              </InputCont>
            </>
          )}
          {!isFirstRegisterStep && (
            <>
              {
                <>
                  <fieldset>
                    <legend>
                      The sex<span>*</span>:
                    </legend>
                    <div>
                      <div>
                        <input
                          id="malePet"
                          name="sex"
                          type="radio"
                          value="male"
                          checked={formik.values.sex === 'male'}
                          onChange={formik.handleChange}
                        />

                        <label htmlFor="malePet">Male</label>
                      </div>

                      <div>
                        <input
                          id="femalePet"
                          name="sex"
                          type="radio"
                          value="female"
                          checked={formik.values.sex === 'female'}
                          onChange={formik.handleChange}
                        />

                        <label htmlFor="femalePet">Female</label>
                      </div>
                    </div>
                    {formik.touched.sex && formik.errors.sex ? (
                      <p>{formik.errors.sex}</p>
                    ) : null}
                  </fieldset>

                  <TextLabel htmlFor="locationPet">
                    Місто, Область<span>*</span>:
                    {formik.values.location !== '' && formik.errors.location ? (
                      <p>{formik.errors.location}</p>
                    ) : null}
                    <input
                      id="location"
                      name="location"
                      type="text"
                      onChange={formik.handleChange}
                      placeholder="Введіть місце"
                    />
                  </TextLabel>

                  {formik.values.category === 'sell' ? (
                    <>
                      <TextLabel htmlFor="pricePet">
                        Price<span>*</span>:
                        {formik.values.price !== '' && formik.errors.price ? (
                          <p>{formik.errors.price}</p>
                        ) : null}
                      </TextLabel>

                      <input
                        id="pricePet"
                        name="price"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        placeholder="Введіть ціну"
                      />
                    </>
                  ) : null}

                  <fieldset>
                    <legend>Load the pet`s image:</legend>
                    {formik.values.image === '' ? (
                      <label htmlFor="image">
                        <svg
                          width="51"
                          height="51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25.5 49.166V25.5m0 0V1.833m0 23.667h23.667m-23.667 0H1.834"
                            stroke="#111"
                            strokeOpacity=".6"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          accept="image/png, image/gif, image/jpeg"
                          onChange={e => {
                            formik.handleChange(e);
                            onImageChange(e);
                          }}
                        />
                      </label>
                    ) : (
                      <div>
                        <img alt="pet" src={imagePreview} />
                      </div>
                    )}
                  </fieldset>

                  <TextLabel htmlFor="commentsAd">
                    Comments<span>*</span>
                    {formik.values.comments !== '' && formik.errors.comments ? (
                      <p>{formik.errors.comments}</p>
                    ) : null}
                  </TextLabel>
                  <textarea
                    id="commentsAd"
                    name="comments"
                    type="text"
                    maxLength="120"
                    rows={5}
                    onChange={formik.handleChange}
                    value={formik.values.comments}
                  />
                </>
              }
            </>
          )}

          <ActionButtons>
            {isFirstRegisterStep ? (
              <Button onClick={handleModalToggle}>Cancel</Button>
            ) : (
              <Button onClick={moveNextRegistration}>Back</Button>
            )}
            {isFirstRegisterStep ? (
              <Button onClick={moveNextRegistration}> Next</Button>
            ) : (
              <Button type="submit">Done</Button>
            )}
          </ActionButtons>
        </form>
        <CloseButton onClick={handleModalToggle}>X</CloseButton>
      </Container>
    </Modal>
  );
};

export default AddModalNotice;
