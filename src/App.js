import './App.css';
import './Planner.css';
import { useState} from 'react'
import Header from './components/Header.js';
import Highlights from './components/Highlights.js';
import Important from './components/Important.js';
import Board from './components/Board.js';
import AddButton from './components/AddButton.js';
import AddTask from './components/AddTask.js';
import TaskList from './components/TaskList.js';
import Footer from './components/Footer.js';


function App() {
    const [tasklist, setTasklist] = useState([])
    const [viewAddTask, setViewAddTask] = useState(false)
    const today = new Date()
    const [selectedDate, setSelectedDate] = useState(today)
    const displayAddTask = () => {
        setViewAddTask(() => viewAddTask ? false : true)    
    }

    
    const deleteTask = (id) => {
        setTasklist(tasklist.filter((task) => task.id !== id))
    
    }
  return (
    <div className="App" >
        <div>
            <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <div className='highlights-row'>
                <Highlights tasklist={tasklist}/>
                <Important tasklist={tasklist}/>
            </div>
            <Board ><TaskList taskList={tasklist} deleteTask={deleteTask} /></Board>
            <AddButton displayAddTask={displayAddTask}/>
            <AddTask viewForm={viewAddTask} displayAddTask={displayAddTask} taskList={tasklist} setTaskList={setTasklist}/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
