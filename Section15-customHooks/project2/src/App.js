import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/useHttp';

function App() {
  const [tasks, setTasks] = useState([]);

  const {isLoading, error, sendRequest: fetchTasks} = useHttp();


  useEffect(() => {

    const transformTask = (taskObj) => {
      const loadedTask = [];
      for (const taskKey in taskObj) {
        loadedTask.push({
          id: taskKey,
          text: taskObj[taskKey].text
        })
      } 
      setTasks(loadedTask)
    }

    fetchTasks({url: 'https://react-http-92073-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'},
    transformTask
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
