import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { handleBackdropClick, handleEscClick } from 'helpers/modalHelpers';
import { useAddNoticeMutation } from 'redux/Notices/noticesApi';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import {
  Container,
  CloseBtn,
  Title,
  FirstForm,
  UserComment,
  InputCont,
  InputContTextArea,
  TextAreaInput,
  TextLabel,
  TextInput,
  ActionButtons,
  RadioGroup,
  RadioLabel,
  RadioInput,
  RadioButton,
  DateInput,
  SexFormBox,
  BoxQuestion,
  Asterisk,
  InputRadio,
  SexLabel,
  PhotoPetInput,
  PhotoAddContainer,
  ImageInputWrapper,
  ImageTitle,
  AddedIamge,
  ModalBtn,
} from './AddModalNotice.styled';
import { Female } from '@mui/icons-material';

const validationSchema = Yup.object({
  category: Yup.string().required('Choose category'),
  title: Yup.string()
    .required('Title is required')
    .min(2, 'Min 2 characters')
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Must contain only cahracters and spaces'
    )
    .trim()
    .max(48, '48 characters max'),
  name: Yup.string()
    .trim()
    .min(2, 'Min 2 characters')
    .required('Name is required')
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Must contain only cahracters and spaces'
    )
    .max(16, '16 characters max'),
  birthday: Yup.date()
    .required('Choose date of birth')
    .max(new Date(), 'Date must be in the past'),
  breed: Yup.string()
    .required('Breed is required')
    .min(2, 'Min 2 characters')
    .matches(/^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/, 'only letters')
    .trim()
    .max(24, '24 characters max'),
  location: Yup.string().required('Type the location'),
  sex: Yup.string().required('Choose sex'),
  price: Yup.string().when('category', {
    is: category => category === 'sell',
    then: Yup.string()
      .required('Set price')
      .matches(/^[0-9][0-9]*$/, 'Numbers only'),
  }),
  comments: Yup.string()
    .trim()
    .required('Type comments')
    .min(8, 'Min 8 characters')
    .max(120, '120 characters max'),
});

