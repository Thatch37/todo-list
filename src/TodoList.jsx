function TodoList() {
    const todoList = [
  {id: 1, title: "review"},
  {id: 2, title: "apply knowledge"},
  {id: 3, title: "code"},
]
return(
    <ul>
        {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>);
}

export default TodoList;