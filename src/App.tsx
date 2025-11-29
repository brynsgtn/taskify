
import React, { useState } from 'react';
import './App.css'
import InputField from './components/InputField'
import type { Todo } from './model';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {

    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }

  };

  console.log(todos);
  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={ (e) => handleAdd(e)}/>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.todo}</li>
      ))}
    </div>

  )
}

export default App
