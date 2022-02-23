
import './App.css';
import { ToDoList } from './ToDoList';
import image from './Checklist.jpg';
import imageTwo from './notebook.jpg';


function App() {
  return (
    <div className="App">
      <div className="container">

    <img className="img" src={image} width="200px" alt="checklist"/>
      </div>
      <div className="container">
      <h1>TO-DO-LIST</h1>
      </div>
      <ToDoList/>
      <div className="container">
      <img className="img" src={imageTwo} width="300px" alt="notebook"/>


    </div>
    </div>
  );
}

export default App;
