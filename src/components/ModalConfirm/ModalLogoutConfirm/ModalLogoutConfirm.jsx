import { useEffect } from 'react';

import { useLogoutMutation } from 'redux/Auth/authApi';

import Modal from 'components/Modal/Modal';
import { ModalButton } from 'components/Button/ModalBtn/ModalBtn';
import { handleBackdropClick, handleEscClick } from 'helpers/modalHelpers';

import { ConfirmText, ButtonContainer } from '../ModalConfirm.styled';

const ModalLogoutConfirm = ({ toggleModal, text }) => {
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
  };

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
            handleLogout();
            toggleModal();
          }}
        >
          {text}
        </ModalButton>
      </ButtonContainer>
    </Modal>
  );
};
export default ModalLogoutConfirm;
