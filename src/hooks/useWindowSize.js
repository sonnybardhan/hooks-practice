import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function getWindowSize(e) {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    }

    window.addEventListener('resize', getWindowSize);

    return () => window.removeEventListener('resize', getWindowSize);
  }, []);

  return { width: windowSize.width, height: windowSize.height };
}

export default useWindowSize;
