import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../Components/Assets/SE_logo.png'

function NavBar() {
    return(
        <div className="navBar">
            < Link to='/'>Logo<img src={logo}/> </Link>
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