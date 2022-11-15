import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import {
  Container,
  Title,
  ActionButtons,
  CloseButton,
} from './ModalAddPets.styled';

export const ModalAddPets = () => {
  return (
    <Modal>
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
        <CloseButton>X</CloseButton>
      </Container>
    </Modal>
  );
};

export default ModalAddPets;
