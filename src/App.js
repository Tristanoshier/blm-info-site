import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sitebar from './components/Sitebar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Sitebar />
      </Router>
    </div>
  );
}

export default App;
