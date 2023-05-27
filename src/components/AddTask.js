import {useEffect, useState} from 'react';
import '../AddTask.css';
import localforage from "localforage";

function AddTask(props){

  const [formData, setFormData] = useState({
    id: props.taskList.length === 0 ? 1: props.taskList[props.taskList.length - 1].id + 1,
    title: '',
    important: false,
    highlight: false,
    date: '',
    from: '',
    to: '',
  });

  useEffect(() => {
    if(props.selectedTask){
      setFormData(props.selectedTask)
    }
  }, [props.selectedTask])

    const handleSubmit = (e) => {
      e.preventDefault();
      if (props.selectedTask) {
        // Editing an existing item
        const updatedItems = props.taskList.map((task) => {
          
          if(task.id === props.selectedTask.id){
            return formData;
          }
          else{
            return task;
          }
        })

        localforage.setItem('Items', updatedItems).then(function (value) {
          // Update the tasklist
          props.setTasklist(value)

      }).catch(function(err) {
          // This code runs if there were any errors
          console.log(err);
      });
      } else {
        // Creating a new item
        localforage.setItem('Items', [...props.taskList, {...formData, id:props.taskList.length === 0 ? 1: props.taskList[props.taskList.length - 1].id + 1}]).then(function (value) {
          // Update the tasklist
          props.setTasklist(value)

      }).catch(function(err) {
          // This code runs if there were any errors
          console.log(err);
      });
      }
  
      // Clear the form
      setFormData({
        id: props.taskList.length === 0 ? 1: props.taskList[props.taskList.length - 1].id + 1,
        title: '',
        important: false,
        highlight: false,
        date: '',
        from: '',
        to: '',
      });
      props.displayAddTask();
    };

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const newValue = type === 'checkbox' ? checked : value;
  
      setFormData((prevData) => ({
        ...prevData,
        [name]: newValue,
      }));
    };

    const deleteTask = () => {

      localforage.setItem('Items', props.taskList.filter((task) => task.id !== props.selectedTask.id)).then(function (value) {
        // Update the tasklist
        props.setTasklist(value)
        

    }).catch(function(err) {
        console.log(err);
    });
    props.displayAddTask();
  }

    const handleDatePicker = (event) => {
        event.target.showPicker()
    }
    

    return(
        <div>
            <div className='modal' style={{ display: props.viewForm ? "flex" : "none"}}>
                <div className='modal-content'>
                    <form className='addtaskdiv' onSubmit={handleSubmit}>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" placeholder="Title..." onChange={handleChange} value={formData.title} required/>

                        <label htmlFor="importnant">Important
                        <input type="checkbox" id="important" name="important" onChange={handleChange} checked={formData.important} />
                        </label>
                        <label htmlFor="highlight">Highlight
                        <input type="checkbox" id="highlight" name="highlight" onChange={handleChange} checked={formData.highlight}/>
                        </label>

                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" onClick={handleDatePicker} onChange={handleChange} value={formData.date} required />

                        <label htmlFor="from">From</label>
                        <input type="time" id="from" name="from"  min={'06:00'} max={'18:00'} onChange={handleChange} value={formData.from} required/>

                        <label htmlFor="to">To</label>
                        <input type="time" id="to" name="to" min={formData.from} max={'18:00'} onChange={handleChange} value={formData.to} required/>

                        <div>
                            <button type='button' className='button-cancel' onClick={props.displayAddTask}>Cancel</button>
                            {props.selectedTask ? <button type='button' className='button-delete' onClick={deleteTask}>Delete</button> : <span></span>}
                            <button type='submit' className='button-submit'>{props.selectedTask ? "Update" : "Save"}</button>
                        </div>  
                    </form>
                    
                </div>
            </div>

        </div>
    )
}

export default AddTask;

