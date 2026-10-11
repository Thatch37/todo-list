
import './App.css'
const todoList = [
  {id: 1, title: "review"},
  {id: 2, title: "apply knowledge"},
  {id: 3, title: "code"},
]
function App() {

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>)
}

export default App
