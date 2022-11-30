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
} from './AddModalNotice.styled';

// const initialState = {
//   category: '',
//   title: '',
//   name: '',
//   birthday: '',
//   breed: '',
//   sex: '',
//   place: '',
//   price: '',
//   photoURL: '',
//   comments: '',
//   owner: '',
// };

// const publicCategories = [
//   { sell: 'sell' },
//   { 'lost/found': 'lost-found' },
//   { 'in good hands': 'for-free' },
// ];

const AddModalNotice = ({ handleModalToggle }) => {
  // const [pet, setPet] = useState(initialState);
  const [isFirstRegisterStep, setIsFirstRegisterStep] = useState(true);

  const moveNextRegistration = () => {
    isFirstRegisterStep
      ? setIsFirstRegisterStep(false)
      : setIsFirstRegisterStep(true);
  };

  const handleInputChange = e => {
    console.log(e.target.value);
    // console.log(name);
    // switch (name) {
    //   case 'category':
    //     setPet(value)
    // }
  };

  const handleFormSubmit = e => {
    handleModalToggle();
  };

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
              <InputCont>
                <TextLabel>
                  Name pet
                  <TextInput
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
          {!isFirstRegisterStep && <>{/* ВЕРСТКА ВТОРОГО ЭТАПА */}</>}

          <ActionButtons>
            {isFirstRegisterStep ? (
              <Button onClick={handleModalToggle}>Cancel</Button>
            ) : (
              <Button onClick={moveNextRegistration}>Back</Button>
            )}
            {isFirstRegisterStep ? (
              <Button onClick={moveNextRegistration}>Next</Button>
            ) : (
              <Button onClick={handleFormSubmit}>Done</Button>
            )}
          </ActionButtons>
        </form>
        <CloseButton onClick={handleModalToggle}>X</CloseButton>
      </Container>
    </Modal>
  );
};

export default AddModalNotice;
