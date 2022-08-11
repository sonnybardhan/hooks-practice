import useWindowSize from './hooks/useWindowSize';

function App() {
  const { height, width } = useWindowSize();

  return (
    <div className='App'>
      <h1>useWindowSize Demo</h1>
      <div className=''>height: {height}</div>
      <div className=''>width: {width}</div>
    </div>
  );
}

export default App;
