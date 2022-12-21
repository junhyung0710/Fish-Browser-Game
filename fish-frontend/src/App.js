import './App.css';
import {
  Routes,
  Route
} from "react-router-dom"
import About from './Components/About'
import Users from './Components/Users'
import Home from './Components/Home'


function App() {
  return (
    <div className = "App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
    
  );
}

export default App;
