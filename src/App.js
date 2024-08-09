import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigate from './components/Navigate';
import Splash from './components/Splash';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Checkmate from './components/Checkmate';
import MovieMind from './components/MovieMind';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigate />
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/Checkmate' element={<Checkmate />} />
          <Route path='/projects/MovieMind' element={<MovieMind />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
