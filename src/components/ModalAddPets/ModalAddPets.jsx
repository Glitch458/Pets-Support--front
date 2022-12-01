import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { handleBackdropClick, handleEscClick } from 'helpers/modalHelpers';
import { useEffect, useState } from 'react';
import {
  Container,
  WrapForm,
  Title,
  InputCont,
  TextLabel,
  TextInput,
  ActionButtons,
  CloseBtn,
  ModalBtn,
} from './ModalAddPets.styled';

const ModalAddPets = ({ handleModalToggle }) => {
  // const [upload, setUpload] = useState();
  // const [uploadUrl, setUploadUrl] = useState([]);
  const [isFirstRegisterStep, setIsFirstRegisterStep] = useState(true);

  const moveNextRegistration = () => {
    isFirstRegisterStep
      ? setIsFirstRegisterStep(false)
      : setIsFirstRegisterStep(true);
  };

  // const initialValues = {
  //   title: '',
  //   name: '',
  //   birthday: '',
  //   breed: '',
  //   comments: '',
  // };
  const handleFormSubmit = e => {};

  useEffect(() => {
    const ecsClose = handleEscClick(handleModalToggle);
    return () => ecsClose();
  }, [handleModalToggle]);

  return (
    <Modal onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <Container>
        <CloseBtn onClick={handleModalToggle} />
        <Title>Add pet</Title>
        <WrapForm onSubmit={handleFormSubmit}>
          {isFirstRegisterStep && (
            <>
              <InputCont>
                <TextLabel>Name pet</TextLabel>
                <TextInput
                  id="name"
                  name="name"
                  placeholder="Type name pet"
                  required
                  minLength="2"
                  maxLength="48"
                  title="Length of title should be 2-16 letters"
                />
              </InputCont>
              <InputCont>
                <TextLabel>Date of birth</TextLabel>
                <TextInput
                  id="birthday"
                  name="birthday"
                  placeholder="Type date of birth"
                  required
                  pattern="^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$"
                  title="Birthday should be in format dd.mm.yyyy"
                />
              </InputCont>
              <InputCont>
                <TextLabel>Breed</TextLabel>
                <TextInput
                  id="breed"
                  name="breed"
                  placeholder="Type breed"
                  required
                  minLength="2"
                  maxLength="24"
                />
              </InputCont>
            </>
          )}
          {!isFirstRegisterStep && <></>}
        </WrapForm>

        <ActionButtons>
          {isFirstRegisterStep ? (
            <ModalBtn onClick={handleModalToggle}>Cancel</ModalBtn>
          ) : (
            <ModalBtn onClick={moveNextRegistration}>Back</ModalBtn>
          )}
          {isFirstRegisterStep ? (
            <ModalBtn onClick={moveNextRegistration}>Next</ModalBtn>
          ) : (
            <ModalBtn type="submit">Done</ModalBtn>
          )}
        </ActionButtons>
      </Container>
    </Modal>
  );
};

export default ModalAddPets;
