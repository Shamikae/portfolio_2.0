import './App.css';
import { BrowserRouter as Router, Route, Switch } from  'react'
import NavBar from '.Components/NavBar/NavBar';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <NavBar/>
            <h1>Test</h1>
        </div> 
    )
}

export default App;
