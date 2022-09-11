import React from 'react';
// import './App.css';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/css/bootstrap-grid.css"
// import "bootstrap/dist/css/bootstrap-grid.min.css"
import Navbar from './components/Navbar';
import About from './components/About';
import Recipe from './components/Recipe';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';

  
function App() {
  

  
  return (
   
    <Router>
    <div className='container'>
      <div className='row'>
     <Navbar/>
     <Routes>
     <Route exact path='/about' element={<About />}></Route>
     <Route exact path='/recipe' element={<Recipe/>}></Route>
     <Route exact path='/' element={<Home/>}></Route>
    
      </Routes>
      
     </div> 
    </div>
    </Router>
 
   
  );
}

export default App;
