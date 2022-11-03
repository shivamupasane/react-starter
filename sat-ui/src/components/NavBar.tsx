import React, { Component } from 'react'
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { SideBarData } from './SideBarData';
import './NavBar.css';
import { IconContext } from 'react-icons/lib';
import user from '../assets/images/user.jpg'
export class NavBar extends Component {
  toggleSideBar = () => {
    this.props.sideBarState(!this.state.sideBar);
    this.setState({sideBar: !this.state.sideBar})};
  constructor(props) {
    super(props);
    this.state = {
      sideBar: false
    };
  }
  render() {
    return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
      <div className='navbar'>
        <header className={this.state.sideBar ? 'd-flex header active': 'd-flex header'}>
        <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={this.toggleSideBar}/>
        </Link>
        <h1 className='main-header'>SAT</h1>
        </header>
      </div>
      <nav className={this.state.sideBar ? 'nav-menu d-block active': 'nav-menu d-block'}>
      <div className='sidebar-profile'>
    <div className="user-pic">
      <img className="img-responsive img-rounded" src={user} alt="User picture"/>      
    </div>
    <div className="user-info">
      <span className="user-role">Admin</span>      
    </div>
  </div>
  <div>
        <ul className='nav-menu-items mb-0'>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className='nav-text'>
                <Link to={item.url}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className='nav-text border-top border-white mt-5'>
        <Link to='/logout'>
        <FaIcons.FaSignOutAlt/>
        <span>Logout</span>
                </Link>
          
        </div>
        </div>
      </nav>
      </IconContext.Provider>
      </>
    )
  }
}

export default NavBar