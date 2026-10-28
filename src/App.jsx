
import './App.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm';
import {useState} from 'react';
const todos = [
  {id: 1, title: "review"},
  {id: 2, title: "apply knowledge"},
  {id: 3, title: "code"},
]
function App() {
  const [todoList, setTodoList] = useState(todos)
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList todoList={todoList} />

    </div>)
}

export default App