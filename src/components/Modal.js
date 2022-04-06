import React, { useRef } from 'react';

const Modal = ({ setShowModal }) => {
  const ref = useRef();
  return (
    <div
      ref={ref}
      className='fixed top-0 left-0 bg-black bg-opacity-70 w-full h-full z-10 flex justify-center items-center'
    >
      <div
        onClick={() => setShowModal(false)}
        className='mx-auto w-96 h-96 z-20 bg-yellow-400'
      >
        Modal
      </div>
    </div>
  );
};

export default Modal;
