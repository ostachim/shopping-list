import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './pages/Nav';
import Context from './Context.js';

import "./styles/shoppingList.css";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Nav/>
        <Context />
      </Router>
      
    </div>
  );
}

export default App;
