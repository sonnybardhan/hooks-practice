import { useState, useEffect } from 'react';

const useOnClickOutside = (ref) => {
  const [clickedOutside, setClickedOutside] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target !== ref.current) {
        setClickedOutside(true);
      } else {
        setClickedOutside(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [clickedOutside, ref]);

  return [clickedOutside];
};

export default useOnClickOutside;
