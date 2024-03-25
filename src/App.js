import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import UserComponent from "./components/UserComponent";
import FactorialComponent from "./components/FactorialComponent";
import TodoComponent from "./components/TodoComponent";
import FormComponent from "./components/FormComponent";
import ReduxComponent from "./components/ReduxComponent";

function App() {
  const todos = [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
  ];
  return (
    <div className="App">
      {/* {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))} */}
      {/* <UserComponent /> */}
      {/* <FactorialComponent /> */}
      {/* <TodoComponent /> */}
      {/* <FormComponent /> */}
      <ReduxComponent />
    </div>
  );
}

export default App;
