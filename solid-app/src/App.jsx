import { createSignal, onMount } from "solid-js";

function App() {
  const [todos, setTodos] = createSignal([]);
  let todoText;

  onMount(() => {
    const storageTodos = localStorage.getItem("todos");
    setTodos(storageTodos ? JSON.parse(storageTodos) : []);
  });

  function addTodo(e) {
    e.preventDefault();
    const updatedList = [...todos(), todoText.value];
    setTodos(updatedList);
    localStorage.setItem("todos", JSON.stringify(updatedList));
  }

  return (
    <div>
      <ul>
        {todos().map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Digite sua tarefa" ref={todoText} />
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  );
}

export default App;
