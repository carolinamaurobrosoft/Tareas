import './App.css';
import logoCarolina from './images/Carolina.png'
import Task from './components/Tasks';

function App() {
  return (
    <div className="app-tasks">
      <div className='logo'>
        <img
          src={logoCarolina}
           />
      </div>
      <div className='principal-tasks-list'>
        <h1> MIS TAREAS </h1>
        <Task text='Aprender React'/>
      </div>
    </div>
  );
}

export default App;
