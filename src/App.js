import './App.css';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        </div> 
    )
}

export default App;
