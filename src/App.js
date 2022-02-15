import React from "react";
import "./App.css";
import "./assets/heart.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router >
      <div className={'App'}>
        <ul className={'scrollmenu'}>
          <li>
            <Link style={{color:'white', textDecoration: 'none'}} to="/index.html">Home</Link>
          </li>
          <li>
            <Link style={{color:'white', textDecoration: 'none'}}to="/iPage">React</Link>
          </li>
          <li>
            <Link style={{color:'white', textDecoration: 'none'}}to="/routerPage">Router</Link>
          </li>
          <li>
            <Link style={{color:'white', textDecoration: 'none'}}to="/demoPage">Demo</Link>
          </li>
        </ul>

        <hr />
        <Switch >
          <Route exact path="/index.html">
            <Home />
          </Route>
          <Route path="/iPage">
            <IPage />
          </Route>
          <Route path="/routerPage">
            <RouterPage />
          </Route>
          <Route path="/demoPage">
            <DemoPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div className={'a'}>
      <h2>Thoughts on React-Router</h2>
      <Link to="/iPage"><button className={'next'}>Next &raquo;</button></Link>
    </div>
  );
}

function IPage() {
  return (
    <div>
      <h2 style={{fontSize:'70px', textAlign: 'center'}}>I</h2>
      <Link to="/routerPage"><button className={'next'}>Next &raquo;</button></Link>
    </div>
  );
}

function RouterPage() {
  return (
    <div style={{textAlign: 'center'}}>
      <img src={require('./assets/heart.png')} style={{height:'20%', width: '20%'}} alt='heart'/>
      <Link to="/demoPage"><button className={'next'}>Next &raquo;</button></Link>
    </div>
  );
}

function DemoPage() {
  return (
    <div>
      <h2 style={{fontSize:'70px', textAlign: 'center'}}>React-Router</h2>
      <Link to="/index.html"><button className={'next'}>Next &raquo;</button></Link>
    </div>
  );
}

export default App;



//https://myacewebsite323.s3.amazonaws.com/index.html


// <!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <style>
// div.scrollmenu {
//   background-color: #333;
//   overflow: auto;
//   white-space: nowrap;
// }

// div.scrollmenu a {
//   display: inline-block;
//   color: white;
//   text-align: center;
//   padding: 14px;
//   text-decoration: none;
// }

// div.scrollmenu a:hover {
//   background-color: #777;
// }
// </style>
// </head>
// <body>

// <div class="scrollmenu">
//   <a href="#home">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
//   <a href="#about">About</a>
//   <a href="#support">Support</a>
//   <a href="#blog">Blog</a>
//   <a href="#tools">Tools</a>  
//   <a href="#base">Base</a>
//   <a href="#custom">Custom</a>
//   <a href="#more">More</a>
//   <a href="#logo">Logo</a>
//   <a href="#friends">Friends</a>
//   <a href="#partners">Partners</a>
//   <a href="#people">People</a>
//   <a href="#work">Work</a>
// </div>

// <h2>Horizontal Scrollable Menu</h2>
// <p>Resize the browser window to see the effect.</p>

// </body>
// </html>


// <!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <style>
// a {
//   text-decoration: none;
//   display: inline-block;
//   padding: 8px 16px;
// }

// a:hover {
//   background-color: #ddd;
//   color: black;
// }

// .previous {
//   background-color: #f1f1f1;
//   color: black;
// }

// .next {
//   background-color: #4CAF50;
//   color: white;
// }

// .round {
//   border-radius: 50%;
// }
// </style>
// </head>
// <body>

// <h2>Previous and Next Buttons</h2>

// <a href="#" class="previous">&laquo; Previous</a>
// <a href="#" class="next">Next &raquo;</a>

// <a href="#" class="previous round">&#8249;</a>
// <a href="#" class="next round">&#8250;</a>
  
// </body>
// </html> 
