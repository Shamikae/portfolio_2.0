import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <div className="navBar">
            < Link to='/'>Logo</Link>
            < Link to='/'>Landing</Link>
            < Link to='/about'>About</Link>
            < Link to='/projects'>Projects</Link>
            < Link to='/contact'>Contact</Link>
            < Link to='/'>Resume</Link>
            < Link to='/'>Light and Dark</Link>
        </div> 
    )
}

export default NavBar;