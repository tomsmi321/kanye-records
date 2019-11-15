import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand" to='/'>
                <i className="fas fa-music" /> KanyeRecords
            </Link>


            <div>
                <Link to='/' style={{color: 'white', marginRight: '2rem'}}>Home</Link>
                <Link to='/about' style={{color: 'white'}}>About</Link>
            </div>
        </nav>
    )
}

export default NavBar;