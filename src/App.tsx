import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import {createAction, deleteAction, editAction} from '../actions';
import {selectAllNotes} from '../selectors';

type TodoItem = {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const todos = useSelector(selectAllNotes);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>('');

  const addTodo = (text: string) => {
    const id = Date.now();
    dispatch(createAction({text, id}));
    setTodo('')
  }
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }


  const editTodo = (item: TodoItem) => {
    dispatch(editAction(item))
  }
  
  const deleteTodo = (id: number) => dispatch(deleteAction(id))

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
          todos && todos.map((item: TodoItem, index: number) => {
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

