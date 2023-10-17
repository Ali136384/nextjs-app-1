"use client";
import React, { useEffect, useState } from "react";

function Todo() {
  const [todo, setTodo] = useState({});
  useEffect(async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/5`
    );
    const result = await response.json();
    setTodo(result);
  }, []);

  return <div>{todo.title}</div>;
}

export default Todo;
