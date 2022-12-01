import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { handleBackdropClick, handleEscClick } from 'helpers/modalHelpers';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Container,
  Title,
  InputCont,
  InputContTextArea,
  TextLabel,
  TextInput,
  DateInput,
  PhotoPetInput,
  PhotoAddContainer,
  ImageInputWrapper,
  ImageTitle,
  AddedIamge,
  TextAreaInput,
  ActionButtons,
  CloseButton,
  NameError,
  BirthdayError,
  BreedError,
  CommentError,
} from './ModalAddPets.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required('Це поле не може бути порожнім')
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Тільки літери та пробіли'
    )
    .min(2, "Ім'я містить мінімум 2 символи")
    .max(16, "Ім'я містить максимум 16 символів"),
  birthday: Yup.date().required('Це поле не може бути порожнім'),
  breed: Yup.string()
    .required('Це поле не може бути порожнім')
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Тільки літери та пробіли'
    )
    .min(2, 'Порода містить мінімум 2 символи')
    .max(16, 'Порода містить максимум 16 символів'),
  comments: Yup.string()
    .required('Це поле не може бути порожнім')
    .min(8, 'Коментар містить мінімум 8 символів')
    .max(120, 'Коментар містить максимум 120 символів'),
});

const ModalAddPets = ({ handleModalToggle }) => {
  const [isFirstRegisterStep, setIsFirstRegisterStep] = useState(true);
  const [image, setImage] = useState(null);

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
      image: '',
      comments: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      if (values.comments) {
        console.log(values);
        handleModalToggle();
        toast.success(`Вашого нового питомця ${values.name} успішно додано`);
      }
    },
  });

  const onImageChange = e => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      formik.setFieldValue('image', e.currentTarget.files[0]);
    }
  };

  useEffect(() => {
    const ecsClose = handleEscClick(handleModalToggle);
    return () => ecsClose();
  }, [handleModalToggle]);

  return (
    <Modal onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <Container>
        <Title>Add pet</Title>
        <form onSubmit={formik.handleSubmit}>
          {isFirstRegisterStep && (
            <>
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
              <InputCont>
                <TextLabel>Breed</TextLabel>
                <TextInput
                  id="breed"
                  name="breed"
                  placeholder="Type breed"
                  value={formik.values.breed}
                  onChange={formik.handleChange}
                />
              </InputCont>
              {formik.values.breed !== '' || formik.errors.breed ? (
                <BreedError>{formik.errors.breed}</BreedError>
              ) : null}
            </>
          )}
          {!isFirstRegisterStep && (
            <>
              <ImageInputWrapper>
                <ImageTitle>Add photo and some comments</ImageTitle>
                {formik.values.image === '' ? (
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
                      name="image"
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
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
            </>
          )}
          <ActionButtons>
            {isFirstRegisterStep ? (
              <Button onClick={handleModalToggle}>Cancel</Button>
            ) : (
              <Button onClick={moveNextRegistration}>Back</Button>
            )}
            {isFirstRegisterStep ? (
              <Button onClick={moveNextRegistration}>Next</Button>
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

export default ModalAddPets;
