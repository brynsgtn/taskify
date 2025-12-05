
import React, { useState } from 'react';
import './App.css'
import InputField from './components/InputField'
import type { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext } from "@hello-pangea/dnd";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [compleetedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {

    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }

  };

  console.log(todos);
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className='App'>
        <span className='heading'>Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={(e) => handleAdd(e)} />
        <TodoList todos={todos} setTodos={setTodos} completedTodos={compleetedTodos} setCompletedTodos={setCompletedTodos} />
      </div>

    </DragDropContext>

  )
}

export default App