const AddModalNotice = ({ handleModalToggle }) => {
  const [isFirstRegisterStep, setIsFirstRegisterStep] = useState(true);
  const { pathname } = useLocation();
  const [image, setImage] = useState(null);
  const [addNotices] = useAddNoticeMutation();

  const moveNextRegistration = () => {
    isFirstRegisterStep
      ? setIsFirstRegisterStep(false)
      : setIsFirstRegisterStep(true);
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
      birthday: '',
      breed: '',
      sex: '',
      location: '',
      price: 1,
      photoURL: null,
      comments: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const data = new FormData();
      data.append('category', values.category);
      data.append('title', values.title);
      data.append('name', values.name);
      data.append('birthday', values.birthday);
      data.append('breed', values.breed);
      data.append('sex', values.sex);
      data.append('location', values.location);
      data.append('price', values.price);
      data.append('comments', values.comments);
      data.append('photoURL', values.photoURL);
      addNotices(data);
      handleModalToggle();
      toast.success(`Your pet ${values.name} has been added to notices`);
    },
  });

  const onImageChange = e => {
    const { files } = e.currentTarget;
    if (files) {
      setImage(URL.createObjectURL(files[0]));
      formik.setFieldValue('photoURL', files[0]);
    }
  };
  useEffect(() => {
    const ecsClose = handleEscClick(handleModalToggle);
    return () => ecsClose();
  }, [handleModalToggle]);

  return (
    <Modal onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <Container>
        <CloseBtn onClick={handleModalToggle} />
        <Title>Add pet</Title>
        <form
          encType="multipart/form-data"
          onSubmit={e => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          {isFirstRegisterStep && (
            <FirstForm>
              <RadioGroup onChange={formik.handleChange} required>
                <RadioLabel>
                  <RadioInput
                    defaultChecked={
                      formik.values.category === 'lost-found' ? true : false
                    }
                    type="radio"
                    name="category"
                    value="lost/found"
                    id="lost/found"
                  />
                  <RadioButton>lost/found</RadioButton>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    defaultChecked={
                      formik.values.category === 'for-free' ? true : false
                    }
                    type="radio"
                    name="category"
                    value="in good hands"
                    id="in good hands"
                  />
                  <RadioButton>in good hands</RadioButton>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    defaultChecked={
                      formik.values.category === 'sell' ? true : false
                    }
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
                  Title of ad<Asterisk>*</Asterisk>
                  <TextInput
                    value={formik.values.title}
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
                  <DateInput
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
                    name="birthday"
                    type="date"
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
            </FirstForm>
          )}
          {!isFirstRegisterStep && (
            <>
              <SexFormBox>
                <BoxQuestion>
                  The sex<Asterisk>*</Asterisk>:
                </BoxQuestion>
                {/* <div> */}
                {/* <div> */}
                <InputRadio
                  id="malePet"
                  name="sex"
                  type="radio"
                  value="male"
                  checked={formik.values.sex === 'male'}
                  onChange={formik.handleChange}
                />

                <SexLabel htmlFor="malePet">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>male</title>
                    <path
                      fill="#23c2ef"
                      d="M20.679 1.6c-0.884 0-1.6 0.716-1.6 1.6v0.81c0 0.884 0.716 1.6 1.6 1.6h2.804l-5.805 5.73c-1.629-1.047-3.57-1.655-5.655-1.655-5.756 0-10.423 4.637-10.423 10.357s4.667 10.358 10.423 10.358c5.756 0 10.422-4.638 10.422-10.358 0-2.174-0.674-4.192-1.826-5.858l5.707-5.672v2.738c0 0.884 0.716 1.6 1.6 1.6h0.835c0.884 0 1.6-0.716 1.602-1.6 0.007-2.602 0.027-5.453 0.033-8.051 0.002-0.884-0.714-1.599-1.598-1.599h-8.121zM12.023 13.854c3.439 0 6.227 2.77 6.227 6.188s-2.788 6.189-6.227 6.189c-3.439 0-6.228-2.771-6.228-6.189s2.789-6.188 6.228-6.188z"
                    ></path>
                  </svg>
                  Male
                </SexLabel>
                {/* </div> */}
                {/* <div> */}
                <SexLabel htmlFor="femalePet">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>female</title>
                    <path
                      fill="#ff8787"
                      d="M16 0c-5.676 0-10.279 4.603-10.279 10.279 0 4.546 2.953 8.403 7.044 9.759 0.728 0.241 1.277 0.887 1.277 1.654v0.388c0 0.884-0.716 1.6-1.6 1.6h-1.208c-0.884 0-1.6 0.716-1.6 1.6v0.713c0 0.884 0.716 1.6 1.6 1.6h1.208c0.884 0 1.6 0.716 1.6 1.6v1.206c0 0.884 0.716 1.6 1.6 1.6h0.713c0.884 0 1.6-0.716 1.6-1.6v-1.206c0-0.884 0.716-1.6 1.6-1.6h1.208c0.884 0 1.6-0.716 1.6-1.6v-0.713c0-0.884-0.716-1.6-1.6-1.6h-1.208c-0.884 0-1.6-0.716-1.6-1.6v-1.709c4.741-0.914 8.323-5.085 8.323-10.093 0-5.676-4.603-10.279-10.279-10.279zM16 4.087c3.42 0 6.192 2.772 6.192 6.192s-2.772 6.192-6.192 6.192-6.192-2.772-6.192-6.192c0-3.419 2.772-6.192 6.192-6.192z"
                    ></path>
                  </svg>
                  Female
                </SexLabel>
                {/* </div> */}
                {/* </div> */}
                {/* {formik.touched.sex && formik.errors.sex ? (
                  <p>{formik.errors.sex}</p>
                ) : null} */}
              </SexFormBox>
              <InputCont>
                <TextLabel htmlFor="locationPet">
                  City, Region<span>*</span>:
                  {formik.values.location !== '' && formik.errors.location ? (
                    <p>{formik.errors.location}</p>
                  ) : null}
                  <TextInput
                    value={formik.values.location}
                    id="location"
                    name="location"
                    type="text"
                    onChange={formik.handleChange}
                    placeholder="Введіть місце"
                  />
                </TextLabel>
              </InputCont>
              <InputCont>
                {formik.values.category === 'sell' && (
                  <TextLabel htmlFor="pricePet">
                    Price<Asterisk>*</Asterisk>:
                    {formik.values.price !== '' && formik.errors.price ? (
                      <p>{formik.errors.price}</p>
                    ) : null}
                    <TextInput
                      id="pricePet"
                      name="price"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                      placeholder="Введіть ціну"
                    />
                  </TextLabel>
                )}
              </InputCont>

              <ImageInputWrapper>
                <ImageTitle>Load the pet's image:</ImageTitle>
                {formik.values.photoURL === null ? (
                  <PhotoAddContainer htmlFor="imagePet">
                    <svg
                      width="48"
                      height="48"
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
                    <PhotoPetInput
                      id="imagePet"
                      name="photoURL"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={e => {
                        formik.handleChange(e);
                        onImageChange(e);
                      }}
                    />
                  </PhotoAddContainer>
                ) : (
                  <AddedIamge>
                    <img alt="pet" src={image} />
                  </AddedIamge>
                )}
              </ImageInputWrapper>
              <InputContTextArea>
                <TextLabel htmlFor="commentsAd">
                  Comments<Asterisk>*</Asterisk>
                  {formik.values.comments !== '' && formik.errors.comments ? (
                    <p>{formik.errors.comments}</p>
                  ) : null}
                </TextLabel>
                <TextAreaInput
                  id="commentsAd"
                  name="comments"
                  type="text"
                  maxLength="120"
                  rows={5}
                  onChange={formik.handleChange}
                  value={formik.values.comments}
                />
              </InputContTextArea>
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
      </Container>
    </Modal>
  );
};

export default AddModalNotice;
