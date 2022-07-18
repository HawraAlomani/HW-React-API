import React from "react";
import { useState } from "react";
import axios from "axios";
//Create
function Create() {
    const [title,setMyTask] = useState('')

    const addTask =()=>{
        axios.post (`https://62d3e3e8cd960e45d44f8797.mockapi.io/fakeAPI/todo`,{
            title,
        }).then(result=>{console.log(result);
            })
            .catch(err=>{console.log(err)})
    }
  return (
    <div>
      <input  type="text"
        className="userInput"
        placeholder="title" onChange={(e)=>{setMyTask(e.target.value)}}></input>
      <button onClick={addTask} className="button-52">Add Task</button>
    </div>
  )
}

export default Create;