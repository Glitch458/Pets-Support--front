import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { handleBackdropClick, handleEscClick } from 'helpers/modalHelpers';
import { useEffect } from 'react';
import {
  Container,
  Title,
  ActionButtons,
  CloseButton,
} from './ModalAddPets.styled';

export const ModalAddPets = ({ handleModalToggle }) => {
  useEffect(() => {
    const ecsClose = handleEscClick(handleModalToggle);
    return () => ecsClose();
  }, [handleModalToggle]);

  return (
    <Modal onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <Container>
        <Title>Add pet</Title>
        <div>
          <label>
            name pet
            <input name="name pet" />
          </label>
        </div>
        <div>
          <label>
            Date of birth
            <input name="Date of birth" />
          </label>
        </div>
        <div>
          <label>
            Breed
            <input name="Breed" />
          </label>
        </div>

        <ActionButtons>
          <Button>Next</Button>
          <Button>Cancel</Button>
        </ActionButtons>
        <CloseButton onClick={handleModalToggle}>X</CloseButton>
      </Container>
    </Modal>
  );
};

export default ModalAddPets;
