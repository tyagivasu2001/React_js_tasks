import './App.scss';
import  Login  from './files/components/login';
import Signup from './files/components/Signup';
import  Home from './files/pages/Home';
import  About from './files/pages/About';
import Contact from './files/pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' Component={Login} />
        <Route exact path='/home' Component={Home} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/contact' Component={Contact} />
        <Route exact path='/singup' Component={Signup} />
        
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
