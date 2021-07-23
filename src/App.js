import './App.css';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';

function App() {
    return (
        <div className="App">
            <NavBar/>
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
