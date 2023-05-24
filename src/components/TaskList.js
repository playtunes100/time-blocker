import '../Planner.css';
import { Rnd } from 'react-rnd';

function Task(props){
    // the distance between the dots on the board
    const coef = window.innerWidth * 0.03
    // change time to a y value
    const toY = 2 * (props.from.split(':')[0] - 6) + (props.from.split(':')[1] / 30)
    const toHeight = 2 * (props.to.split(':')[0] - 6) + (props.to.split(':')[1] / 30)
    
    return(
         <Rnd
            default={{
                x: coef,
                y: coef * toY,
                width: coef * 8,
                height: coef * (toHeight - toY),
            }}
            className="task"
            key={props.id}
            minWidth={coef}
            minHeight={coef}
            dragGrid={[coef,coef]}
            bounds="parent"
            
            >
            <p>{props.title}</p>
            <p>{props.from} to {props.to}</p>
            <div className="del-button" onClick={() => props.deleteTask(props.id)}><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vw" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </Rnd>
    )

}

export default function TaskList(props){

    

    return(
        props.taskList.map((i) => {
            return(<Task key={i.id} id={i.id} title={i.title} from={i.from} to={i.to} deleteTask={props.deleteTask}/>)
        })
    )
}
