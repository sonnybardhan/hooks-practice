import React, { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current.contains(e.target)) {
        console.log('clicked outside');
        handler();
      } else {
        console.log('clicked inside');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, handler]);

  return <div>onClickOutside</div>;
};

export default useOnClickOutside;
