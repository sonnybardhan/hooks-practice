import { useEffect } from 'react';

// Hook
function useOnClickOutside2(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      console.log(ref);
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside2;
