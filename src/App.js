import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';

import Planner from './Planner.js';

function App() {
  return (
    <div className="App">
      <Container fluid>

        <Planner/>
        
      </Container>
    </div>
  );
}

export default App;
