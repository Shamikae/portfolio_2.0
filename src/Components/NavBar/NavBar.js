import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/SE_logo.png';
// import Logo from '../Logo/Logo';


function NavBar() {
    return (
        <div className="NavBar">

                < Link to='/'><img src={logo} alt="logo" className="App-logo" /></Link>
                < Link to='/'>Landing</Link>
                < Link to='/about'>About</Link>
                < Link to='/projects'>Projects</Link>
                < Link to='/contact'>Contact</Link>
                < Link to='/resume'>Resume</Link>
                < Link to='/'>Light and Dark</Link>
            
        </div>
    )
}

export default NavBar;