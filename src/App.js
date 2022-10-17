import './App.css';
import ToDoList from "./components/ToDoList";
import DateHeader from "./components/DateHeader";

function App() {
  return (
    <div className="App">
      <div className="todo">
      <DateHeader/>
      <ToDoList/>
      </div>
    </div>
  );
}

export default App;
