import useAsync from './hooks/useAsync';

const URL = `https://jsonplaceholder.typicode.com/todos?_limit=10`;

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve(`done! ${rand}`);
      }
      reject(`error! ${rand}`);
    }, 1000);
  });
};

function App() {
  const { execute, status, error, value } = useAsync(fetchData, false);

  return (
    <div className='App'>
      <h1>useAsync Demo</h1>
      <div className='data-container'>
        {status === 'success' && <div>{value}</div>}
        {status === 'pending' && <div>Pending ... </div>}
        {status === 'error' && <div>Oops! {error}</div>}
      </div>
      <button onClick={execute} disabled={status === 'pending'}>
        Fetch
      </button>
    </div>
  );
}

export default App;
