import React , {Component} from 'react';

// css
import './App.css';

//import lib
import {BrowserRouter , Route} from "react-router-dom"

// import Page
import Navbar from "./Components/Navbar/index"
import Index from './Components/Index';
import Contact from "./Components/Contact/index"

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    )
  }
}
export default App;