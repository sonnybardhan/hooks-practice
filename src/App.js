import './App.css';
import useHover from './hooks/useHover';

function App() {
  const [hoverRef1, hovered1] = useHover();
  const [hoverRef2, hovered2] = useHover();
  const [hoverRef3, hovered3] = useHover();

  return (
    <div className='App'>
      <h1>useHover Demo</h1>
      <div className={`block ${hovered1 && 'hover'}`} ref={hoverRef1}>
        xxx
      </div>
      <div className={`block ${hovered2 && 'hover'}`} ref={hoverRef2}>
        yyy
      </div>
      <div className={`block ${hovered3 && 'hover'}`} ref={hoverRef3}>
        zzz
      </div>
    </div>
  );
}

export default App;
