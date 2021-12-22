import React from 'react'
import './navbar.scss'
import netflixLogo from '../../assets/netflix-logo.png'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="left">
                    <img src={netflixLogo} alt="netflix-logo"/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon'/>
                    <span>KID</span>
                    <Notifications className='icon'/>
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                <ArrowDropDown className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar