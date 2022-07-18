import "./App.css";
import ToDo from "./component/ToDo";
import Sidebar from "./component/Sidebar";
import Login from "./component/Login";
import TodoCRUD from "./component/Get";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Router>
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<TodoCRUD />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
