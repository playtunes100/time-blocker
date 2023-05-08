import { useRef} from 'react';
import './AddTask.css';

export default function AddTask({viewForm, displayAddTask, taskList, setTaskList}){
    // uncontrolled
    const title = useRef()
    const important = useRef()
    const highlight = useRef()
    const date = useRef()
    const from = useRef()
    const to = useRef()

    const addTask = () => {
        const task = {
            id: taskList.length === 0 ? 1: taskList[taskList.length - 1].id + 1,
            title: title.current.value,
            important: important.current.checked,
            highlight: highlight.current.checked,
            date: date.current.value,
            from: from.current.value,
            to: to.current.value,
        }
        setTaskList([...taskList, task]);
        // clear form
        title.current.value = "";
        important.current.checked = false;
        highlight.current.checked = false;
        date.current.value = "";
        from.current.value = "";
        to.current.value = "";
    
    }
    

    return(
        <div>
            

            <div className='modal' style={{ display: viewForm ? "flex" : "none"}}>
                <div className='modal-content'>
                    <form className='addtaskdiv' onSubmit={(e) => { e.preventDefault(); addTask(); displayAddTask(); }}>
                        <label for="title">Title</label>
                        <input type="text" id="title" ref={title} name="title" placeholder="Title..." required/>

                        <label for="importnant">Important
                        <input type="checkbox" id="important" ref={important} name="important" />
                        </label>
                        <label for="highlight">Highlight
                        <input type="checkbox" id="highlight" ref={highlight} name="highlight"/>
                        </label>

                        <label for="date">Date</label>
                        <input type="date" id="date" ref={date} name="date" required />

                        <label for="from">From</label>
                        <input type="time" id="from" ref={from} name="from"  min={'06:00'} max={'18:00'} required/>

                        <label for="to">To</label>
                        <input type="time" id="to" ref={to} name="to" min={from} required/>

                        <div>
                        <button className='button-cancel' onClick={displayAddTask}>Cancel</button>
                        <button type='submit' className='button-submit'> Save</button>
                    </div>  
                    </form>
                    
                </div>
            </div>

        </div>
    )
}
