export const handleBackdropClick = (e, toggleModal) => {
  if (e.target !== e.currentTarget) {
    console.log('нажали в backDrop, нужно закрыть модалку');
  }
  // toggleModal();
};

export const handleKeyDown = toggleModal => {
  // const handleEscDown = e => {
  //   if (e.code === 'Escape') {
  //     console.log('нажали ESC, нужно закрыть модалку');
  //   }
  // toggleModal();
  // };
  // window.addEventListener('keydown', handleEscDown);
  // const clean = () => {
  //   window.removeEventListener('keydown', handleEscDown);
  // };
  // return clean;
};
