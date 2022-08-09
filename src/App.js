import { useRef, useEffect, useState, useCallback } from 'react';
import './App.css';

function App() {
  const [hover, setHover] = useState(false);
  const hoverRef = useRef(null);

  const onHoverOver = useCallback(() => {
    setHover(true);
  }, []);

  const onHoverOut = useCallback(() => {
    setHover(false);
  }, []);

  useEffect(() => {
    hoverRef.current.addEventListener('mouseover', onHoverOver);

    hoverRef.current.addEventListener('mouseout', onHoverOut);

    return () => {
      hoverRef.current.removeEventListener('mouseover', onHoverOver);
      hoverRef.current.removeEventListener('mouseout', onHoverOut);
    };
  }, []);

  return (
    <div className='App'>
      <h1>useHover Demo</h1>
      <div className={`block ${hover && 'hover'}`} ref={hoverRef}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam beatae
        accusamus facere facilis impedit quidem, a odio odit ipsum laboriosam.
      </div>
      <div className='block'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam beatae
        accusamus facere facilis impedit quidem, a odio odit ipsum laboriosam.
      </div>
      <div className='block'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam beatae
        accusamus facere facilis impedit quidem, a odio odit ipsum laboriosam.
      </div>
    </div>
  );
}

export default App;
