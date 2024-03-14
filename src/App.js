
import './App.css';
import Aboutpage from './Pages/About/Aboutpage';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';

import{BrowserRouter as Router,Routes,Route}from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Aboutpage' element={<Aboutpage/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
