import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Result from './Components/Result';
import Skip from './Components/Skip';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>} />
        <Route path="/skip" element={<Skip/>} />
      </Routes>
    </div>
  );
}

export default App;
