import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from './pages/Project';
import Home from './pages/Home';


function App() {
  return (
    <div classNameName="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project1" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
