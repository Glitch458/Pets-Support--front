import { useEffect } from 'react';
import { useDeletePetMutation } from 'redux/User/userPetsApi';

import Modal from 'components/Modal/Modal';
import { ModalButton } from 'components/Button/ModalBtn/ModalBtn';
import { handleBackdropClick, handleEscClick } from 'helpers/modalHelpers';

import { ConfirmText, ButtonContainer } from './ModalConfirm.styled';

const ModalConfirm = ({ toggleModal, id, text }) => {
  const [deletePet] = useDeletePetMutation();

  useEffect(() => {
    const ecsClose = handleEscClick(toggleModal);
    return () => ecsClose();
  }, [toggleModal]);

  return (
    <Modal onClick={e => handleBackdropClick(e, toggleModal)}>
      <ConfirmText>Are you sure?</ConfirmText>
      <ButtonContainer>
        <ModalButton onClick={() => toggleModal()}>Cancel</ModalButton>
        <ModalButton
          onClick={() => {
            deletePet(id);
            toggleModal();
          }}
        >
          {text}
        </ModalButton>
      </ButtonContainer>
    </Modal>
  );
};
export default ModalConfirm;
