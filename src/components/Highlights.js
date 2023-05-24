

function Highlights(props){
    
    return(
        <div className='highlights-col'>
            <h4>DAILY HIGHLIGHT</h4>
            <div className='daily-highlights'>
            {props.tasklist.map((i) => { 
                return ( i.highlight === true ?
                    <>
                    <span className='highlights-text'key={i.id}>{i.title}</span> 
                    <hr className='dotted-line'/>
                    </>
                    : <span></span>
                )})} 
            </div>
            <div>
                <ul>
                    <li><span className='highlights-text'>EVERYDAY SHOULD HAVE A HIGHLIGHT</span></li>
                    <li><span className='highlights-text'>CHOOSE SOMETHING YOU ACTUALLY <strong>WANT</strong> TO DO</span></li>
                    <li><span className='highlights-text'>SUGGESTED LENGTH: 60-90 MINUTES</span></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Highlights;
