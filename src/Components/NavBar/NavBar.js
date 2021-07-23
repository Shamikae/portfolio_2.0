import './NavBar.css';
import { Link } from 'react-scroll';
import logo from '../Assets/SE_logo.png';
// import Logo from '../Logo/Logo';

function click() {
    console.log("hit")
}
function NavBar() {
    return (
        <div className="NavBar">

                < Link  onClick={click} to='landing' smooth={true}><img src={logo} alt="logo" className="App-logo" /></Link>
                < Link  to='landing' smooth={true}>Landing</Link>
                < Link  to='about' smooth={true}>About</Link>
                < Link  to='projects' smooth={true}>Projects</Link>
                < Link  to='resume' smooth={true}>Resume</Link>
                < Link  to='contact' smooth={true}>Contact</Link>
                < Link  to='' smooth={true}>Light and Dark</Link>
            
        </div>
    )
}

export default NavBar;