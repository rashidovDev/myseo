import React, { useEffect, useState } from 'react';

// import components
import TestiSlider from './TestiSlider';

// import react intersection observer
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  });

  return (
    <section ref={ref} id='testimonials' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
            What other people say
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <TestiSlider isAnimating={isAnimating} />
      </div>
    </section>
  );
};

export default Testimonials;
