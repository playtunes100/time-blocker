import { useRef} from 'react';
import './AddTask.css';

export default function AddTask(){
    const modal = useRef()
    const handleClose = () => {
        modal.current.style.display = "none";
    };
    const handleShow = () => {
        modal.current.style.display = "flex";
    }
    

    return(
        <div>
            <div className="addtask" onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>

            <div className='modal' ref={modal}>
                <div className='modal-content'>
                    <div className='addtaskdiv'>
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title" placeholder="Title..."/>

                        <label for="location">Location</label>
                        <input type="text" id="location" name="location" placeholder="Location"/>

                        <label for="from">From</label>
                        <input type="datetime-local" id="from" name="from"/>

                        <label for="to">To</label>
                        <input type="datetime-local" id="to" name="to"/>  
                    </div>
                    <div>
                        <button className='button-cancel' onClick={handleClose}>Cancel</button>
                        <button className='button-submit'> Save</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
