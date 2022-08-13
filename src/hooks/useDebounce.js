import { useState } from 'react';

const useDebounce = (func, delay = 500, immediate = false) => {
  const [timerId, setTimerId] = useState(null);

  return (args) => {
    if (timerId) {
      clearTimeout(timerId);
      console.log('bouncing');
    }

    setTimerId(
      setTimeout(() => {
        console.log('calling with delay: ', delay);
        func(args);
        setTimerId(null);
      }, delay)
    );
  };
};

export default useDebounce;
