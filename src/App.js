import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Question from './pages/Question';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path=""  element={<Landingpage></Landingpage>}></Route>
          <Route path='/question' element={<Question></Question>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
