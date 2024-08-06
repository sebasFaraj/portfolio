import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { CalcPage } from './pages/CalcPage';
import { ExcusePage } from './pages/ExcusePage';
import { TodoPage} from './pages/TodoPage';

function App() {

  return (
    <div className="App">
      <Router>
          <Navbar />
        <Routes>
          <Route path = "/" element ={<Home />}/>
          <Route path = "/about" element = {<About />}/>
          <Route path = "/projects" element = {<Projects />}/>
          <Route path = "/calculator" element = {<CalcPage />}></Route>
          <Route path = "/excuseGenerator" element = {<ExcusePage />}></Route>
          <Route path = "/todolist" element = {<TodoPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/* 
 Fix calculator for mobile and body height
 Add ToDo List
 Add Excuse Generator
 Add About Page 
*/