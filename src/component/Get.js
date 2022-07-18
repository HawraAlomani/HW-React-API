import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Create from "./Create";
import TodoList from "./ToDoList";
function Get() {
  // Get
  const [todoList, setTodoList] = useState(null);
  useEffect(() => {
    axios
      .get("https://62d3e3e8cd960e45d44f8797.mockapi.io/fakeAPI/todo")
      .then((result) => {
        setTodoList(result.data);
      });
  }, []);

  return (
    <div>
      <h1> To Do List</h1>
     <Create/>
      <div className="scrollable">
        {todoList ? <TodoList todoList={todoList} /> : <div> Loading . . </div>}
      </div>{" "}
    </div>
  );
}

export default Get;
