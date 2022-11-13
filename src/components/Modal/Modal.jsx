// import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { handleBackdropClick, handleKeyDown } from '../../helpers/modalHelpers';

const { Backdrop, ModalWindow } = require('./Modal.styled');

const modalRoot = document.querySelector('#modal-root');

// useEffect(() => {
//   const cleanup = handleKeyDown(toggleModal);
//   return () => cleanup();
// }, [toggleModal]);

const Modal = ({ children }) => {
  return createPortal(
    <Backdrop onClick={e => handleBackdropClick(e)}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
