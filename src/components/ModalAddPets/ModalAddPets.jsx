import { useEffect, useState } from 'react';
import { usePostPetMutation } from 'redux/User/userPetsApi';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { handleBackdropClick, handleEscClick } from 'helpers/modalHelpers';
import Modal from 'components/Modal/Modal';
import { CloseBtnn } from 'components/Button/CloseButton/CloseButton';
import { Button } from 'components/Button/Button';

import {
  Container,
  Title,
  FirstForm,
  SecondForm,
  InputCont,
  InputContBreed,
  InputContTextArea,
  TextLabel,
  TextInput,
  DateInput,
  PhotoPetInput,
  PhotoAddContainer,
  ImageInputWrapper,
  ImageTitle,
  AddedImage,
  TextAreaInput,
  ActionButtons,
  CloseBtn,
  NameError,
  BirthdayError,
  BreedError,
  CommentError,
} from './ModalAddPets.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required('Це поле не може бути порожнім')

    // .matches(
    //   /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
    //   'Тільки літери та пробіли'
    // )
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Only letters and spaces'
    )
    .min(2, "Ім'я містить мінімум 2 символи")
    .max(16, "Ім'я містить максимум 16 символів"),
  // birthday: Yup.date().required('Це поле не може бути порожнім'),
  birthday: Yup.date().required('This field cannot be empty'),

  breed: Yup.string()
    // .required('Це поле не може бути порожнім')
    .required('This field cannot be empty')
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Тільки літери та пробіли'
    )
    .min(2, 'Порода містить мінімум 2 символи')
    .max(16, 'Порода містить максимум 16 символів'),
  comments: Yup.string()
    // .required('Це поле не може бути порожнім')
    .required('This field cannot be empty')

    // .min(8, 'Коментар містить мінімум 8 символів')
    .min(8, 'The comment contains a minimum of 8 characters')

    // .max(120, 'Коментар містить максимум 120 символів'),
    .max(120, 'A comment contains a maximum of 120 characters'),
});

const ModalAddPets = ({ handleModalToggle }) => {
  const [isFirstRegisterStep, setIsFirstRegisterStep] = useState(true);
  const [image, setImage] = useState(null);
  const [addUserPet] = usePostPetMutation();

  const moveNextRegistration = () => {
    if (formik.values.name && formik.values.birthday && formik.values.breed) {
      isFirstRegisterStep
        ? setIsFirstRegisterStep(false)
        : setIsFirstRegisterStep(true);
    } else {
      toast.error('Щось пішло не так. Можливо ви не заповнили усі поля?');
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      birthday: '',
      breed: '',
      petURL: null,
      comments: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const data = new FormData();
      data.append('name', values.name);
      data.append('birthday', values.birthday);
      data.append('breed', values.breed);
      data.append('petURL', values.petURL);
      data.append('comments', values.comments);
      addUserPet(data);
      handleModalToggle();
      toast.success(`Your pet ${values.name} is added to your collection`);
    },
  });

  const onImageChange = e => {
    const { files } = e.currentTarget;
    if (files) {
      setImage(URL.createObjectURL(files[0]));
      formik.setFieldValue('petURL', files[0]);
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
              <InputCont>
                <TextLabel>Name pet</TextLabel>
                <TextInput
                  id="name"
                  name="name"
                  placeholder="Type name pet"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </InputCont>
              {formik.values.name !== '' || formik.errors.name ? (
                <NameError>{formik.errors.name}</NameError>
              ) : null}
              <InputCont>
                <TextLabel>Date of birth</TextLabel>
                <DateInput
                  id="birthday"
                  name="birthday"
                  type="date"
                  placeholder="Type date of birth"
                  value={formik.values.birthday}
                  onChange={formik.handleChange}
                />
              </InputCont>
              {formik.values.birthday !== '' || formik.errors.birthday ? (
                <BirthdayError>{formik.errors.birthday}</BirthdayError>
              ) : null}
              <InputContBreed>
                <TextLabel>Breed</TextLabel>
                <TextInput
                  id="breed"
                  name="breed"
                  placeholder="Type breed"
                  value={formik.values.breed}
                  onChange={formik.handleChange}
                />
              </InputContBreed>
              {formik.values.breed !== '' || formik.errors.breed ? (
                <BreedError>{formik.errors.breed}</BreedError>
              ) : null}
            </FirstForm>
          )}
          {!isFirstRegisterStep && (
            <SecondForm>
              <ImageInputWrapper>
                <ImageTitle>Add photo and some comments</ImageTitle>
                {formik.values.petURL === null ? (
                  <PhotoAddContainer htmlFor="imagePet">
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
                    <PhotoPetInput
                      id="imagePet"
                      name="petURL"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={e => {
                        formik.handleChange(e);
                        onImageChange(e);
                      }}
                    />
                  </PhotoAddContainer>
                ) : (
                  <AddedImage>
                    <img alt="pet" src={image} />
                  </AddedImage>
                )}
              </ImageInputWrapper>
              <InputContTextArea>
                <TextLabel>Comments</TextLabel>
                <TextAreaInput
                  id="comments"
                  name="comments"
                  placeholder="Type comments"
                  value={formik.values.comments}
                  onChange={formik.handleChange}
                />
              </InputContTextArea>
              {formik.values.comments !== '' || formik.errors.comments ? (
                <CommentError>{formik.errors.comments}</CommentError>
              ) : null}
            </SecondForm>
          )}
          <ActionButtons>
            {isFirstRegisterStep ? (
              <Button onClick={moveNextRegistration}> Next</Button>
            ) : (
              <Button type="submit">Done</Button>
            )}
            {isFirstRegisterStep ? (
              <Button onClick={handleModalToggle}>Cancel</Button>
            ) : (
              <Button onClick={moveNextRegistration}>Back</Button>
            )}
          </ActionButtons>
        </form>
        <CloseBtnn onClick={handleModalToggle}></CloseBtnn>
      </Container>
    </Modal>
  );
};

export default ModalAddPets;
