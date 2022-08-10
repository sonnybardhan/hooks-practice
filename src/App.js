import { useEffect, useState } from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [task, setTask] = useState('');
  const [getTasks, saveTasks] = useLocalStorage('myTasks');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTasks([...getTasks, task]);
    setTask('');
  };

  console.log(getTasks);

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
        {getTasks &&
          getTasks.map((task) => <li key={Math.random()}>{task}</li>)}
      </div>
    </div>
  );
}

export default App;
