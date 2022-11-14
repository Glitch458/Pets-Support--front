import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

export const ModalAddPets = () => {
  return (
    <Modal>
      <div>
        <h3>Add pet</h3>
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
        <Button>Next</Button>
        <Button>Cancel</Button>
      </div>
    </Modal>
  );
};

export default ModalAddPets;
