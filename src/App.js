import { useState, useEffect } from 'react';
import './App.css';
import useDebounce from './hooks/useDebounce';

const someAsyncMethod = (msg) => {
  console.log('async message: ', msg);
};

function App() {
  const [value, setValue] = useState('');
  const debouncedAsync = useDebounce(someAsyncMethod, 2000);

  useEffect(() => {
    if (value) {
      debouncedAsync(value);
    }
  }, [value]);

  return (
    <div className='App'>
      <h1>useDebounce Demo</h1>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
