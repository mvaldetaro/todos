import { useEffect, useRef, useState } from "react";

function App() {
  // State

  const [todos, setTodos] = useState([]);

  // Binding
  const todoText = useRef();

  // Events

  function addTodo(e) {
    e.preventDefault();
    const updatedList = [...todos, todoText.current.value];
    setTodos(updatedList);
    localStorage.setItem("todos", JSON.stringify(updatedList));
  }

  // Side Effects (lifecycle hooks)

  useEffect(() => {
    const storageTodos = localStorage.getItem("todos");
    setTodos(storageTodos ? JSON.parse(storageTodos) : []);
  }, []);

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Digite sua tarefa" ref={todoText} />
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </>
  );
}

export default App;
