function Important(props){

    return(
        <div className='tasks-col'>
            <h4>IMPORTANT TASKS</h4>
            {props.tasklist.map((i) => { 
                return ( i.important === true ?
                    <div key={i.id} className='important-tasks'>
                        <span className='highlights-text'>{i.title}</span>
                    </div>
                    : <span></span>
                )})}
                {props.tasklist.filter(i => i.important === true).length === 0 && <div><div className='important-tasks'></div><div className='important-tasks'></div><div className='important-tasks'></div></div> }
                {props.tasklist.filter(i => i.important === true).length === 1 && <div><div className='important-tasks'></div><div className='important-tasks'></div></div> }
                {props.tasklist.filter(i => i.important === true).length === 2 && <div><div className='important-tasks'></div></div> }
        </div>
    )
}

export default Important;