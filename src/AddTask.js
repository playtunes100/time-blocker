import { useRef} from 'react';
import './AddTask.css';

export default function AddTask({viewForm, displayAddTask, taskList, setTaskList}){

    const title = useRef()
    const location = useRef()
    const important = useRef()
    const highlight = useRef()
    const from = useRef()
    const to = useRef()

    const addTask = () => {
        const task = {
            id: taskList.length === 0 ? 1: taskList[taskList.length - 1].id + 1,
            title: title.current.value,
            location: location.current.value,
            important: important.current.checked,
            highlight: highlight.current.checked,
            from: from.current.value,
            to: to.current.value,
        }
        setTaskList([...taskList, task]);
        // clear form
        title.current.value = "";
        location.current.value = "";
        important.current.checked = false;
        highlight.current.checked = false;
        from.current.value = "";
        to.current.value = "";
    
    }
    

    return(
        <div>
            

            <div className='modal' style={{ display: viewForm ? "flex" : "none"}}>
                <div className='modal-content'>
                    <div className='addtaskdiv'>
                        <label for="title">Title</label>
                        <input type="text" id="title" ref={title} name="title" placeholder="Title..."/>

                        <label for="location">Location</label>
                        <input type="text" id="location" ref={location} name="location" placeholder="Location"/>

                        <label for="importnant">Important
                        <input type="checkbox" id="important" ref={important} name="important" />
                        </label>
                        <label for="highlight">Highlight
                        <input type="checkbox" id="highlight" ref={highlight} name="highlight"/>
                        </label>
                        <label for="from">From</label>
                        <input type="datetime-local" id="from" ref={from} name="from"/>

                        <label for="to">To</label>
                        <input type="datetime-local" id="to" ref={to} name="to"/>  
                    </div>
                    <div>
                        <button className='button-cancel' onClick={displayAddTask}>Cancel</button>
                        <button className='button-submit' onClick={() => {addTask(); displayAddTask(); }}> Save</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
