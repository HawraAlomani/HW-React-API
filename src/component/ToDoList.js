const TodoList = ({todoList}) =>{
    return <ul>
        {todoList.map((Todo)=>
        <li>{Todo.title}
        <div className="taskBtn">
         <button id="editBtn"> edit </button>
         <button id="deleteBtn"> delete </button>
         </div>
        </li>
        )}
    </ul>
};

export default TodoList;