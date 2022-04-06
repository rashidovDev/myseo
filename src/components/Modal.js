import React from 'react';

const Modal = ({ closeModal }) => {
  return (
    <div
      onClick={(e) => closeModal(e)}
      className='fixed top-0 left-0 bg-black bg-opacity-70 w-full h-full z-10 flex justify-center items-center'
    >
      <div className='mx-auto w-96 h-96 z-10 bg-red-50'>Modal</div>
    </div>
  );
};

export default Modal;
