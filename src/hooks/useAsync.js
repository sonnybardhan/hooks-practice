import { useState, useEffect, useCallback } from 'react';

function useAsync(func, immediate = true) {
  // function useAsync(func) {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);

  const execute = useCallback(() => {
    setStatus('pending');
    setError(null);
    setValue(null);

    func()
      .then((res) => {
        setStatus('success');
        setError(null);
        setValue(res);
        // console.log('res: ', res);
      })
      .catch((err) => {
        setStatus('error');
        setError(err);
        setValue(null);
        // console.log('err: ', err);
      });
  }, [func]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, error, value };
}

export default useAsync;
