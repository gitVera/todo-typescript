import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import { mergeTasks, omitTasks } from './actions';
import { selectAllTasks } from './selectors';
import cuid from 'cuid';

type TodoItem = {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const tasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  const addTask = (text: string) => {
    const id = cuid();
    dispatch(mergeTasks({ [id]: {id, text} }));
    setTask('')
  }

  const editTask = (item: TodoItem) => {
    dispatch(mergeTasks({ [item.id]: item }));
  }
  
  const deleteTask = (id: string) =>{ 
    const arr = []
    arr.push(id)
    dispatch(omitTasks(arr))
  }

  return (
    <div className="App">
      <div className="add-todo">
        <h2>Add task</h2>
        <input type="text" className="add-todo-input" 
        value={task} onChange={changeHandler}/>
        <button className="add-todo-add" onClick={() => addTask(task)}>Add</button>
      </div>
      <div className="todo-list">
        {
          Object.values(tasks).map((item:any, index) => {
            return (
              <div className="todo-item" key={item.id}>
                <span>{index+1}</span>
                <input type="text" className="change-todo-input" 
                value={item.text} onChange={e => editTask({text:e.target.value, id: item.id })} />
                <button className="delete-todo" onClick={() => deleteTask(item.id)}
                >X</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

