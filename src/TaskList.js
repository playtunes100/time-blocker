import './Planner.css';
import { Rnd } from 'react-rnd';

function Task({id, title,from, to}){
    
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
        </Rnd>
    )

}

export default function TaskList({taskList=[]}){
    

    return(
        taskList.map((i) => {
            return(<Task key={i.id} id={i.id} title={i.title} from={i.from} to={i.to} />)
        })
    )
}
