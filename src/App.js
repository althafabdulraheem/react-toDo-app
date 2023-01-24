import React,{Component} from 'react';
import Todo from './component/todoapp/todo';
import Header from './component/header/header'; 
import About from './component/about/about'; 
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
class App  extends Component {
  state = {  } 
 render()
 {

  return (
    <Router>
    <Header />
    <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
    </Routes>
  </Router>


  );
 
 }
}
 
export default App ;