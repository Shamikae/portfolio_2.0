import './SideNav.css';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom'
import logo from '../Assets/SE_logo.png';
// import Logo from '../Logo/Logo';

//   function closeNav() {
//       return(
//     document.getElementById("mySidenav").style.width = "0")
//   }
// function SideNav() {
//     return (
//         <div id='mySidenav' className="SideNav">
            

//             < Link to="SideNav" class="closebtn" onclick="closeNav()">&times;</Link>
//             < Link to='landing' smooth={true}><img src={logo} alt="logo" className="App-logo" /></Link>
//             < Link to='landing' smooth={true}>Landing</Link>
//             < Link to='about' smooth={true}>About</Link>
//             < Link to='projects' smooth={true}>Projects</Link>
//             < Link to='resume' smooth={true}>Resume</Link>
//             < Link to='contact' smooth={true}>Contact</Link>
//             < Link  to='' smooth={true}>Light and Dark</Link>
            
//         </div>
//     )
// }

const SideNav = ({show}) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <img src={logo} alt="Logo" className='logo' />
                <ul>
                <li>< Link to='/about' smooth={true}>About</Link></li>
                <li>< Link to='/projects' smooth={true}>Projects</Link></li>
                <li>< Link to='resume' smooth={true}>Resume</Link></li>
                <li>< Link to='contact' smooth={true}>Contact</Link></li>
                <li>< Link to='' smooth={true}>Light and Dark</Link></li>
                </ul>
        </div>
    )
}

export default SideNav;