import './App.css'
import HelloComponent from "./components/helloComponent.jsx";
import TodoAdd from "./components/todo/todoAdd.jsx";
import TodoList from "./components/todo/todoList.jsx";

function App() {

  return (
    <>
        <HelloComponent></HelloComponent>
        <TodoAdd></TodoAdd>
        <TodoList></TodoList>
    </>
  )
}

export default App
