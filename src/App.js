import './App.css';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import SideNav from './Components/SideNav/SideNav';
import About from './Components/About/About';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
// import Scrollbar from 'smooth-scrollbar';

// Scrollbar.init(document.querySelector('#my-scrollbar'));
function openNav() {
    return(
    document.getElementById("mySidenav").style.width = "250px")
  }
function App() {
    return (
        <div className="App">
                        <span style={{fontSize:'30px', cursor:'pointer'}} onclick="openNav()">&#9776; open</span>
            <SideNav/>
            {/* <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Router> */}
            <LandingPage/>
            <About/>
            <Projects/>
            <Resume/>
            <Contact/>
            
        </div> 
        
    )
}

export default App;
