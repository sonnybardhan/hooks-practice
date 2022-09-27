import { useCallback, useRef, useState } from 'react';
import './App.css';
import useOnClickOutside from './hooks/useOnClickOutside';

function App() {
  const [btnClicked, setBtnClicked] = useState(false);
  const btnRef = useRef();

  const toggleClick = useCallback(() => setBtnClicked(false), [setBtnClicked]);

  useOnClickOutside(btnRef, toggleClick);

  return (
    <div
      className='App'
      style={{ backgroundColor: 'lightpink', padding: '1rem' }}
    >
      <div
        className=''
        style={{ backgroundColor: 'lightblue', padding: '1rem' }}
      >
        <button
          ref={btnRef}
          style={{
            padding: '1rem',
            backgroundColor: btnClicked ? 'green' : null,
          }}
          onClick={() => setBtnClicked(true)}
        >
          test
        </button>
      </div>
    </div>
  );
}

export default App;
