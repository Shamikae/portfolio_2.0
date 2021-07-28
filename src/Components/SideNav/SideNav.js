import './SideNav.css';
import { Link } from 'react-scroll';
import logo from '../Assets/SE_logo.png';
// import Logo from '../Logo/Logo';

  function closeNav() {
      return(
    document.getElementById("mySidenav").style.width = "0")
  }
function SideNav() {
    return (
        <div id='mySidenav' className="SideNav">
            

            < Link to="SideNav" class="closebtn" onclick="closeNav()">&times;</Link>
            < Link to='landing' smooth={true}><img src={logo} alt="logo" className="App-logo" /></Link>
            < Link to='landing' smooth={true}>Landing</Link>
            < Link to='about' smooth={true}>About</Link>
            < Link to='projects' smooth={true}>Projects</Link>
            < Link to='resume' smooth={true}>Resume</Link>
            < Link to='contact' smooth={true}>Contact</Link>
            < Link  to='' smooth={true}>Light and Dark</Link>
            
        </div>
    )
}

export default SideNav;