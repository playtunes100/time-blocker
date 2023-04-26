import './Planner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Planner(){

    return(
        <Container>
            <Date/>
            <Row className='highlights-row'>
                <Highlights/>
                <Important/>
            </Row>
            <Board/>
        </Container>  
    )

}

function Date(){

    return(
        <Row >
            <div className='date-title'>
                <InputGroup className='input-group'>
                    <InputGroup.Text className='calender-icon' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                    </InputGroup.Text>
                    <Form.Control className='date-picker' aria-label="Date" />
                    <InputGroup.Text className='title-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </InputGroup.Text>
                    <Form.Control className='day-title' aria-label="Title" />
                </InputGroup>
            </div>
        </Row>
    )
}

function Highlights(){

    return(
        <div className='highlights-col'>
            <h4>DAILY HIGHLIGHT</h4>
            <div className='daily-highlights'>
                <span className='highlights-text'>
                    What a wonderful day
                </span>
                <hr className='dotted-line'/>
                <span className='highlights-text'>
                    Blank state illustration
                </span>
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

function Important(){

    return(
        <div className='tasks-col'>
            <h4>IMPORTANT TASKS</h4>
            <div className='important-tasks'>
                <span className='highlights-text'>Fix bug with timezones</span>
            </div>
            <div className='important-tasks'>
                <span className='highlights-text'>Update Modal docs that have a place to live with me</span>
            </div>
            <div className='important-tasks'></div>
        </div>
    )
}

function Board(){


    return(
        <Row className='board-row'>
            <div className='board-outer'>
                <div className='board-left'>
                    <h4>PLAN</h4>
                    <div className='board'>
                        <span>what the hell</span>
                    </div>
                </div>
                <div className='board-middle'>
                    <h4>REALITY</h4>
                    <div className='board'>
                        <span>what the hell</span>
                    </div>
                </div>
                <div className='board-right'>
                    <h4>REVISED</h4>
                    <div className='board'>
                        <span>what the hell</span>
                    </div>
                </div>
            </div>
        </Row>
    )
}

