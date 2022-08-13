import { useRef, useEffect } from 'react';
import './App.css';
import useOnClickOutside from './hooks/useOnClickOutside';

function App() {
  const targetRef = useRef(null);
  const [clickedOutside] = useOnClickOutside(targetRef);

  useEffect(() => {
    console.log('clicked outside? ', clickedOutside);
  }, [clickedOutside]);

  return (
    <div className='App'>
      <h1>useOnClickOutside Demo</h1>
      <div className='container'>
        <div className='target' ref={targetRef}>
          Hello there
        </div>
      </div>
    </div>
  );
}

export default App;
