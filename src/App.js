
import {BrowserRouter as Router,Route, Routes} from  'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About"
import Service from "./components/Service"
import Contect from "./components/Contect"
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={ <About/>}/>
        <Route path="/Service" element={ <Service/>}/>
        <Route path="/Contect" element={ <Contect/>}/>
      </Routes>

    </Router>
  );
}

export default App;
