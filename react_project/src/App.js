import './App.scss';
import  Login  from './files/components/login';
import Signup from './files/components/Signup';
import  Home from './files/pages/Home';
import  About from './files/pages/About';
import Contact from './files/pages/Contact';
import Singleproduct from './files/components/Singleproduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from"./redux/store"
import {Provider} from "react-redux";



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      <Router>
        <Routes>
        <Route  path='/' Component={Login} />
        <Route  path='/home' Component={Home} />
        <Route  path='/about' Component={About} />
        <Route  path='/contact' Component={Contact} />
        <Route  path='/singup' Component={Signup} />
        <Route path='/:id' Component={Singleproduct}/>
        
        </Routes>
      </Router>
        
    </div>
    </Provider>
  );
}

export default App;
