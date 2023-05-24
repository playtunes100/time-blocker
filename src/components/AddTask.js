import { useRef} from 'react';
import '../AddTask.css';

function AddTask(props){
    // uncontrolled
    const title = useRef()
    const important = useRef()
    const highlight = useRef()
    const date = useRef()
    const from = useRef()
    const to = useRef()

    const addTask = () => {
        const task = {
            id: props.taskList.length === 0 ? 1: props.taskList[props.taskList.length - 1].id + 1,
            title: title.current.value,
            important: important.current.checked,
            highlight: highlight.current.checked,
            date: date.current.value,
            from: from.current.value,
            to: to.current.value,
        }
        props.setTaskList([...props.taskList, task]);
        // clear form
        title.current.value = "";
        important.current.checked = false;
        highlight.current.checked = false;
        date.current.value = "";
        from.current.value = "";
        to.current.value = "";
    
    }

    const handleDatePicker = (event) => {
        date.current.showPicker()
    }
    

    return(
        <div>
            

            <div className='modal' style={{ display: props.viewForm ? "flex" : "none"}}>
                <div className='modal-content'>
                    <form className='addtaskdiv' onSubmit={(e) => { e.preventDefault(); addTask(); props.displayAddTask(); }}>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" ref={title} name="title" placeholder="Title..." required/>

                        <label htmlFor="importnant">Important
                        <input type="checkbox" id="important" ref={important} name="important" />
                        </label>
                        <label htmlFor="highlight">Highlight
                        <input type="checkbox" id="highlight" ref={highlight} name="highlight"/>
                        </label>

                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" ref={date} name="date" onClick={handleDatePicker} required />

                        <label htmlFor="from">From</label>
                        <input type="time" id="from" ref={from} name="from"  min={'06:00'} max={'18:00'} required/>

                        <label htmlFor="to">To</label>
                        <input type="time" id="to" ref={to} name="to" min={from} required/>

                        <div>
                            <button className='button-cancel' onClick={props.displayAddTask}>Cancel</button>
                            <button type='submit' className='button-submit'> Save</button>
                        </div>  
                    </form>
                    
                </div>
            </div>

        </div>
    )
}

export default AddTask;
