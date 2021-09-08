import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import Result from "./components/Result";
import Hello from "./components/Hello";
    
const Home = (props) => {
  return (
    <h1 style={{color: "cyan"}}>Welcome</h1>
  );
}
    
const About = (props) => {
  return (
    <h1 style={{color: "blue"}}>About Component</h1>
  );
}
    
function App() {
  return (
    <BrowserRouter>
      <h1>Routing Practice Assignment</h1>
      <p>
        <Link to="/home">Home</Link>
         | 
        <Link to="/about">About</Link>   
      </p>

      <Switch>
      <Route path="/:word/:color/:bgColor">
          <Hello/>
        </Route>
        <Route path="/:varName">
          <Result/>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>

      </Switch>

    </BrowserRouter>
  );
}
    
export default App;
