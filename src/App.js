import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');

  const [tasks, setTasks] = useState(() =>
    JSON.parse(localStorage.getItem('myTasks'))
  );

  useEffect(() => {
    console.log('running');
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <div className='App'>
      <h1>useLocalStorage Demo</h1>
      <div className='input-container'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input type='submit' />
        </form>
      </div>
      <div className='tasks-container'>
        {tasks && tasks.map((task) => <li key={Math.random()}>{task}</li>)}
      </div>
    </div>
  );
}

export default App;
