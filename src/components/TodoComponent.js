// TodoComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoComponent = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoComponent;
