import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Button from './components/Button'
import Header from './components/Header'
import Page from './components/Page'
import Card from './components/Card';
import Chip from './components/Chip';
import TextField from './components/TextField';
import Select from './components/Select';
import Navbar from './components/Navbar';
import MenuLinks from './components/MenuLinks';

import Overview from './scenes/Overview/index';
import Requests from './scenes/Requests/index';
import Sites from './scenes/Sites/index';
import AddSite from './scenes/Sites/Add/index'
import { ContainerStyles } from './styles/Container';

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
]

function App() {
  return (
    <Router className="App">
      <Navbar />
      <ContainerStyles>
        <MenuLinks />
      </ContainerStyles>
      <Routes>
        <Route exact path="/" element={<Overview />}></Route>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/requests" element={<Requests />}></Route>
        <Route path="/sites" element={<Sites />}></Route>
        <Route path="/sites/new" element={<AddSite />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
