import './App.css';
import './Planner.css';
import { useEffect, useState} from 'react'
import localforage from "localforage";
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
    const [selectedTask, setSelectedTask] = useState(null)

    const displayAddTask = (id=null) => {
        setViewAddTask(() => viewAddTask ? false : true)
        if(id !== null){
          setSelectedTask(tasklist.find((task) => task.id === id))
        }
        else{
          setSelectedTask(null)
        }
        
    }

    useEffect(() => {
      localforage.getItem('Items').then((value) => {
        if (value !== null){setTasklist(value)}
    })}, [viewAddTask,selectedDate])
        
    
  
  return (
    <div className="App" >
        <div>
            <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <div className='highlights-row'>
                <Highlights tasklist={tasklist.filter((task) => task.date === selectedDate.toJSON().split('T')[0])}/>
                <Important tasklist={tasklist.filter((task) => task.date === selectedDate.toJSON().split('T')[0])}/>
            </div>
            <Board>
              <TaskList taskList={tasklist.filter((task) => task.date === selectedDate.toJSON().split('T')[0])} displayAddTask={displayAddTask} />
            </Board>
            <AddButton displayAddTask={displayAddTask}/>
            <AddTask viewForm={viewAddTask} displayAddTask={displayAddTask} taskList={tasklist} setTaskList={setTasklist} selectedDate={selectedDate} selectedTask={selectedTask} />
            <Footer/>
        </div>
    </div>
  );
}

export default App;
