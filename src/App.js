import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Button from './components/Button'
import Header from './components/Header'
import Page from './components/Page'
import Card from './components/Card';
import Chip from './components/Chip';
import TextField from './components/TextField';
import Select from './components/Select';
import MenuLinks from './components/MenuLinks';

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
]

function App() {
  return (
    <Router className="App">
      <div style={{ marginTop: '60px' }}>
        <MenuLinks />
      </div>
    </Router>
  );
}

export default App;
