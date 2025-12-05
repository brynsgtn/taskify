
import React, { useState } from 'react';
import './App.css'
import InputField from './components/InputField'
import type { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";


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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    let add,
      active = todos,
      complete = compleetedTodos;

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }


    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='App'>
        <span className='heading'>Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={(e) => handleAdd(e)} />
        <TodoList todos={todos} setTodos={setTodos} completedTodos={compleetedTodos} setCompletedTodos={setCompletedTodos} />
      </div>

    </DragDropContext>

  )
}

export default App
