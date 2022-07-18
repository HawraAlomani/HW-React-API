import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const [title,setMyTask] = useState('')
  const [id, setId] = useState(null);
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setMyTask(localStorage.getItem("title"));
  }, []);
  const updateTask = () => {
    axios
      .update(`https://62d3e3e8cd960e45d44f8797.mockapi.io/fakeAPI/todo/${id}`, {
        title,
      })
      .then((res) => {
        console.log(res);
        navigate("/todo");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        placeholder="title"
        onChange={(e) => {
            setMyTask(e.target.value);
        }}
      ></input>
      <button onClick={updateTask}>update task</button>
    </div>
  );
}

export default Update;