import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { handleBackdropClick, handleEscClick } from 'helpers/modalHelpers';
import { useEffect, useState } from 'react';
import {
  Container,
  Title,
  InputCont,
  TextLabel,
  TextInput,
  ActionButtons,
  CloseButton,
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
        <Title>Add pet</Title>
        <form onSubmit={handleFormSubmit}>
          {isFirstRegisterStep && (
            <>
              <InputCont></InputCont>
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
        </form>

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
        <CloseButton onClick={handleModalToggle}>X</CloseButton>
      </Container>
    </Modal>
  );
};

export default ModalAddPets;
