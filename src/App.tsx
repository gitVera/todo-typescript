import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import {mergeAction, omitAction} from './actions';
import {selectAllTasks} from './selectors';

type TodoItem = {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const todos = useSelector(selectAllTasks);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  const addTodo = (text: string) => {
    const id = Date.now().toString();
    dispatch(mergeAction({ [id]: {id, text} }));
    setTodo('')
  }
  
  const editTodo = (item: TodoItem) => {
    dispatch(mergeAction({ [item.id]: item }));
  }
  
  const deleteTodo = (id: string) =>{ 
    const arr = []
    arr.push(id)
    dispatch(omitAction(arr))
  }

  return (
    <div className="App">
      <div className="add-todo">
        <h2>Add todo</h2>
        <input type="text" className="add-todo-input" 
        value={todo} onChange={changeHandler}/>
        <button className="add-todo-add" onClick={() => addTodo(todo)}>Add</button>
      </div>
      <div className="todo-list">
        {
          Object.values(todos).map((item:any, index) => {
            return (
              <div className="todo-item" key={item.id}>
                <span>{index+1}</span>
                <input type="text" className="change-todo-input" 
                value={item.text} onChange={e => editTodo({text:e.target.value, id: item.id })} />
                <button className="delete-todo" onClick={() => deleteTodo(item.id)}
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

