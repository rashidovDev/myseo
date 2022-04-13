import React, { useState, useEffect } from 'react';

import { Link } from 'react-scroll';

const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });
  {
    return (
      show && (
        <button className='bg-red-600 fixed right-0 bottom-0'>
          <Link to='home' smooth={true}>
            BackTopBtn
          </Link>
          ;
        </button>
      )
    );
  }
};

export default BackTopBtn;
