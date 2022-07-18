import axios from "axios";

const Delete = () => {
    const [todoList, setTodoList] = useState(null);
    const deleteTask = (id) => {
       axios.delete(`https://62d3e3e8cd960e45d44f8797.mockapi.io/fakeAPI/todo/${id}`);
       setTodoList(
        todoList.filter((task) => {
             return task.id !== id;
          })
       );
    };
 
    return (
       <div>
           
       </div>
    );
 };
 
export default Delete;
 