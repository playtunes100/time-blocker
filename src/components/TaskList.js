import '../Planner.css';
import { Rnd } from 'react-rnd';
import { useRef } from 'react';

function Task(props){
    const pointer = useRef({x: 0, y: 0})
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
            onDragStart={(e) => {
                pointer.current = {x: e.clientX, y: e.clientY};
            }}
            onDragStop={(e) => {
                const {x, y} = pointer.current;
                if (Math.abs(e.clientX - x) < 10 && Math.abs(e.clientY - y) < 10) {
                    props.displayAddTask(props.id)
                }
            }}
            >
            <p>{props.title}</p>
            <p>{props.from} to {props.to}</p>
        </Rnd>
    )

}

export default function TaskList(props){

    

    return(
        props.taskList.map((i) => {
            return(<Task key={i.id} id={i.id} title={i.title} from={i.from} to={i.to} displayAddTask={props.displayAddTask}/>)
        })
    )
}
