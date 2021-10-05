import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import SideNav from './Components/SideNav/SideNav';
import About from './Components/About/About';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import {GiHamburgerMenu} from 'react-icons/gi'
// import Scrollbar from 'smooth-scrollbar';

// Scrollbar.init(document.querySelector('#my-scrollbar'));
// function openNav() {
//     return(
//     document.getElementById("mySidenav").style.width = "250px")
//   }
function App() {
    const [ showNav, setShowNav ] = useState (false)
    return (
        // // <div className="App">
        // //                 <span style={{fontSize:'30px', cursor:'pointer'}} onclick="openNav()">&#9776; open</span>
        // //     <SideNav/>
        //     {/* <Router>
        //         <Switch>
        //             <Route exact path="/" component={LandingPage} />
        //             <Route exact path="/about" component={About} />
        //             <Route exact path="/projects" component={Projects} />
        //             <Route exact path="/resume" component={Resume} />
        //             <Route exact path="/contact" component={Contact} />
        //         </Switch>
        //     </Router> */}//
        // //     
        
        
            <Router>
        <header>
            <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
        </header>
        <SideNav show={showNav}/>
            <div className='main'>
                <Route path="/" exact={true} component={LandingPage}/>
                <Route path="/About" exact={true} component={About}/>
                <Route path="/Projects" exact={true} component={Projects}/>
                <Route path="/Contact" exact={true} component={Contact}/>
                <Route path="/Resume" exact={true} component={Resume}/>
                
            </div>
        </Router>

            
        
        
    );
}

export default App;
