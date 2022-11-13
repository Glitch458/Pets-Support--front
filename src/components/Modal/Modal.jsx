// import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { handleBackdropClick, handleKeyDown } from '../../helpers/modalHelpers';

const { Backdrop, Container } = require('./Modal.styled');

const modalRoot = document.querySelector('#modal-root');

// useEffect(() => {
//   const cleanup = handleKeyDown(toggleModal);
//   return () => cleanup();
// }, [toggleModal]);

const Modal = ({ children }) => {
  return createPortal(
    <Backdrop onClick={e => handleBackdropClick(e)}>
      <Container>{children}</Container>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
