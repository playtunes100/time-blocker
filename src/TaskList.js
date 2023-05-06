import './Planner.css';
import { Rnd } from 'react-rnd';

function Task({id, title,from, to, deleteTask}){
    
    return(
         <Rnd
            default={{
                x: 0,
                y: 100,
                width: '30vw',
                height: '6.6vw',
            }}
            className="task"
            minWidth={10}
            minHeight={5}
            dragGrid={[20,20]}
            bounds="parent"
            
            >
            <p>{title}</p>
            <p>{from} to {to}</p>
            <div className="del-button" onClick={() => deleteTask(id)}><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vw" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </Rnd>
    )

}

export default function TaskList({taskList, deleteTask}){

    

    return(
        taskList.map((i) => {
            return(<Task key={i.id} id={i.id} title={i.title} from={i.from} to={i.to} deleteTask={deleteTask}/>)
        })
    )
}
