import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'

import Home from './components/Home.js'
import About from './components/About.js'
import Articles from './components/Articles.js'

import {Route, Routes, NavLink} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header />
        <nav>
          <ul>
              <li> <NavLink to="/">           Home      </NavLink>  </li>
              <li> <NavLink to="/about">      About     </NavLink>  </li>
              <li> <NavLink to="/articles">   Articles  </NavLink>  </li>
          </ul>
        </nav>
        <Routes>        
            <Route path="/"         element={<Home/>}/>
            <Route path="/about"    element={<About/>}/>
            <Route path="/articles" element={<Articles/>}/>
        </Routes>
    </div>
  );
}

export default App;
