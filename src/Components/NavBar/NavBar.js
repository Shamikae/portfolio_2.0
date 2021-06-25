import React from 'react';
import './NavBar.css';


function NavBar() {
    return (
        <div className="navBar">
            < Link='/'>Logo</Link>
            < Link='/'>Landing</Link>
            < Link='/about'>About</Link>
            < Link='/'>Projects</Link>
            < Link='/'>Contact</Link>
            < Link='/'>Resume</Link>
            < Link='/'>Light and Dark</Link>
        </div> 
    )
}

export default NavBar;